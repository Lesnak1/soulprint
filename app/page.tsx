"use client";

import { useEffect, useState, useCallback } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { analyzeDNA, DNAProfile } from "@/lib/dnaAnalyzer";
import { TRAITS } from "@/lib/traits";
import DNACard from "@/components/DNACard";
import LoadingAnimation from "@/components/LoadingAnimation";
import WelcomeScreen from "@/components/WelcomeScreen";

type AppState = "welcome" | "loading" | "result";

interface FarcasterContext {
    user?: {
        fid: number;
        username?: string;
        displayName?: string;
        pfpUrl?: string;
    };
}

export default function Home() {
    const [appState, setAppState] = useState<AppState>("welcome");
    const [dnaProfile, setDnaProfile] = useState<DNAProfile | null>(null);
    const [context, setContext] = useState<FarcasterContext | null>(null);
    const [isSDKLoaded, setIsSDKLoaded] = useState(false);

    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    // Initialize Farcaster SDK
    useEffect(() => {
        // Always mark as loaded immediately for UI to render
        setIsSDKLoaded(true);

        const initSDK = async () => {
            try {
                // Try to get Farcaster context (will work inside Farcaster client)
                const ctx = await sdk.context;
                setContext(ctx as FarcasterContext);
                await sdk.actions.ready();
            } catch (error) {
                console.log("Running outside Farcaster client - demo mode");
            }
        };

        initSDK();
    }, []);

    // Auto-connect wallet if available
    useEffect(() => {
        if (isSDKLoaded && !isConnected && connectors.length > 0) {
            connect({ connector: connectors[0] });
        }
    }, [isSDKLoaded, isConnected, connect, connectors]);

    const handleAnalyze = useCallback(async () => {
        setAppState("loading");

        try {
            const profile = await analyzeDNA(address, context?.user?.fid);
            setDnaProfile(profile);
            setAppState("result");
        } catch (error) {
            console.error("Analysis failed:", error);
            setAppState("welcome");
        }
    }, [address, context?.user?.fid]);

    const handleShare = useCallback(async () => {
        if (!dnaProfile) return;

        const shareText = `🧬 My SOULPRINT DNA Score: ${dnaProfile.score}/1000 (${dnaProfile.rarity.label})\n\nDiscover your blockchain DNA 👇`;

        try {
            await sdk.actions.composeCast({
                text: shareText,
                embeds: [window.location.href],
            });
        } catch (error) {
            // Fallback for non-Farcaster environment
            if (navigator.share) {
                navigator.share({
                    title: "My SOULPRINT DNA",
                    text: shareText,
                    url: window.location.href,
                });
            }
        }
    }, [dnaProfile]);

    const handleReset = useCallback(() => {
        setAppState("welcome");
        setDnaProfile(null);
    }, []);

    if (!isSDKLoaded) {
        return (
            <div className="app-container">
                <LoadingAnimation text="Initializing..." />
            </div>
        );
    }

    return (
        <div className="app-container">
            <div className="main-content">
                {/* Header */}
                <header className="header">
                    <div className="logo-container">
                        <span className="logo-icon">🧬</span>
                        <h1 className="app-title">SOULPRINT</h1>
                    </div>
                    <p className="app-subtitle">Your On-Chain DNA</p>
                </header>

                {/* User Info (if connected) */}
                {context?.user && (
                    <div className="user-info">
                        {context.user.pfpUrl && (
                            <img
                                src={context.user.pfpUrl}
                                alt={context.user.displayName || "User"}
                                className="user-avatar"
                            />
                        )}
                        <div className="user-details">
                            <div className="user-name">
                                {context.user.displayName || `FID: ${context.user.fid}`}
                            </div>
                            {context.user.username && (
                                <div className="user-handle">@{context.user.username}</div>
                            )}
                        </div>
                        <div className="user-status" />
                    </div>
                )}

                {/* Main Content based on state */}
                {appState === "welcome" && (
                    <WelcomeScreen onAnalyze={handleAnalyze} isConnected={isConnected} />
                )}

                {appState === "loading" && (
                    <LoadingAnimation text="Analyzing your blockchain DNA..." />
                )}

                {appState === "result" && dnaProfile && (
                    <DNACard
                        profile={dnaProfile}
                        onShare={handleShare}
                        onReset={handleReset}
                        traits={TRAITS}
                    />
                )}

                {/* Follow Builder Section */}
                <div className="builder-section">
                    <div className="builder-card">
                        <span className="builder-label">Built by</span>
                        <div className="builder-info">
                            <span className="builder-name">@heleknax</span>
                        </div>
                        <a
                            href="https://warpcast.com/heleknax"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-follow"
                        >
                            <span>👤</span> Follow Builder
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <footer className="footer">
                    <p className="footer-text">
                        Built on{" "}
                        <a
                            href="https://base.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Base
                        </a>{" "}
                        ⚡{" "}
                        <a
                            href="https://farcaster.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Farcaster
                        </a>
                    </p>
                    <p className="footer-text" style={{ marginTop: '8px' }}>
                        <a
                            href="/terms-of-service"
                            className="footer-link"
                        >
                            Terms of Service
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    );
}
