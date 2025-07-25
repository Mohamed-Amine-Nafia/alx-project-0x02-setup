import Header from "@/components/layout/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p>
          This project demonstrates basic routing using the Next.js Pages
          Router.
        </p>
      </main>
    </>
  );
};

export default AboutPage;
