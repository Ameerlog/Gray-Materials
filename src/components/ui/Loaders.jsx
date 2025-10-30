import React from "react";

const Loader = () => {

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white dark:bg-black">
      <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
     
        <div className="absolute w-1 sm:w-2 h-12 sm:h-16 bg-yellow-500 animate-bounce" style={{ animationDuration: "1.2s" }}></div>

    
        <div className="absolute w-12 sm:w-16 h-1 sm:h-2 bg-red-500 animate-bounce rotate-90" style={{ animationDuration: "1.2s", animationDelay: "0.3s" }}></div>

     
        <div className="absolute text-blue-500 font-bold text-xl sm:text-2xl md:text-3xl animate-spin">X</div>

 
        <div className="absolute bottom-0 right-0 text-green-500 text-2xl sm:text-3xl md:text-4xl animate-pulse">*</div>

    
        <div className="absolute top-0 left-2 sm:left-3 w-[1px] h-8 sm:h-10 bg-green-500 opacity-60 animate-ping"></div>
        <div className="absolute top-2 left-0 w-8 sm:w-10 h-[1px] bg-blue-500 opacity-80 animate-ping"></div>
        <div className="absolute bottom-1 right-0 w-6 sm:w-8 h-[1px] bg-yellow-500 opacity-50 animate-ping"></div>
      </div>
    </div>
  );
};
export default Loader;
