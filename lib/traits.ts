export interface Trait {
    id: string;
    name: string;
    icon: string;
    description: string;
    color: string;
}

export const TRAITS: Record<string, Trait> = {
    builder: {
        id: 'builder',
        name: 'Builder',
        icon: '🏗️',
        description: 'Creates and deploys smart contracts',
        color: '#6366F1',
    },
    degen: {
        id: 'degen',
        name: 'Degen',
        icon: '🎰',
        description: 'High risk, high reward trader',
        color: '#EC4899',
    },
    og: {
        id: 'og',
        name: 'OG',
        icon: '👑',
        description: 'Early adopter and influencer',
        color: '#F59E0B',
    },
    creator: {
        id: 'creator',
        name: 'Creator',
        icon: '🎨',
        description: 'NFT creator and artist',
        color: '#A855F7',
    },
    whale: {
        id: 'whale',
        name: 'Whale',
        icon: '🐋',
        description: 'High-value holder',
        color: '#22D3EE',
    },
    diamond: {
        id: 'diamond',
        name: 'Diamond',
        icon: '💎',
        description: 'Long-term holder, never sells',
        color: '#8B5CF6',
    },
};

export type RarityTier = 'common' | 'rare' | 'epic' | 'legendary';

export interface RarityInfo {
    tier: RarityTier;
    label: string;
    icon: string;
    minScore: number;
}

export const RARITY_TIERS: RarityInfo[] = [
    { tier: 'legendary', label: 'LEGENDARY', icon: '⭐', minScore: 800 },
    { tier: 'epic', label: 'EPIC', icon: '💜', minScore: 600 },
    { tier: 'rare', label: 'RARE', icon: '💙', minScore: 400 },
    { tier: 'common', label: 'COMMON', icon: '⚪', minScore: 0 },
];

export function getRarityTier(score: number): RarityInfo {
    for (const tier of RARITY_TIERS) {
        if (score >= tier.minScore) {
            return tier;
        }
    }
    return RARITY_TIERS[RARITY_TIERS.length - 1];
}
