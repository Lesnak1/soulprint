import type { Metadata, Viewport } from 'next';
import './globals.css';
import Provider from '@/providers/Provider';

export const metadata: Metadata = {
    title: 'SOULPRINT - Your On-Chain DNA',
    description: 'Discover your unique blockchain identity. SOULPRINT analyzes your on-chain activity to create a unique digital DNA fingerprint.',
    openGraph: {
        title: 'SOULPRINT - Your On-Chain DNA',
        description: 'What\'s your blockchain personality? Analyze your on-chain activity and discover your unique digital DNA.',
        images: ['/hero.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SOULPRINT - Your On-Chain DNA',
        description: 'Discover your unique blockchain identity.',
        images: ['/hero.png'],
    },
    icons: {
        icon: '/icon.png',
        apple: '/icon.png',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#0A0A0F',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
