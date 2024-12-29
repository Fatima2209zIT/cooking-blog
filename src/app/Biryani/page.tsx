"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Biryani from "/public/biryani.jpg";
import Navbar from '../components/navbar';

export default function Biryaniblog() {
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
        <div className="bg-[#F2DFB9]"> 
        <Navbar />
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                    <h1 className="title-font text-4xl sm:text-5xl mb-6 text-center font-extrabold text-white p-4 rounded-md mx-auto">
    "Biryani Bliss 🍛✨"
</h1>

                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <Image
                className="rounded-full w-40 mx-auto lg:mx-0 p-6" // Adjusted for large screens
                alt="Pasta"
                src={Biryani}
                layout="responsive"
                width={500}
                height={100}
            />
        </div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <section className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Biryani: A Delightful Journey of Flavors 🍛✨</h1>
        <article className="space-y-6 text-gray-700">
          <p className="mb-4 leading-relaxed text-lg text-[#333] text-center sm:text-left">
            Biryani is more than just a dish; its an experience, a celebration of culture, history, and mouth-watering flavors that have 
            transcended generations. Known for its vibrant colors 🌈, rich aroma 🌿, and aromatic spices 🌶️, biryani has earned its place as 
            one of the most beloved dishes worldwide.
          </p>

          <strong>The Origin of Biryani 🏰</strong>
          <p className="text-center sm:text-left">
            The story of biryani traces its roots to the Indian subcontinent 🇮🇳, with influences from Persian, Mughal, and Arab cuisines. 
            The word biryani comes from the Persian word birian, which means "fried before cooking." The dish evolved when Mughal emperors 
            👑, with their love for rice 🍚 and meat 🍖, began to refine and innovate recipes, blending local Indian spices with their own 
            culinary traditions. Over time, biryani became an iconic dish that is now enjoyed in various forms across the globe 🌍.
          </p>

          <strong>The Perfect Blend of Ingredients 🧄🍋</strong>
          <p className="text-center sm:text-left">
            At its core, biryani is made from a few simple ingredients: rice, meat usually chicken 🍗, mutton 🐑, or beef 🐄, and a blend of spices. 
            However, what sets this dish apart is the magical combination of aromatic basmati rice 🌾, tender meat 🍖, and a variety of spices 
            like saffron 🌸, cardamom, cinnamon, cloves, and star anise. These spices come together to create a symphony of flavors that 
            tantalize the taste buds 😋.
          </p>

          <strong>Variations of Biryani 🍽️</strong>
          <p className="text-center sm:text-left">
            Biryani is a versatile dish, and its preparation varies by region, with each area adding its unique touch. Some of the popular regional 
            biryanis include:
            <br />
            <strong>Hyderabadi Biryani:</strong> Known for its dum cooking method 🍳, this biryani is made by layering marinated meat and 
            partially cooked rice and slow-cooking it for hours ⏳. Its typically served with a side of cooling raita 🥒.
            <br />
            <strong>Lucknowi Awadhi Biryani:</strong> A lighter, more subtle flavor profile compared to other biryanis, often cooked with the 
            meat and rice together in a sealed pot 🔒 to preserve the flavors.
            <br />
            <strong>Kolkata Biryani:</strong> With a unique influence of Bengali cuisine 🦀, Kolkata biryani features a delicate flavor, often with 
            boiled eggs 🍳 and potatoes 🥔.
            <br />
            <strong>Malabar Biryani:</strong> Originating from the coastal region of Kerala 🏖️, this biryani features a distinct use of short-grain rice 
            and a coconutty richness 🥥.
          </p>

          <strong>The Art of Cooking Biryani 👩‍🍳👨‍🍳</strong>
          <p className="text-center sm:text-left">
            Cooking biryani requires patience ⏳ and precision 🎯. The rice must be cooked just enough to retain its long, fluffy texture, while 
            the meat should be tender and infused with flavors. The marination process is crucial for infusing the meat with the complex aromas 
            of the spices. Its the slow cooking technique—often done by sealing the pot with dough known as the dum method 🥣—that helps 
            all the ingredients meld together.
          </p>

          <strong>Biryani as a Cultural Symbol 🎉</strong>
          <p className="text-center sm:text-left">
            Biryani is often the centerpiece of family gatherings 👪, weddings 💍, festivals 🎊, and celebrations. It brings people together 🤝, 
            making it much more than just a meal. Whether it's served on a street corner in Pakistan 🇵🇰, in a royal palace in India 👑, or at a 
            humble family dinner in Bangladesh 🇧🇩, biryani unites people through its rich history and flavors.
          </p>

          <strong>Why We Love Biryani ❤️</strong>
          <p className="text-center sm:text-left">
            Theres something incredibly comforting about the combination of spiced rice 🍚 and tender meat 🍗. The intricate flavors and aromas 
            make it a dish that appeals to all the senses 👃👀👅. Whether you like your biryani spicy 🌶️ or mild, with or without yogurt 🥣, or paired 
            with a simple salad 🥗 or rich curry 🍛, theres no wrong way to enjoy it.
          </p>

          <strong>Conclusion: A Celebration of Tradition 🏛️</strong>
          <p className="text-center sm:text-left">
            In conclusion, biryani is a celebration of tradition 🏛️, love 💖, and craftsmanship in the kitchen. Its rich heritage, diverse 
            variations, and bold flavors continue to captivate food lovers around the world 🌎, making it a timeless dish that will always be 
            cherished for generations to come 👏.
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