import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

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
        <Button size="small" shape="rounded-sm" label="Small Button" />
        <Button size="medium" shape="rounded-md" label="Medium Button" />
        <Button size="large" shape="rounded-full" label="Large Button" />
      </main>
    </>
  );
};

export default AboutPage;
