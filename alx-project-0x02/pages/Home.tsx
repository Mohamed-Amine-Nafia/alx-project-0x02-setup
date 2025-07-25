import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p>Welcome to the Home Page of the ALX Project!</p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Card
            title="Next.js Basics"
            content="Learn about Pages Router, components, and how to structure your Next.js app."
          />
          <Card
            title="Using Tailwind CSS"
            content="Easily style your React components with utility-first Tailwind classes."
          />
          <Card
            title="TypeScript Support"
            content="Improve developer experience and catch errors early using TypeScript with Next.js."
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
