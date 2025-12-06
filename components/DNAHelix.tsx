"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface DNAHelixProps {
    traits: Record<string, number>;
}

export default function DNAHelix({ traits }: DNAHelixProps) {
    // Generate helix nodes based on traits
    const nodes = useMemo(() => {
        const traitValues = Object.values(traits);
        const colors = [
            "#6366F1", // indigo
            "#A855F7", // purple
            "#EC4899", // pink
            "#22D3EE", // cyan
            "#F59E0B", // amber
            "#10B981", // emerald
        ];

        const result = [];
        const nodeCount = 12;

        for (let i = 0; i < nodeCount; i++) {
            const colorIndex = i % colors.length;
            const traitIndex = i % traitValues.length;
            const size = 8 + (traitValues[traitIndex] / 100) * 8;

            // Calculate position on helix
            const angle = (i / nodeCount) * Math.PI * 2;
            const yPos = (i / nodeCount) * 140;
            const xLeft = Math.cos(angle) * 30 - 30;
            const xRight = Math.cos(angle + Math.PI) * 30 + 30;

            result.push({
                id: i,
                color: colors[colorIndex],
                size,
                yPos,
                xLeft,
                xRight,
                delay: i * 0.1,
            });
        }

        return result;
    }, [traits]);

    return (
        <div
            style={{
                position: "relative",
                width: "100px",
                height: "160px",
                perspective: "500px",
            }}
        >
            <motion.div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                }}
                animate={{ rotateY: 360 }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: node.delay, duration: 0.3 }}
                    >
                        {/* Left Node */}
                        <motion.div
                            style={{
                                position: "absolute",
                                width: node.size,
                                height: node.size,
                                borderRadius: "50%",
                                background: node.color,
                                boxShadow: `0 0 ${node.size}px ${node.color}`,
                                left: `calc(50% + ${node.xLeft}px)`,
                                top: node.yPos,
                                transform: "translateX(-50%)",
                            }}
                            animate={{
                                boxShadow: [
                                    `0 0 ${node.size}px ${node.color}`,
                                    `0 0 ${node.size * 2}px ${node.color}`,
                                    `0 0 ${node.size}px ${node.color}`,
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: node.delay,
                            }}
                        />

                        {/* Right Node */}
                        <motion.div
                            style={{
                                position: "absolute",
                                width: node.size,
                                height: node.size,
                                borderRadius: "50%",
                                background: node.color,
                                boxShadow: `0 0 ${node.size}px ${node.color}`,
                                left: `calc(50% + ${node.xRight}px)`,
                                top: node.yPos,
                                transform: "translateX(-50%)",
                            }}
                            animate={{
                                boxShadow: [
                                    `0 0 ${node.size}px ${node.color}`,
                                    `0 0 ${node.size * 2}px ${node.color}`,
                                    `0 0 ${node.size}px ${node.color}`,
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: node.delay + 0.5,
                            }}
                        />

                        {/* Bridge between nodes */}
                        <motion.div
                            style={{
                                position: "absolute",
                                height: "2px",
                                background: `linear-gradient(90deg, ${node.color}, transparent 50%, ${node.color})`,
                                left: `calc(50% + ${node.xLeft}px + ${node.size / 2}px)`,
                                top: node.yPos + node.size / 2 - 1,
                                width: `${node.xRight - node.xLeft - node.size}px`,
                                opacity: 0.4,
                            }}
                            animate={{
                                opacity: [0.2, 0.6, 0.2],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: node.delay,
                            }}
                        />
                    </motion.div>
                ))}

                {/* Center glow */}
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
                        filter: "blur(10px)",
                    }}
                />
            </motion.div>
        </div>
    );
}
