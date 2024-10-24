const BlogCard = ({ blog }) => {
  const {
    title = "Untitled",
    content = "",
    author = "Unknown",
    date = "N/A",
    imageUrl = "",
  } = blog;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {imageUrl && <img src={imageUrl} alt={title} className="rounded-t-lg" />}
      <h2 className="font-bold text-xl mt-2">{title}</h2>
      <p className="text-gray-700 mt-1">{content.substring(0, 100)}...</p>
      <div className="mt-2 text-gray-500 text-sm">
        <p>By {author}</p>
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default BlogCard;
