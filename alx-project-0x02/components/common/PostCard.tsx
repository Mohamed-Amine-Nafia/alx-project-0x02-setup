import { type PostProps } from "@/interfaces";

const PostCard = ({ title, content, userId }: PostProps) => (
  <div className="p-4 border rounded shadow">
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{content}</p>
    <span className="text-sm text-gray-500">User ID: {userId}</span>
  </div>
);

export default PostCard;
