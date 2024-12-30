// pages/index.tsx
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";

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
<h1 className="text-4xl font-bold text-center mt-4">"🍽️ Welcome to the Food Blog – A Delicious Journey Awaits! 🌮🍕"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
        {/* Loop through each blog data and create a card */}
        {blogData.map((blog, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link href={blog.link}>
              {/* Blog Image */}
              <Image
                src={blog.image} // Use path relative to public folder
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              {/* Blog Title */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
