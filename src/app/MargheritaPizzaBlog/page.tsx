"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Pizza from "/public/Pizza.jpeg";
import Navbar from '../components/navbar';

export default function Pizzablog() {
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
        <div className="bg-teal-200"> 
        <Navbar />
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                    <h1 className="title-font text-4xl sm:text-5xl mb-6 text-center font-extrabold text-white p-4 rounded-md mx-auto">
 "Queen's Bliss Pizza 🍕👑✨"
</h1>

                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <Image
                className="rounded-full w-40 mx-auto lg:mx-0 p-6" // Adjusted for large screens
                alt="Pasta"
                src={Pizza}
                layout="responsive"
                width={500}
                height={100}
            />
        </div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <section className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">The Irresistible Charm of Margherita Pizza 🍕✨</h1>
        <article className="space-y-6 text-gray-700">
          <p className="mb-4 leading-relaxed text-lg text-[#333] text-center sm:text-left">
            When it comes to classic Italian cuisine, few dishes stand out as much as the beloved Margherita pizza. Simple yet flavorful, 
            this pizza is a testament to the beauty of minimalism in cooking. With its vibrant colors and fresh ingredients, Margherita pizza 
            continues to win hearts worldwide.
          </p>

          <strong>A Slice of History 🍕</strong>
          <p className="text-center sm:text-left">
            The origins of Margherita pizza date back to 1889 in Naples, Italy. Legend has it that Chef Raffaele Esposito created this iconic 
            dish to honor Queen Margherita of Savoy. The pizza was designed to represent the colors of the Italian flag: red 'tomatoes', 
            white 'mozzarella', and green 'basil'. The queen was so delighted with this culinary masterpiece that it was named after her.
          </p>

          <strong>Ingredients That Make the Magic 🍅🧀🌿</strong>
          <p className="text-center sm:text-left">
            What makes Margherita pizza truly special is its reliance on fresh, high-quality ingredients. Heres what you need:
            <br />
            <strong>Pizza Dough:</strong> The foundation of any great pizza, made from flour, water, yeast, and salt.
            <br />
            <strong>San Marzano Tomatoes:</strong> Sweet and tangy, these tomatoes form the perfect base for the pizza sauce.
            <br />
            <strong>Fresh Mozzarella:</strong> Creamy and rich, this cheese melts beautifully to create a luscious topping.
            <br />
            <strong>Fresh Basil Leaves:</strong> The aromatic herb adds a touch of earthiness and a pop of green.
            <br />
            <strong>Olive Oil:</strong> A drizzle of extra virgin olive oil ties everything together with its fruity notes.
          </p>

          <strong>The Art of Preparation 🍳</strong>
          <p className="text-center sm:text-left">
            Making Margherita pizza is as much about technique as it is about ingredients. Heres a simple process to recreate this classic at home:
            <br />
            <strong>Prepare the Dough:</strong> Roll out the pizza dough to your desired thickness, ensuring it is even and smooth.
            <br />
            <strong>Spread the Sauce:</strong> Use crushed San Marzano tomatoes seasoned with a pinch of salt. Spread it evenly across the dough.
            <br />
            <strong>Add the Cheese:</strong> Tear fresh mozzarella into small pieces and scatter them generously over the sauce.
            <br />
            <strong>Top with Basil:</strong> Place fresh basil leaves strategically to ensure each slice has its share.
            <br />
            <strong>Bake to Perfection:</strong> Preheat your oven to the highest setting and bake the pizza until the crust is golden and the cheese is bubbly.
            <br />
            <strong>Drizzle Olive Oil:</strong> Add a finishing touch with a light drizzle of olive oil.
          </p>

          <strong>Why Everyone Loves Margherita Pizza 💖</strong>
          <p className="text-center sm:text-left">
            The universal appeal of Margherita pizza lies in its simplicity. Its a dish where every ingredient plays a starring role, yet none 
            overshadows the other. The balance of flavors  tangy tomatoes, creamy mozzarella, fragrant basil, and crispy crust  creates a 
            symphony thats hard to resist.
          </p>

          <strong>A Versatile Delight 🍽️</strong>
          <p className="text-center sm:text-left">
            Whether enjoyed as a solo meal, shared with friends, or served at a party, Margherita pizza fits every occasion. Pair it with a 
            fresh salad and a glass of wine for a complete Italian dining experience.
          </p>

          <strong>Conclusion: A Celebration of Simplicity 🎉</strong>
          <p className="text-center sm:text-left">
            Margherita pizza is more than just food; its a celebration of simplicity, tradition, and flavor. Whether you are a seasoned pizza 
            enthusiast or a curious first-timer, this timeless dish promises to delight your taste buds and transport you to the streets of 
            Naples with every bite.
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