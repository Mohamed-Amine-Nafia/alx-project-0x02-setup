import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add Post
        </button>

        {isOpen && (
          <PostModal
            onClose={() => setIsOpen(false)}
            onSubmit={handleAddPost}
          />
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
