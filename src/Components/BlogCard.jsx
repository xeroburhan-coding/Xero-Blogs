import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div>
      <Link to={`/blogs/${blog.id}`}>
        <div className="border rounded-lg shadow-md overflow-hidden m-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-700 my-2">
              {blog.content.substring(0, 100)}...
            </p>
            <p className="text-sm text-gray-500">
              By {blog.author} on {blog.date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
