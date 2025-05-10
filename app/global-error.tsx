"use client";

const GlobalError = ({ error }: { error: Error }) => {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-bold text-4xl">Error</h1>
        <p className="text-muted-foreground">{error.message}</p>
      </main>
    </>
  );
};
export default GlobalError;
