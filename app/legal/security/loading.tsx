export default function SecurityLoading() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-background via-soft to-medium min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="-top-40 -right-40 absolute bg-primary/20 blur-3xl rounded-full w-80 h-80 animate-pulse" />
        <div className="-bottom-40 -left-40 absolute bg-primary/20 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000" />
        <div className="top-1/2 left-1/2 absolute bg-primary/10 blur-2xl rounded-full w-60 h-60 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500 transform" />
      </div>

      {/* Loading content */}
      <div className="z-10 relative flex flex-col items-center space-y-6">
        {/* Glass morphism container */}
        <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl glass">
          {/* Animated logo/spinner */}
          <div className="relative">
            <div className="border-4 border-primary/20 rounded-full w-16 h-16"></div>
            <div className="top-0 left-0 absolute border-4 border-t-primary border-transparent rounded-full w-16 h-16 animate-spin"></div>
          </div>

          {/* Loading text */}
          <div className="space-y-2 text-center">
            <h2 className="font-semibold text-foreground text-xl">
              Loading Security
            </h2>
            <p className="text-foreground-secondary text-sm">
              Preparing our security and compliance information
            </p>
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex space-x-2">
          <div className="bg-primary rounded-full w-2 h-2 animate-bounce"></div>
          <div className="bg-primary rounded-full w-2 h-2 animate-bounce delay-100"></div>
          <div className="bg-primary rounded-full w-2 h-2 animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}
