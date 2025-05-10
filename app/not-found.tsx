import Footer from "./(main)/footer";
import Header from "./(main)/header";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col justify-center items-center my-24">
          <h1 className="font-bold text-4xl">404</h1>
          <p className="text-muted-foreground">Page not found</p>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default NotFoundPage;
