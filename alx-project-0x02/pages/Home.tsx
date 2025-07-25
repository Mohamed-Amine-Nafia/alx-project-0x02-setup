import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="p-6 space-y-6">
        <Card title="Card One" content="This is the first card." />
        <Card title="Card Two" content="This is the second card." />
        <Card title="Card Three" content="This is the third card." />
      </main>
    </>
  );
};

export default HomePage;
