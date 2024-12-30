import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";
import 'animate.css';

export default function Home() {
  const blogData = [
    {
      title: "Fettuccine Fantasies 🍝🌟",
      image: "/pasta1.webp", // Reference directly from public folder
      link: "/Pastablog"
    },
    {
      title: "The Irresistible World of Chinese Rice 🍚🌏",
      image: "/chineserice.jpg", // Reference directly from public folder
      link: "/ChineseRice"
    },
    {
      title: "Queen's Bliss Pizza 🍕👑✨",
      image: "/Pizza.jpeg", // Reference directly from public folder
      link: "/MargheritaPizzaBlog"
    },
    {
      title: "Paneer Leaf Delight 🍃🧀",
      image: "/palakpaneer.jpg", // Reference directly from public folder
      link: "/PalakPaneer"
    },
    {
      title: "Butterlicious Chicken 🍗🧈",
      image: "/butterchicken.jpg", // Reference directly from public folder
      link: "/Butterchickenblog"
    },
    {
      title: "Biryani Bliss 🍛✨",
      image: "/biryani.jpg", // Reference directly from public folder
      link: "/Biryani"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-pink-200 to-pink-300">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-4 animate__animated animate__fadeInUp animate__delay-1s">
        "🍽️ Welcome to the Food Blog – <br />A Delicious Journey Awaits! 🌮🍕"
      </h1>
      <h1 className="text-lg text-gray-400 text-center mt-4 border border-gray-300 rounded-lg p-4 animate__animated animate__fadeInUp animate__delay-2s">
        "Explore a variety of delicious recipes, food stories, and culinary adventures that will tantalize your taste buds! 🍽️✨"
      </h1>
      <h1 className="text-3xl font-bold text-center mt-4 animate__animated animate__fadeInUp animate__delay-3s">
        "OUR FAMOUS BLOGS✨"
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
        {/* Loop through each blog data and create a card */}
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 animate__animated animate__fadeInUp animate__delay-3s"
          >
            <Link href={blog.link}>
              {/* Blog Image */}
              <Image
                src={blog.image} // Use path relative to public folder
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Link>
            {/* Blog Title */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{blog.title}</div>
              {/* Read More Button */}
              <Link href={blog.link}>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

