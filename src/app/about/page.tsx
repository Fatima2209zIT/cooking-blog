import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-pink-200 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Welcome to the Food Blog! 🍴🌟 Our mission is to share mouthwatering recipes, culinary tips, and food stories that inspire and excite food enthusiasts worldwide. From traditional dishes to modern delicacies, we have something for everyone!
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Our passion for food started in the heart of our kitchen. We believe that every dish has a story to tell, and we aim to bring those stories to life through our blog. Join us on a journey of flavors and traditions.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600">
              Explore delicious recipes, expert tips, and engaging content that will elevate your cooking game. Whether you're a beginner or a seasoned chef, you'll find something to inspire your culinary adventures.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Stay Connected</h3>
          <p className="text-gray-600">
            Follow us on social media and subscribe to our newsletter for the latest updates.
          </p>
        </div>
      </div>
    </div>
  );
}
