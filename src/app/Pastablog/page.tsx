"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import pasta from "/public/pasta1.webp";
import Navbar from '../components/navbar';

export default function Pastablog() {
    const [comments, setComments] = useState('');
    const [commentList, setCommentList] = useState<string[]>([]);
    const [feedback, setFeedback] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Load comments from localStorage when the component mounts
        const savedComments = localStorage.getItem('comments');
        if (savedComments) {
            setCommentList(JSON.parse(savedComments)); // Parse and set saved comments
        }
    }, []);

    useEffect(() => {
        // Save comments to localStorage whenever the commentList changes
        if (commentList.length > 0) {
            localStorage.setItem('comments', JSON.stringify(commentList));
        }
    }, [commentList]);

  
    useEffect(() => {
        setIsClient(true); // Set the state to true after rendering on the client side
    }, []);
    
    if (isClient) {
        console.log("This code runs on the client side!");
    }

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    };

    const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (comments.trim()) {
            setCommentList([...commentList, comments]);
            setComments('');
            setFeedback('Comment submitted! Thank you!');
            setTimeout(() => setFeedback(''), 3000);
        }
    };
    return (
        <div className="bg-pink-200"> 
        <Navbar />
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                    <h1 className="title-font text-4xl sm:text-5xl mb-6 text-center font-extrabold text-white p-4 rounded-md mx-auto">"Fettuccine Fantasies 🍝🌟"
</h1>

                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <Image
                className="rounded-full w-40 mx-auto lg:mx-0 p-6" // Adjusted for large screens
                alt="Pasta"
                src={pasta}
                layout="responsive"
                width={500}
                height={100}
            />
        </div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
  <section className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">The Wonderful World of Pasta 🍝</h1>
    <article className="space-y-6 text-gray-700">
      <p className="mb-4 leading-relaxed text-lg text-[#333] text-center sm:text-left">
        Pasta is more than just a meal; its&apos; an experience, a comfort, and a celebration of flavors that transcend
        cultures and generations. From the simplest spaghetti to the intricate ravioli, pasta has captured the
        hearts of food lovers all over the world. Today, we are diving into the wonderful world of pasta—its history,
        varieties, and some delicious recipes to try!
      </p>

      <strong>A Glimpse into the History of Pasta 🍝</strong>
      <p className="text-center sm:text-left">
        While pasta is often associated with Italian cuisine, its origins are much more diverse. Historical records
        suggest that pasta has been around for centuries, with varying versions appearing in ancient China, the Middle East,
        and Europe. However, it was not until the 12th century that pasta as we know it today started to take shape in Italy.
        <br />
        The ancient Romans had a dish called <i>lagane</i>, which is quite similar to lasagna, and by the 13th century, Italian
        pasta makers were perfecting techniques for making and drying pasta, allowing it to be stored and transported across the globe.
        Pasta quickly became a staple in Italian households, with each region developing its own unique shape and sauce to match.
      </p>

      <strong>Varieties of Pasta: A World of Shapes 🍝</strong>
      <p className="text-center sm:text-left">
        One of the most fascinating aspects of pasta is its diversity in shapes and forms. Each type of pasta is designed for a
        specific kind of sauce or dish. Here are a few popular ones:
        <br />
        <strong>Spaghetti:</strong> Long, thin strands of pasta perfect for light tomato sauces or a rich meatball sauce.
        <br />
        <strong>Penne:</strong> Short, tube-shaped pasta great for hearty sauces like Bolognese or creamy Alfredo.
        <br />
        <strong>Fettuccine:</strong> A wider pasta often served with rich sauces, such as the famous Fettuccine Alfredo.
        <br />
        <strong>Ravioli:</strong> Small, stuffed pasta pockets filled with cheese, spinach, or meat, typically served with a delicate sauce.
        <br />
        <strong>Fusilli:</strong> Spiral-shaped pasta that holds sauces in its twists, perfect for chunky, vegetable-rich sauces.
        <br />
        <strong>Lasagna:</strong> Large, flat pasta sheets used to layer ingredients in this beloved oven-baked dish.
      </p>

      <strong>Pasta Sauces: The Magic of Pairing 🍝</strong>
      <p className="text-center sm:text-left">
        While the pasta itself is important, the sauce is where the magic happens. The right sauce can elevate a simple pasta dish
        into something extraordinary. Here are a few classic pasta sauces you should know:
        <br />
        <strong>Marinara:</strong> A simple and flavorful tomato sauce made with garlic, onions, and herbs.
        <br />
        <strong>Alfredo:</strong> Rich and creamy, made with butter, heavy cream, and Parmesan.
        <br />
        <strong>Pesto:</strong> A fresh, herby sauce made from basil, pine nuts, garlic, Parmesan, and olive oil.
        <br />
        <strong>Carbonara:</strong> A Roman classic made with eggs, Parmesan, pancetta, and black pepper.
        <br />
        <strong>Bolognese:</strong> A hearty meat sauce slow-cooked with tomatoes, wine, and vegetables.
      </p>

      <strong>Why Pasta is the Ultimate Comfort Food 🍝</strong>
      <p className="text-center sm:text-left">
        Pasta has a magical ability to bring comfort and joy to anyone who eats it. Its easy to make, incredibly versatile,
        and endlessly satisfying. The process of cooking pasta—whether its boiling fresh pasta or simmering a slow-cooked sauce—offers
        a moment of relaxation and a chance to enjoy the simple pleasures of cooking.
        <br />
        Not to mention, pasta is highly customizable. Whether youre a vegetarian, a meat lover, or following a gluten-free diet,
        theres a pasta and sauce combination for you.
      </p>

      <strong>Delicious Pasta Recipes to Try 🍝</strong>
      <p className="text-center sm:text-left">
        If you are ready to get cooking, here are some simple pasta recipes to try at home:
        <br />
        <strong>Classic Spaghetti Aglio e Olio:</strong> A quick and easy dish made with garlic, olive oil, chili flakes, and Parmesan.
        <br />
        <strong>Creamy Chicken Alfredo:</strong> Fettuccine tossed in a rich, creamy sauce with grilled chicken.
        <br />
        <strong>Pesto Pasta with Cherry Tomatoes:</strong> Fresh basil pesto mixed with pasta, topped with juicy cherry tomatoes.
        <br />
        <strong>Lasagna:</strong> Layered with ground beef, ricotta, marinara sauce, and mozzarella.
        <br />
        <strong>Pasta Primavera:</strong> A vegetable-packed dish tossed with a light lemony dressing.
      </p>

      <strong>Conclusion: Embrace the Pasta Love 🍝</strong>
      <p className="text-center sm:text-left">
        Pasta is more than just a dish; its a cultural icon and a symbol of comfort. Whether youre enjoying a simple bowl of
        spaghetti or a luxurious lasagna, pasta brings people together around the table. Embrace the joy of cooking your favorite
        pasta dish and share it with loved ones!
        <br />
        <strong>Pasta perfection, one bite at a time! 🍝✨</strong>
      </p>
    </article>
  </section>
</div>

                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <div className="relative transition-transform transform hover:scale-105 duration-500">
                        
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg transition-opacity duration-500 hover:opacity-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comment Section */}
            <section className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
                {feedback && <p className="text-green-600 mb-4">{feedback}</p>}
                <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
                    <textarea
                        value={comments}
                        onChange={handleCommentChange}
                        placeholder="Add your comment here..."
                        className="w-full h-24 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
                        maxLength={200}
                        required
                    />
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">{comments.length}/200</span>
                        <button type="submit" className="inline-flex items-center justify-center text-white bg-blue-300 border-0 py-2 px-4 focus:outline-none hover:bg-[#16191d] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                            Submit Comment
                        </button>
                    </div>
                </form>
                <div className="mt-4 max-h-60 overflow-y-auto">
                    {commentList.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {commentList.map((comment, index) => (
                                <li key={index} className="text-gray-700 py-1 border-b last:border-b-0">{comment}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">No comments yet.</p>
                    )}
                </div>
            </section>
        </div>
    )
    };