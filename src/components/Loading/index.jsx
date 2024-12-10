const Loading = ({progress}) => {

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center  transition-colors duration-300">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center">
            <svg 
              className="animate-pulse w-16 h-16 text-blue-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
          </div>
  
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in">
            Loading...
          </h1>
  
          <div className="w-full max-w-xs mx-auto bg-white dark:bg-gray-700 rounded-full shadow-md overflow-hidden">
            <div className="h-2 bg-gray-200 dark:bg-gray-600">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-blue-500 dark:bg-blue-400 transform transition-all duration-300 ease-out"
              ></div>
            </div>
          </div>
  
          <p className="text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-200">
            {progress}%
          </p>
        </div>
      </div>
    )
}

export default Loading;