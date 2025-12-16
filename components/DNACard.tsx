"use client";

import { motion } from "framer-motion";
import { DNAProfile } from "@/lib/dnaAnalyzer";
import { Trait } from "@/lib/traits";
import DNAHelix from "@/components/DNAHelix";
import { useDNASignature } from "@/hooks/useDNASignature";

interface DNACardProps {
    profile: DNAProfile;
    traits: Record<string, Trait>;
    onShare: () => void;
    onReset: () => void;
}

export default function DNACard({ profile, traits, onShare, onReset }: DNACardProps) {
    const traitEntries = Object.entries(profile.traits);
    const { claimSignature, isPending, isSuccess, isError, txHash } = useDNASignature(profile);

    const handleClaim = async () => {
        try {
            await claimSignature();
        } catch (error) {
            console.error("Failed to claim signature:", error);
        }
    };

    return (
        <motion.div
            className="dna-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="dna-card-inner">
                {/* Header */}
                <div className="dna-card-header">
                    <span className="dna-label">🧬 YOUR SOULPRINT</span>
                    <motion.span
                        className={`rarity-badge ${profile.rarity.tier}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                    >
                        {profile.rarity.icon} {profile.rarity.label}
                    </motion.span>
                </div>

                {/* DNA Visual */}
                <motion.div
                    className="dna-visual"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <DNAHelix traits={profile.traits} />
                </motion.div>

                {/* DNA Code */}
                <motion.div
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <span
                        style={{
                            fontFamily: "'Orbitron', monospace",
                            fontSize: "12px",
                            letterSpacing: "2px",
                            color: "var(--cyan)",
                            background: "rgba(34, 211, 238, 0.1)",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            border: "1px solid rgba(34, 211, 238, 0.2)",
                        }}
                    >
                        {profile.dnaCode}
                    </span>
                </motion.div>

                {/* Traits */}
                <div className="traits-section">
                    <h3 className="traits-title">Personality Traits</h3>
                    <div className="traits-grid">
                        {traitEntries.map(([traitId, value], index) => {
                            const trait = traits[traitId];
                            if (!trait) return null;

                            return (
                                <motion.div
                                    key={traitId}
                                    className="trait-item"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <div className="trait-header">
                                        <span className="trait-icon">{trait.icon}</span>
                                        <span className="trait-name">{trait.name}</span>
                                    </div>
                                    <div className="trait-bar-container">
                                        <motion.div
                                            className={`trait-bar ${traitId}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${value}%` }}
                                            transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                                        />
                                    </div>
                                    <div className="trait-value">{value}%</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Score */}
                <motion.div
                    className="score-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="score-label">DNA Score</div>
                    <div className="score-value">
                        {profile.score}
                        <span className="score-max">/1000</span>
                    </div>
                </motion.div>

                {/* Claim DNA Signature Button */}
                <motion.div
                    className="claim-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                >
                    {!isSuccess ? (
                        <motion.button
                            className={`btn-claim ${isPending ? 'pending' : ''}`}
                            onClick={handleClaim}
                            disabled={isPending}
                            whileHover={!isPending ? { scale: 1.02 } : {}}
                            whileTap={!isPending ? { scale: 0.98 } : {}}
                        >
                            {isPending ? (
                                <>
                                    <span className="claim-spinner"></span>
                                    Claiming...
                                </>
                            ) : (
                                <>
                                    🔐 Claim DNA Signature
                                </>
                            )}
                        </motion.button>
                    ) : (
                        <div className="claim-success">
                            <span className="claim-success-icon">✅</span>
                            <span className="claim-success-text">DNA Signature Claimed!</span>
                            {txHash && (
                                <a
                                    href={`https://basescan.org/tx/${txHash}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="claim-tx-link"
                                >
                                    View on BaseScan →
                                </a>
                            )}
                        </div>
                    )}
                    {isError && (
                        <p className="claim-error">Failed to claim. Please try again.</p>
                    )}
                    <p className="claim-hint">
                        Record your DNA on Base blockchain
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="button-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                >
                    <motion.button
                        className="btn btn-primary"
                        onClick={onShare}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="btn-icon">📤</span>
                        Share
                    </motion.button>
                    <motion.button
                        className="btn btn-secondary"
                        onClick={onReset}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="btn-icon">🔄</span>
                        New Scan
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}

