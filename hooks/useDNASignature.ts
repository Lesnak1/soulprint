'use client';

import { useSendCalls } from 'wagmi/experimental';
import { useAccount } from 'wagmi';
import { useState, useCallback } from 'react';
import { keccak256, toHex } from 'viem';
import { getBuilderCodeCapabilities } from '@/lib/builderCode';
import { DNAProfile } from '@/lib/dnaAnalyzer';

// DNA Signature Registry Contract (placeholder - can be any address)
// This address will receive 0 ETH transactions with DNA hash as calldata
const DNA_SIGNATURE_ADDRESS = '0x0000000000000000000000000000000000000000' as const;

interface UseDNASignatureReturn {
    claimSignature: () => Promise<void>;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: Error | null;
    txHash: string | null;
    isClaimed: boolean;
}

/**
 * Hook for claiming DNA Signature on-chain
 * Records a hash of the DNA profile on Base blockchain
 * Includes Builder Code attribution for onchain activity tracking
 */
export function useDNASignature(profile: DNAProfile | null): UseDNASignatureReturn {
    const { address } = useAccount();
    const [isClaimed, setIsClaimed] = useState(false);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [localError, setLocalError] = useState<Error | null>(null);

    const { sendCalls, isPending, isSuccess, isError, error, data } = useSendCalls();

    const claimSignature = useCallback(async () => {
        if (!profile || !address) {
            throw new Error('Profile and wallet address required');
        }

        setLocalError(null);

        // Create a unique hash from the DNA profile
        const profileData = JSON.stringify({
            address: address.toLowerCase(),
            dnaCode: profile.dnaCode,
            score: profile.score,
            rarity: profile.rarity.tier,
            traits: profile.traits,
            analyzedAt: profile.analyzedAt
        });

        // Generate keccak256 hash of the profile
        const profileHash = keccak256(toHex(profileData));

        // Create calldata: 4-byte function selector + profile hash
        // Using a custom "claimDNA(bytes32)" signature
        const functionSelector = '0x12345678'; // Placeholder selector for DNA claim
        const calldata = `${functionSelector}${profileHash.slice(2)}` as `0x${string}`;

        try {
            sendCalls({
                calls: [{
                    to: DNA_SIGNATURE_ADDRESS,
                    data: calldata,
                    value: BigInt(0)
                }],
                capabilities: getBuilderCodeCapabilities()
            });

            setIsClaimed(true);
        } catch (err) {
            console.error('DNA Signature claim failed:', err);
            setLocalError(err as Error);
            throw err;
        }
    }, [profile, address, sendCalls]);

    // Extract transaction hash from data if available
    const extractedTxHash = data && typeof data === 'object' && 'id' in data
        ? (data as { id: string }).id
        : null;

    return {
        claimSignature,
        isPending,
        isSuccess: isSuccess || isClaimed,
        isError: isError || !!localError,
        error: (error as Error | null) || localError,
        txHash: txHash || extractedTxHash,
        isClaimed
    };
}

