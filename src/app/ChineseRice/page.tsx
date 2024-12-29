"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Chineserice from "/public/chineserice.jpg";
import Navbar from '../components/navbar';

export default function ChineseRice() {
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
    "The Irresistible World of Chinese Rice 🍚🌏"
</h1>

                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <Image
                className="rounded-full w-40 mx-auto lg:mx-0 p-6" // Adjusted for large screens
                alt="Pasta"
                src={Chineserice}
                layout="responsive"
                width={500}
                height={100}
            />
        </div>
        <div className="bg-gray-100 min-h-screen flex flex-col align-center items-center justify-center">
      <section className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Chinese Rice 🍚</h1>
        <article className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
            <p>
              Chinese rice is more than just a staple food—its a symbol of culture, tradition, and culinary excellence. 
              Whether its the fragrant aroma of fried rice sizzling in a wok or the comforting taste of a simple bowl of 
              steamed rice, Chinese rice dishes have captivated taste buds across the globe. Lets explore the history, types, 
              and flavors of this beloved ingredient.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">A Brief History of Rice in China</h2>
            <p>
              Rice has been cultivated in China for over 8,000 years, making it one of the oldest cultivated crops in human 
              history. It plays a central role in Chinese agriculture, economy, and daily life. The Yangtze River Valley is 
              considered the cradle of rice cultivation, where ancient farmers developed techniques for growing and harvesting 
              this versatile grain.
            </p>
            <p>
              In Chinese culture, rice symbolizes prosperity and abundance. Its an essential part of festivals, ceremonies, 
              and daily meals, reflecting the importance of food as a cornerstone of family and community.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Types of Chinese Rice Dishes 🍚</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Steamed Rice 白饭, Báifàn:</strong> The foundation of many meals, steamed white rice pairs perfectly 
                with stir-fries, soups, and braised dishes, absorbing the rich flavors of the accompanying ingredients.
              </li>
              <li>
                <strong>Fried Rice 炒饭, Chǎofàn:</strong> A versatile dish made with day-old rice, vegetables, protein, and soy 
                sauce. Popular variations include Yangzhou Fried Rice and Shrimp Fried Rice.
              </li>
              <li>
                <strong>Sticky Rice 糯米, Nuòmǐ:</strong> Known for its glutinous texture, sticky rice is often used in sweet 
                and savory dishes like Zongzi sticky rice dumpling and Lo Mai Gai sticky rice wrapped in lotus leave.
              </li>
              <li>
                <strong>Clay Pot Rice 煲仔饭, Bāozǎifàn:</strong> Cooked in a traditional clay pot, this dish features rice 
                with a crispy bottom layer topped with marinated meats, Chinese sausage, and vegetables.
              </li>
              <li>
                <strong>Congee 粥, Zhōu:</strong> A comforting rice porridge often served with pickled vegetables, century 
                eggs, or shredded chicken.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Secrets to Perfect Chinese Rice</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Choosing the Right Rice:</strong> Long-grain rice like jasmine rice is ideal for steamed or fried 
                rice, while short-grain or glutinous rice works best for sticky rice dishes.
              </li>
              <li>
                <strong>Day-Old Rice for Fried Rice:</strong> Using leftover rice prevents clumping and ensures the grains 
                stay separate when stir-frying.
              </li>
              <li>
                <strong>The Wok Hei Effect:</strong> Achieving the smoky, charred flavor of fried rice requires high heat and 
                quick cooking in a well-seasoned wok.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Why We Love Chinese Rice</h2>
            <p>
              Chinese rice dishes are loved worldwide for their balance of simplicity and flavor. They celebrate the harmony 
              of textures, colors, and ingredients, making each bite a delightful experience. Beyond the taste, rice connects 
              people to a rich heritage, creating a bridge between generations and cultures.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Conclusion: A Grain of Happiness</h2>
            <p>
              Chinese rice is more than food—it’s a journey through history, tradition, and innovation. Whether you’re savoring 
              a bowl of congee on a cold morning or enjoying the vibrant flavors of fried rice, Chinese rice dishes offer 
              comfort, nourishment, and joy. So, grab your chopsticks and dive into the delicious world of Chinese rice! 🍚✨
            </p>
          </div>
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