const Loading = () => {
  return (
    <div className="fixed inset-0 bg-eazy-black flex items-center justify-center z-50">
      {/* Background effects */}
      <div className="orb orb-cyan w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      
      <div className="text-center relative z-10">
        {/* Animated spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-primary border-r-accent-secondary animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent-primary border-l-accent-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-xl gradient-text">E</span>
          </div>
        </div>
        
        {/* Loading text */}
        <p className="text-eazy-grey text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
