"use client";

import { motion } from "framer-motion";

interface WelcomeScreenProps {
    onAnalyze: () => void;
    isConnected: boolean;
}

export default function WelcomeScreen({ onAnalyze, isConnected }: WelcomeScreenProps) {
    const features = [
        { icon: "🧬", text: "Unique DNA fingerprint from your activity" },
        { icon: "📊", text: "6 personality traits analyzed" },
        { icon: "⭐", text: "Rarity score from 0-1000" },
        { icon: "🎨", text: "Mintable as NFT on Base" },
    ];

    return (
        <motion.div
            className="welcome-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* DNA Icon */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="welcome-icon">🧬</div>
            </motion.div>

            {/* Title */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <h2 className="welcome-title">Discover Your DNA</h2>
                <p className="welcome-description">
                    Your blockchain activity tells a unique story. Let SOULPRINT analyze
                    your on-chain footprint and reveal your digital identity.
                </p>
            </motion.div>

            {/* Features */}
            <motion.div
                className="features-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="feature-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                    >
                        <span className="feature-icon">{feature.icon}</span>
                        <span className="feature-text">{feature.text}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Analyze Button */}
            <motion.div
                className="analyze-container"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <motion.button
                    className="btn-analyze"
                    onClick={onAnalyze}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    🔬 ANALYZE MY DNA
                </motion.button>

                {!isConnected && (
                    <motion.p
                        style={{
                            fontSize: "12px",
                            color: "var(--text-muted)",
                            textAlign: "center",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Connect your wallet for personalized results
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
}
