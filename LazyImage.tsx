import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = "", priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setIsTimedOut(false);
    
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

    // Extended timeout for slow hosts like ImgBB
    timeoutRef.current = window.setTimeout(() => {
      if (!isLoaded) {
        setIsTimedOut(true);
      }
    }, 30000); 

    if (imgRef.current?.complete) {
      setIsLoaded(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [src, retryCount]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  const handleError = () => {
    setHasError(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  };

  const handleRetry = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRetryCount(prev => prev + 1);
  };

  const showFallback = hasError || isTimedOut;

  // Detect if 'h-full' or 'h-auto' is passed to decide container height
  const heightClass = className.includes('h-') ? '' : 'h-full';

  return (
    <div className={`relative overflow-hidden w-full ${heightClass} bg-[#0a0a0a] transition-colors duration-500 ${!isLoaded && !showFallback ? 'skeleton' : ''}`}>
      {!showFallback ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} img-fade ${isLoaded ? 'loaded' : 'opacity-0'} block`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center border border-white/5 bg-[#0a0a0a] z-20 min-h-[200px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00A3FF]/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
            {isTimedOut ? 'Server Timeout' : 'Load Error'}
          </span>
          <button 
            onClick={handleRetry}
            className="px-4 py-2 bg-[#00A3FF]/10 border border-[#00A3FF]/20 text-[#00A3FF] text-[9px] uppercase tracking-widest hover:bg-[#00A3FF] hover:text-white transition-all"
          >
            Retry Loading
          </button>
        </div>
      )}
      
      {!isLoaded && !showFallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]/50 z-10 min-h-[200px]">
          <div className="flex flex-col items-center space-y-4">
             <div className="spinner"></div>
             <span className="text-[9px] uppercase tracking-[0.4em] text-[#00A3FF] font-bold animate-pulse">Establishing Connection...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;