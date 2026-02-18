import React from 'react';

const HowToCard = ({ step, title, description, Icon }) => (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '400px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)'
    }}>
        <div style={{
            width: '120px',
            height: '120px',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            overflow: 'hidden'
        }}>
            <Icon />
        </div>

        <div style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: '#9CA3AF',
            letterSpacing: '0.05em',
            marginBottom: '0.5rem',
            alignSelf: 'flex-start'
        }}>{step}</div>

        <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '1.5rem',
            alignSelf: 'flex-start',
            textAlign: 'left'
        }}>{title}</h3>

        <p style={{
            fontSize: '1.125rem',
            color: '#4B5563',
            lineHeight: '1.6',
            textAlign: 'left'
        }}>{description}</p>
    </div>
);

const UploadIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="60" fill="url(#paint0_linear)" />
        <path d="M40 70L60 50L80 70" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 50V90" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 50V46C40 37.1634 47.1634 30 56 30H64C72.8366 30 80 37.1634 80 46V50" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <defs>
            <linearGradient id="paint0_linear" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#818CF8" />
            </linearGradient>
        </defs>
    </svg>
);

const ReduceIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="80" height="80" rx="16" fill="url(#paint1_linear)" />
        <path d="M50 45L75 60L50 75V45Z" fill="white" />
        <defs>
            <linearGradient id="paint1_linear" x1="60" y1="20" x2="60" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#C4B5FD" />
            </linearGradient>
        </defs>
    </svg>
);

const ExportIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="60" height="70" rx="8" fill="url(#paint2_linear)" />
        <path d="M80 30L90 40H80V30Z" fill="rgba(255,255,255,0.5)" />
        <defs>
            <linearGradient id="paint2_linear" x1="60" y1="30" x2="60" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#93C5FD" />
            </linearGradient>
        </defs>
    </svg>
);


const HowToSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem 8rem 2rem',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                color: '#1F2937',
                marginBottom: '4rem',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-1px'
            }}>
                How to compress a video online:
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem'
            }}>
                <HowToCard
                    icon="UploadIcon" // Will render components directly
                    step="Step 1"
                    title="Upload your file"
                    description="Drag and drop your video directly into VEED. Our platform supports all major video formats, making compression easy regardless of your source file."
                    Icon={UploadIcon}
                />

                <HowToCard
                    icon="ReduceIcon"
                    step="Step 2"
                    title="Reduce file size"
                    description="The file compressor automatically balances quality and file size for optimal results. You can also adjust the quality and resolution settings yourself, with real-time file size estimates as you select different options."
                    Icon={ReduceIcon}
                />

                <HowToCard
                    icon="ExportIcon"
                    step="Step 3"
                    title="Export or edit"
                    description={<>Download your compressed video or explore more tools. Use Magic Cut to auto-trim <a href="#" style={{ color: '#4F46E5', textDecoration: 'none' }}>filler words</a> and long pauses. Or instantly share your video with VEED's built-in <a href="#" style={{ color: '#4F46E5', textDecoration: 'none' }}>web hosting</a>.</>}
                    Icon={ExportIcon}
                />
            </div>
        </section>
    );
};

export default HowToSection;
