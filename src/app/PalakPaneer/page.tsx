"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import palakpaneer from "/public/palakpaneer.jpg";
import Navbar from '../components/navbar';

export default function Palakpaneerblog() {
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
        <div className="bg-[#8EBE95]"> 
        <Navbar />
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                    <h1 className="title-font text-4xl sm:text-5xl mb-6 text-center font-extrabold text-white p-4 rounded-md mx-auto">Paneer Leaf Delight 🍃🧀
</h1>

                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <Image
                className="rounded-full w-40 mx-auto lg:mx-0 p-6" // Adjusted for large screens
                alt="Pasta"
                src={palakpaneer}
                layout="responsive"
                width={500}
                height={100}
            />
        </div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <section className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Palak Paneer: A Green Delight of Indian Cuisine 🥬🧀</h1>
        <article className="space-y-6 text-gray-700">
          <p className="mb-4 leading-relaxed text-lg text-[#333] text-center sm:text-left">
            Palak Paneer, a quintessential dish in Indian cuisine, is a creamy, flavorful curry made with paneer (Indian cottage cheese) 
            and a vibrant spinach-based gravy. With its rich green color, smooth texture, and combination of spices, Palak Paneer has 
            become a beloved vegetarian dish that brings a healthy yet indulgent twist to the dining table. 🍽️
          </p>

          <strong>The Origin of Palak Paneer 🍛</strong>
          <p className="text-center sm:text-left">
            While the roots of Palak Paneer are deeply embedded in Indian cooking, its a dish that has spread across the world 🌍, 
            enjoyed in homes and restaurants alike. The dish is a fusion of two key ingredients: <strong>palak</strong> spinach 🥬 and 
            <strong>paneer</strong> (fresh cheese) 🧀. This combination, beloved by many, is not just tasty but also packed with nutrients, 
            offering a perfect balance of protein and vitamins. The origins of Palak Paneer can be traced to Punjab, a region famous for 
            its dairy and vegetarian dishes. 🏠
          </p>

          <strong>Ingredients That Make Palak Paneer Special 🌱🧄</strong>
          <p className="text-center sm:text-left">
            What makes Palak Paneer truly special is the vibrant, rich green gravy made with fresh spinach. The spinach is blanched 
            and pureed, creating a smooth, luscious base for the dish. Paneer, the fresh Indian cheese, adds a creamy, soft texture 
            that contrasts beautifully with the rich, spiced spinach sauce. 🍅
            <br />
            The secret to a perfect Palak Paneer lies in its spices 🌶️. The gravy is flavored with cumin, garlic, ginger, garam masala, 
            and turmeric, among others. These spices blend harmoniously with the spinach, creating a mildly spiced, aromatic sauce 
            that coats each piece of paneer. The dish often ends with a dollop of cream 🍶, adding a luxurious richness to the sauce.
          </p>

          <strong>The Art of Cooking Palak Paneer 🍳</strong>
          <p className="text-center sm:text-left">
            Making Palak Paneer is an art, requiring a few simple steps but a bit of patience for perfect results. Heres how its typically done:
            <br />
            <strong>1. Blanch the Spinach:</strong> Fresh spinach leaves are quickly blanched in boiling water 💦 to retain their vibrant green 
            color and nutritional value. After blanching, they are pureed into a smooth paste, which forms the base of the curry. 🌿
            <br />
            <strong>2. Prepare the Gravy:</strong> In a pan, cumin seeds are tempered in hot oil 🛢️, followed by sautéing garlic, onions, and ginger 
            🧄 until golden. Spices like turmeric, coriander powder, and garam masala are added to bring out deep, warm flavors. The spinach puree 
            is then mixed in, and the dish simmers to allow the spices to infuse. 🍲
            <br />
            <strong>3. Add Paneer:</strong> Soft cubes of paneer are added to the gravy and simmered gently to absorb the flavors. Some people 
            like to fry the paneer lightly before adding it to the curry, while others prefer it soft and fresh. 🧀
            <br />
            <strong>4. Finish with Cream:</strong> A generous amount of cream 🍶 or butter 🧈 is stirred in at the end, giving the dish its characteristic 
            richness and creaminess.
          </p>

          <strong>Health Benefits of Palak Paneer 🥗💪</strong>
          <p className="text-center sm:text-left">
            Palak Paneer is not just delicious but also a nutritional powerhouse. Spinach 🥬 is packed with vitamins A, C, and K, as well as iron 
            and folic acid, making it an excellent choice for a healthy, iron-rich diet. Paneer 🧀 provides a good source of protein and calcium, 
            which is especially important for vegetarians.
            <br />
            This dish is not only great for boosting immunity 🦸‍♀️ and promoting bone health 🦴 but also perfect for those looking for a hearty, 
            plant-based meal thats both satisfying and nutritious. 💚
          </p>

          <strong>Palak Paneer Variations 🌿</strong>
          <p className="text-center sm:text-left">
            While the traditional recipe remains a favorite, Palak Paneer can be modified to suit different tastes. Some variations include:
            <br />
            <strong>Spicy Palak Paneer:</strong> For those who enjoy a little more heat 🔥, extra green chilies 🌶️ or red chili powder can be 
            added to spice things up.
            <br />
            <strong>Vegan Palak Paneer:</strong> Vegan versions replace paneer with tofu 🍲, and the cream is substituted with coconut milk 🥥 
            or cashew cream 🌰 to keep the dish dairy-free.
            <br />
            <strong>With Other Greens:</strong> Some people like to add other greens, such as methi fenugreek leaves 🌿 or mustard greens 🌱, 
            for a different flavor profile.
          </p>

          <strong>Palak Paneer as a Comfort Food ❤️</strong>
          <p className="text-center sm:text-left">
            Palak Paneer is more than just a meal—its comfort food at its best. The smooth, creamy spinach gravy combined with soft paneer 
            makes for a dish that is both satisfying and indulgent. It pairs wonderfully with roti, naan 🍞, or rice 🍚, making it a versatile 
            dish that can be enjoyed at any time of the day.
          </p>

          <strong>Why We Love Palak Paneer 🌱🧀</strong>
          <p className="text-center sm:text-left">
            Theres something magical about the combination of spinach 🥬 and paneer 🧀 in this dish. The vibrant green sauce is not only 
            visually appealing but also bursting with flavors. Whether you're a vegetarian or not, Palak Paneers rich, creamy texture and warm, 
            aromatic spices make it a dish thats universally loved.
          </p>

          <strong>Conclusion: A Celebration of Tradition 🏛️</strong>
          <p className="text-center sm:text-left">
            In conclusion, Palak Paneer is a celebration of Indian cuisine's rich and diverse flavors. It's a dish that has stood the test of time 
            and continues to be a favorite in homes and restaurants alike. Whether you are new to Indian food or a lifelong fan, this delicious 
            and nutritious curry is a must-try on your culinary journey. 🍽️
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