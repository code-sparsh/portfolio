import React, { useState } from 'react';

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="h-full lg:w-1/2 flex flex-col justify-center gap-10 mx-8 md:mx-0">
            <div className="text-5xl text-yellow-200 text-center">Resume</div>
            
            {/* Skeleton loader */}
            {isLoading && (
                <div className="w-full h-4/5 bg-gray-300 animate-pulse rounded-md"></div>
            )}

            {/* Iframe */}
            <iframe
                src={import.meta.env.VITE_RESUME_URL}
                className={`w-full h-4/5 ${isLoading ? 'hidden' : ''} rounded-md`}
                onLoad={handleIframeLoad}
                allow="autoplay"
            />
        </div>
    );
};

export default Resume;
