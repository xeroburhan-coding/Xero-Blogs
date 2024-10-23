import { useParams } from "react-router-dom";
import blogsdata from "../data";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsdata.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div className="container mx-auto p-4">Blog not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="mb-4 w-full h-64 object-cover"
      />
      <p className="text-gray-600 mb-2">
        <strong>By {blog.author}</strong> | <span>{blog.date}</span>
      </p>
      <p className="text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
