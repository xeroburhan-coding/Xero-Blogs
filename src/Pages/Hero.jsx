import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-gray-100 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to XeroBlogs
            </h1>
            <p className="py-6 text-gray-600">
              Discover insightful articles, tips, and stories from across
              various fields. Whether you're here for tech, lifestyle, or
              creative inspiration, we've got something for you.
            </p>
            <Link to="/blogs">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Explore Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
