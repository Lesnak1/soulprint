import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service - SOULPRINT',
    description: 'Terms of Service for SOULPRINT - Your On-Chain DNA',
};

export default function TermsOfService() {
    return (
        <div className="app-container">
            <div className="terms-container">
                {/* Header */}
                <header className="header">
                    <div className="logo-container">
                        <span className="logo-icon">🧬</span>
                        <h1 className="app-title">SOULPRINT</h1>
                    </div>
                    <p className="app-subtitle">Terms of Service</p>
                </header>

                {/* Terms Content */}
                <div className="terms-content">
                    <section className="terms-section">
                        <h2 className="terms-heading">1. Acceptance of Terms</h2>
                        <p className="terms-text">
                            By accessing and using SOULPRINT (&quot;the Service&quot;), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use the Service.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">2. Description of Service</h2>
                        <p className="terms-text">
                            SOULPRINT is a Farcaster Mini App built on Base that analyzes on-chain blockchain activity and Farcaster social data to generate a unique digital DNA profile. The Service provides:
                        </p>
                        <ul className="terms-list">
                            <li>Blockchain activity analysis</li>
                            <li>Personality trait scoring across 6 dimensions (Builder, Degen, OG, Creator, Whale, Diamond)</li>
                            <li>Unique DNA code generation</li>
                            <li>Rarity score calculation (0-1000)</li>
                            <li>Visual DNA helix representation</li>
                            <li>Social sharing capabilities on Farcaster</li>
                            <li>Future NFT minting functionality (coming soon)</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">3. Entertainment and Educational Purpose</h2>
                        <p className="terms-text">
                            <strong>IMPORTANT DISCLAIMER:</strong> SOULPRINT is provided for entertainment and educational purposes only. The DNA analysis, personality traits, and rarity scores are algorithmic representations based on on-chain data and should not be interpreted as:
                        </p>
                        <ul className="terms-list">
                            <li>Financial advice or investment recommendations</li>
                            <li>Psychological or personality assessments</li>
                            <li>Guarantees of future blockchain activity or success</li>
                            <li>Scientific or medical analysis of any kind</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">4. Data Collection and Privacy</h2>
                        <p className="terms-text">
                            SOULPRINT analyzes publicly available blockchain data and Farcaster profile information to generate your DNA profile. We collect and process:
                        </p>
                        <ul className="terms-list">
                            <li>Your wallet address (when connected)</li>
                            <li>Your Farcaster ID (FID) and public profile information</li>
                            <li>Publicly available on-chain transaction history on Base</li>
                            <li>Publicly available Farcaster activity data</li>
                        </ul>
                        <p className="terms-text">
                            All data analyzed is publicly available on the blockchain or Farcaster network. We do not store private keys, passwords, or any sensitive personal information. Your DNA profile results are generated in real-time and are not permanently stored on our servers.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">5. User Responsibilities</h2>
                        <p className="terms-text">
                            As a user of SOULPRINT, you agree to:
                        </p>
                        <ul className="terms-list">
                            <li>Use the Service only for lawful purposes</li>
                            <li>Not attempt to manipulate, hack, or exploit the DNA analysis algorithm</li>
                            <li>Not use the Service to harass, abuse, or harm others</li>
                            <li>Not misrepresent your DNA profile results as official assessments</li>
                            <li>Take full responsibility for securing your wallet and private keys</li>
                            <li>Understand that blockchain transactions are irreversible</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">6. Intellectual Property Rights</h2>
                        <p className="terms-text">
                            The SOULPRINT name, logo, design, DNA visualization algorithms, and all related intellectual property are owned by the creators of SOULPRINT. Your DNA profile results and generated DNA code are provided to you for personal use and sharing on Farcaster.
                        </p>
                        <p className="terms-text">
                            Future NFT minting functionality will grant you ownership rights to the specific NFT representation of your DNA profile, subject to separate NFT terms and smart contract conditions.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">7. No Warranties</h2>
                        <p className="terms-text">
                            SOULPRINT is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without any warranties of any kind, either express or implied. We do not guarantee that:
                        </p>
                        <ul className="terms-list">
                            <li>The Service will be uninterrupted, timely, secure, or error-free</li>
                            <li>The DNA analysis results will be accurate or complete</li>
                            <li>Any errors in the Service will be corrected</li>
                            <li>The Service will meet your specific requirements</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">8. Limitation of Liability</h2>
                        <p className="terms-text">
                            To the fullest extent permitted by law, SOULPRINT and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from:
                        </p>
                        <ul className="terms-list">
                            <li>Your use or inability to use the Service</li>
                            <li>Any unauthorized access to or alteration of your data</li>
                            <li>Any blockchain transaction errors or losses</li>
                            <li>Decisions made based on DNA profile results</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">9. Base Network and Blockchain Risks</h2>
                        <p className="terms-text">
                            SOULPRINT operates on the Base blockchain network. You acknowledge and accept the inherent risks associated with blockchain technology, including but not limited to:
                        </p>
                        <ul className="terms-list">
                            <li>Network congestion and transaction delays</li>
                            <li>Gas fees and transaction costs</li>
                            <li>Smart contract vulnerabilities</li>
                            <li>Irreversible transactions</li>
                            <li>Regulatory uncertainty</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">10. Farcaster Integration</h2>
                        <p className="terms-text">
                            SOULPRINT is built as a Farcaster Mini App and integrates with the Farcaster protocol. Your use of Farcaster-related features is also subject to Farcaster&apos;s own terms of service and policies. We are not responsible for any changes to the Farcaster protocol that may affect the Service.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">11. Future Features</h2>
                        <p className="terms-text">
                            Features marked as &quot;coming soon&quot; (such as NFT minting) are subject to change or may not be implemented. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without notice.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">12. Changes to Terms</h2>
                        <p className="terms-text">
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of SOULPRINT after any changes constitutes acceptance of the new Terms of Service.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">13. Governing Law</h2>
                        <p className="terms-text">
                            These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2 className="terms-heading">14. Contact Information</h2>
                        <p className="terms-text">
                            For questions or concerns about these Terms of Service, please contact the SOULPRINT team via Farcaster at{' '}
                            <a 
                                href="https://warpcast.com/heleknax" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="terms-link"
                            >
                                @heleknax
                            </a>.
                        </p>
                    </section>

                    <section className="terms-section">
                        <p className="terms-footer">
                            Last Updated: December 11, 2025
                        </p>
                    </section>
                </div>

                {/* Back Button */}
                <div className="button-container">
                    <Link href="/" className="btn btn-primary btn-back">
                        <span className="btn-icon">←</span>
                        Back to App
                    </Link>
                </div>

                {/* Footer */}
                <footer className="footer">
                    <p className="footer-text">
                        Built on{' '}
                        <a
                            href="https://base.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Base
                        </a>{' '}
                        ⚡{' '}
                        <a
                            href="https://farcaster.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Farcaster
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    );
}
