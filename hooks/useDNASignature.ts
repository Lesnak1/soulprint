'use client';

import { useSendTransaction, useAccount } from 'wagmi';
import { useState, useCallback, useEffect } from 'react';
import { keccak256, toHex, parseEther } from 'viem';
import { DNAProfile } from '@/lib/dnaAnalyzer';
import { BUILDER_CODE } from '@/lib/builderCode';

interface UseDNASignatureReturn {
    claimSignature: () => void;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: Error | null;
    txHash: string | null;
    isClaimed: boolean;
}

/**
 * Hook for claiming DNA Signature on-chain
 * Sends a self-transaction with DNA hash as calldata
 * Builder Code is tracked via the app's transaction activity
 */
export function useDNASignature(profile: DNAProfile | null): UseDNASignatureReturn {
    const { address } = useAccount();
    const [isClaimed, setIsClaimed] = useState(false);
    const [calldata, setCalldata] = useState<`0x${string}` | undefined>(undefined);

    const {
        sendTransaction,
        isPending,
        isSuccess,
        isError,
        error,
        data: txHash
    } = useSendTransaction();

    // When transaction succeeds, mark as claimed
    useEffect(() => {
        if (isSuccess && txHash) {
            setIsClaimed(true);
        }
    }, [isSuccess, txHash]);

    const claimSignature = useCallback(() => {
        if (!profile || !address) {
            console.error('Profile and wallet address required');
            return;
        }

        // Create a unique hash from the DNA profile
        const profileData = JSON.stringify({
            address: address.toLowerCase(),
            dnaCode: profile.dnaCode,
            score: profile.score,
            rarity: profile.rarity.tier,
            traits: profile.traits,
            analyzedAt: profile.analyzedAt,
            builderCode: BUILDER_CODE
        });

        // Generate keccak256 hash of the profile
        const profileHash = keccak256(toHex(profileData));

        // Create calldata with SOULPRINT signature prefix + profile hash
        // 0x534f554c = "SOUL" in hex (4 bytes function selector style)
        const soulprintPrefix = '0x534f554c';
        const data = `${soulprintPrefix}${profileHash.slice(2)}` as `0x${string}`;

        // Send transaction to self (user's own address)
        // This creates an on-chain record without needing a contract
        sendTransaction({
            to: address,
            value: parseEther('0'),
            data: data
        });

    }, [profile, address, sendTransaction]);

    return {
        claimSignature,
        isPending,
        isSuccess: isSuccess || isClaimed,
        isError,
        error: error as Error | null,
        txHash: txHash || null,
        isClaimed
    };
}


