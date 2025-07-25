import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          data.map((p: any) => ({
            title: p.title,
            content: p.body,
            userId: p.userId,
          }))
        )
      );
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
