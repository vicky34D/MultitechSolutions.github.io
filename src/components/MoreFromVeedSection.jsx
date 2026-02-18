import React from 'react';

const Card = ({ color, title, description, imageTitle, imageSub }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Thumbnail with text overlay */}
        <div style={{
            backgroundColor: color,
            borderRadius: '16px',
            aspectRatio: '16/9',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                lineHeight: '1.1',
                fontFamily: '"Oswald", sans-serif', // Assuming a condensed font or similar
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
                {imageTitle}
            </h3>
            {imageSub && <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>{imageSub}</p>}
        </div>

        {/* Content */}
        <div>
            <h3 style={{
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                lineHeight: '1.4'
            }}>
                {title}
            </h3>
            <p style={{
                color: '#9CA3AF',
                fontSize: '0.9rem',
                lineHeight: '1.6'
            }}>
                {description}
            </p>
        </div>
    </div>
);

const MoreFromVeedSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '2rem'
        }}>
            <div style={{
                backgroundColor: '#1F1F1F', // Dark grey/black
                borderRadius: '32px',
                padding: '4rem 3rem',
                color: 'white'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    fontFamily: '"Oswald", sans-serif',
                    marginBottom: '3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-1px'
                }}>
                    More From Veed
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    <Card
                        color="#818CF8" // Periwinkle/Blue
                        imageTitle="Compress Videos Without Losing Quality"
                        title="6 Easy Ways to Compress Video Files (Without Losing Quality)"
                        description="Figuring out how to compress a video file without losing quality doesn't have to be a long and drawn-out process. Try these simple methods now!"
                    />
                    <Card
                        color="#34D399" // Green
                        imageTitle="Top 5 Methods"
                        imageSub="to Compress Your Video"
                        title="Top 5 Methods to Compress Your Video Files for Email (And When to Use Each)"
                        description="With so many different ways to compress your video file for email, it can be difficult to understand which is the best method for you. We eliminate the tedious guesswork."
                    />
                    <Card
                        color="#F472B6" // Pink/Red
                        imageTitle="Send Large Video Files"
                        imageSub="with VEED"
                        title="How to Send Large Video Files (from Desktop, iPhone, and Android)"
                        description="Have a large video file that you'd like to share? Check out the 7 best methods that can help with that."
                    />
                </div>
            </div>
        </section>
    );
};

export default MoreFromVeedSection;
