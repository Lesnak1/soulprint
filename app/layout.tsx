import type { Metadata, Viewport } from 'next';
import './globals.css';
import Provider from '@/providers/Provider';

const APP_URL = "https://soulprint-three.vercel.app";

export const metadata: Metadata = {
    title: 'SOULPRINT - Your On-Chain DNA',
    description: 'Discover your unique blockchain identity. SOULPRINT analyzes your on-chain activity to create a unique digital DNA fingerprint.',
    openGraph: {
        title: 'SOULPRINT - Your On-Chain DNA',
        description: 'What\'s your blockchain personality? Analyze your on-chain activity and discover your unique digital DNA.',
        images: [`${APP_URL}/hero.png`],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SOULPRINT - Your On-Chain DNA',
        description: 'Discover your unique blockchain identity.',
        images: [`${APP_URL}/hero.png`],
    },
    icons: {
        icon: '/icon.png',
        apple: '/icon.png',
    },
    other: {
        'fc:miniapp': JSON.stringify({
            version: "1",
            imageUrl: `${APP_URL}/hero.png`,
            button: {
                title: "Analyze My DNA",
                action: {
                    type: "launch_frame",
                    name: "SOULPRINT",
                    url: APP_URL,
                    splashImageUrl: `${APP_URL}/splash.png`,
                    splashBackgroundColor: "#0A0A0F"
                }
            }
        }),
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
