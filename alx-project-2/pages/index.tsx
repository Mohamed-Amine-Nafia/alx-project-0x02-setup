import Head from "next/head";
import Header from "@/components/layout/Header";
import { WelcomeMessage } from "@/interfaces";

const Home = () => {
  const message: WelcomeMessage = {
    title: "Welcome to ALX Project 0x02",
    description:
      "This project demonstrates a basic Next.js setup with TypeScript, Tailwind CSS, and ESLint.",
  };

  return (
    <>
      <Head>
        <title>{message.title}</title>
      </Head>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{message.title}</h2>
        <p>{message.description}</p>
      </main>
    </>
  );
};

export default Home;
