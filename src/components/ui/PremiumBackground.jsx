import React from 'react';

const PremiumBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 w-full h-full bg-[#030014] overflow-hidden">
            {/* 1. Base Gradient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-red-900/20 via-red-900/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-red-900/20 via-purple-900/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

            {/* 2. Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-150 mix-blend-overlay" />

            {/* 3. Perspective Grid Overlay */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
                style={{
                    maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)', // Fades grid in center to focus content
                }}
            />

            {/* Optional: Add a very subtle vignette to focus center */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none" />
        </div>
    );
};

export default PremiumBackground;
