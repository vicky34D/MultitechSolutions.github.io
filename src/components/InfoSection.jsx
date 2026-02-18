import React from 'react';

const InfoSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem',
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '4rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em'
                }}>
                    Compress video online: Save storage, upload faster, and stream smoothly
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    color: '#374151',
                    fontSize: '1.125rem',
                    lineHeight: '1.7'
                }}>
                    <div>
                        <p>
                            Our video compressor reduces your file's size in one click, saving you storage space while preserving visual quality. Experience faster uploads and downloads, and enjoy smooth streaming. Optimize your site's performance by reducing video file sizes to enhance user experience and page loading times—without compromising video quality.
                        </p>
                    </div>
                    <div>
                        <p>
                            Email videos to clients, colleagues, and sales prospects without exceeding file size limits. Conserve mobile data when sharing videos from your phone and ensure smoother playback for your viewers. Plus, you can edit your videos using VEED's built-in <a href="#" style={{ color: '#4F46E5', textDecoration: 'none' }}>video editor</a>—where you can add subtitles, transcribe your audio, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
