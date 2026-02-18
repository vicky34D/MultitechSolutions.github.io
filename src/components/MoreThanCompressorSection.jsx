import React from 'react';

const MoreThanCompressorSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem 8rem 2rem',
            textAlign: 'center',
            backgroundColor: '#fff' // Assuming white background
        }}>
            <h2 style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#374151',
                marginBottom: '4rem',
                lineHeight: '0.9',
                textTransform: 'uppercase',
                fontFamily: '"Oswald", sans-serif',
                letterSpacing: '-2px'
            }}>
                More than an online video compressor
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive 2 columns
                gap: '4rem',
                textAlign: 'left',
                marginBottom: '4rem',
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#4B5563'
            }}>
                <p>
                    VEED's video compressor is only one of the many tools you can use when you choose our platform. From cropping and light and color adjustments to video filtering and compressing videos, our video editor has got it all. You can remove your video's
                </p>
                <p>
                    background in one click and replace it with an image or another video. Remove filler words in your recordings, eliminate background noise in your audio, and more. Try VEED today and experience powerful video editing without the learning curve!
                </p>
            </div>

            <div style={{
                maxWidth: '100%',
                margin: '0 auto',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
                {/* Using the copied image from public folder */}
                <img
                    src="/video-editor-mockup.png"
                    alt="VEED Video Editor Interface Mockup"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
            </div>
        </section>
    );
};

export default MoreThanCompressorSection;
