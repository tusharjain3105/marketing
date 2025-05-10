"use client";

const MainErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center my-24 w-full">
          <h1 className="font-bold text-4xl">Error</h1>
          <p className="text-muted-foreground">{error.message}</p>
        </div>
      </main>
    </>
  );
};
export default MainErrorBoundary;
