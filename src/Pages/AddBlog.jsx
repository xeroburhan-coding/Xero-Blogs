import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddBlog = async (e) => {
    e.preventDefault();

    if (!title || !content || !author || !date || !imageUrl) {
      alert("All fields are required!");
      return;
    }

    const newBlog = { title, content, author, date, imageUrl };

    try {
      await addDoc(collection(db, "blogs"), newBlog);
      alert("Blog added successfully");

      // Clear all input fields after adding the blog
      setTitle("");
      setContent("");
      setAuthor("");
      setDate("");
      setImageUrl("");
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Blog</h1>
      <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="content"
          >
            Blog Content
          </label>
          <textarea
            id="content"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter blog content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="author"
          >
            Author Name
          </label>
          <input
            type="text"
            id="author"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="date"
          >
            Publish Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md"
          onClick={handleAddBlog}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
