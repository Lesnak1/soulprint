import { TRAITS, getRarityTier, RarityInfo } from './traits';

export interface DNAProfile {
    traits: Record<string, number>;
    score: number;
    rarity: RarityInfo;
    dnaCode: string;
    analyzedAt: number;
}

// Simulated DNA analysis based on wallet/user data
// In production, this would fetch real on-chain data
export async function analyzeDNA(
    address?: string,
    fid?: number
): Promise<DNAProfile> {
    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Generate deterministic but varied traits based on address/fid
    const seed = generateSeed(address, fid);

    const traits: Record<string, number> = {};
    let totalScore = 0;

    Object.keys(TRAITS).forEach((traitId, index) => {
        // Generate a value between 20-100 based on seed
        const value = Math.floor(
            20 + ((seed * (index + 1) * 7919) % 80)
        );
        traits[traitId] = value;
        totalScore += value;
    });

    // Normalize score to 0-1000
    const maxPossible = Object.keys(TRAITS).length * 100;
    const normalizedScore = Math.floor((totalScore / maxPossible) * 1000);

    // Generate unique DNA code
    const dnaCode = generateDNACode(seed);

    return {
        traits,
        score: normalizedScore,
        rarity: getRarityTier(normalizedScore),
        dnaCode,
        analyzedAt: Date.now(),
    };
}

function generateSeed(address?: string, fid?: number): number {
    if (address) {
        // Use address characters to generate seed
        return address
            .toLowerCase()
            .split('')
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    }
    if (fid) {
        return fid * 7919;
    }
    // Random seed for demo
    return Math.floor(Math.random() * 1000000);
}

function generateDNACode(seed: number): string {
    const chars = 'ATCG';
    let code = '';
    for (let i = 0; i < 16; i++) {
        code += chars[Math.floor((seed * (i + 1) * 31) % 4)];
        if ((i + 1) % 4 === 0 && i < 15) code += '-';
    }
    return code;
}

export function formatTraitValue(value: number): string {
    return `${value}%`;
}

export function getTraitColor(traitId: string): string {
    return TRAITS[traitId]?.color || '#6366F1';
}
