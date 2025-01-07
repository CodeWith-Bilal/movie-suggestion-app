
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="relative">
      
        <div className="absolute rounded-full border-4 border-t-transparent border-blue-500 h-24 w-24 animate-spin"></div>
        <div className="absolute rounded-full border-4 border-t-transparent border-purple-500 h-20 w-20 animate-spin-slow"></div>
    
        <div className="flex space-x-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="h-4 w-4 bg-purple-500 rounded-full animate-bounce delay-150"></div>
          <div className="h-4 w-4 bg-cyan-500 rounded-full animate-bounce delay-300"></div>
        </div>
        
        <div className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500 h-10 w-10 shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Loader;
