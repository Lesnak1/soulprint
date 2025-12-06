"use client";

import { motion } from "framer-motion";

interface LoadingAnimationProps {
    text?: string;
}

export default function LoadingAnimation({ text = "Loading..." }: LoadingAnimationProps) {
    return (
        <motion.div
            className="loading-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* DNA Loading Animation */}
            <div className="loading-dna">
                <motion.div
                    className="loading-ring"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="loading-ring"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="loading-ring"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Center DNA Icon */}
                <motion.div
                    style={{
                        position: "absolute",
                        inset: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    🧬
                </motion.div>
            </div>

            {/* Loading Text */}
            <motion.p
                className="loading-text"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                {text}
            </motion.p>

            {/* Progress Steps */}
            <motion.div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "16px",
                }}
            >
                {[
                    "Scanning blockchain...",
                    "Analyzing transactions...",
                    "Calculating traits...",
                    "Generating DNA..."
                ].map((step, index) => (
                    <motion.div
                        key={step}
                        style={{
                            fontSize: "12px",
                            color: "var(--text-muted)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.6 }}
                    >
                        <motion.span
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1, 0.8]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: index * 0.2
                            }}
                        >
                            ●
                        </motion.span>
                        {step}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
