export function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

export function shortenAddress(address: string): string {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatScore(score: number): string {
    return score.toString().padStart(3, '0');
}

export const METADATA = {
    name: 'SOULPRINT',
    iconImageUrl: '/icon.png',
};
