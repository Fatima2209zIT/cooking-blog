"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import butterchicken from "/public/butterchicken.jpg";
import Navbar from '../components/navbar';

export default function Butterchickenblog() {
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
        <div className="bg-[#E7C1E3]"> 
        <Navbar />
            <section className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-24">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-left lg:pr-10">
                    <h1 className="title-font text-4xl sm:text-5xl mb-6 text-center font-extrabold text-white p-4 rounded-md mx-auto">
    "Butterlicious Chicken 🍗🧈"
</h1>

                        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <Image
                className="rounded-full w-40 mx-auto lg:mx-0 p-6" // Adjusted for large screens
                alt="Pasta"
                src={butterchicken}
                layout="responsive"
                width={500}
                height={100}
            />
        </div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <section className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Butter Chicken: A Creamy, Flavorful Delight 🍗🧈</h1>
        <article className="space-y-6 text-gray-700">
          <p className="mb-4 leading-relaxed text-lg text-[#333] text-center sm:text-left">
            Butter chicken, also known as <em>Murgh Makhani</em>, is a rich and creamy dish that has captured the hearts of food lovers 
            around the world 🌍. Originating from India 🇮🇳, butter chicken is a perfect blend of tender chicken cooked in a velvety, 
            spiced tomato sauce. With its smooth texture, aromatic spices, and a hint of sweetness, it has become a staple in Indian 
            cuisine and a global favorite.
          </p>

          <strong>The Origin of Butter Chicken 🏰</strong>
          <p className="text-center sm:text-left">
            Butter chicken was created in the 1950s by the chefs at the famous Moti Mahal restaurant in Delhi. Legend has it that leftover 
            tandoori chicken was mixed with a creamy, buttery sauce made with tomatoes, cream, and various spices, transforming it into 
            a delectable dish. What started as a happy accident soon became one of the most iconic dishes of Indian cuisine, enjoyed in 
            countless variations worldwide 🌏.
          </p>

          <strong>The Perfect Ingredients 🧄🍅</strong>
          <p className="text-center sm:text-left">
            The magic of butter chicken lies in its ingredients. The dish combines the richness of butter 🧈, the sweetness of tomatoes 🍅, 
            and the creaminess of heavy cream 🥛 to create a smooth sauce that coats perfectly grilled chicken. The chicken itself is marinated 
            in a blend of yogurt 🧘‍♀️, garlic, ginger, and a variety of spices, which infuse it with deep flavor before its cooked.
            <br />
            Some of the key spices used in butter chicken include garam masala, cumin, coriander, turmeric, and fenugreek leaves 'kasuri methi', 
            which add warmth and complexity to the dish. The balance of spices is crucial, giving butter chicken its signature taste: slightly 
            tangy, mildly spiced, and incredibly rich.
          </p>

          <strong>The Art of Cooking Butter Chicken 🍽️</strong>
          <p className="text-center sm:text-left">
            Cooking butter chicken requires patience and attention to detail. The chicken is first marinated, which helps tenderize the meat 
            and infuse it with flavors. After grilling or pan-frying, the chicken is added to the buttery tomato sauce where it simmers to absorb 
            all the goodness of the sauce.
            <br />
            The sauce itself is cooked slowly, allowing the tomatoes to break down and the spices to bloom. The key is to cook the sauce long 
            enough to deepen the flavors while keeping the sauce creamy and smooth. A final touch of butter and cream is added to finish the dish, 
            giving it that rich, luxurious texture.
          </p>

          <strong>Butter Chicken Variations 🌶️🍚</strong>
          <p className="text-center sm:text-left">
            While the basic recipe remains the same, butter chicken can be adapted in many ways to suit different tastes:
            <br />
            <strong>Spicy Butter Chicken:</strong> For those who love heat, extra green chilies 🌶️ or red chili powder can be added to the 
            sauce to give it a fiery kick.
            <br />
            <strong>Vegan Butter Chicken:</strong> Plant-based alternatives like tofu or soy protein can replace chicken, while coconut milk 
            or cashew cream can be used to make the sauce dairy-free.
            <br />
            <strong>Butter Chicken with a Twist:</strong> Some variations include adding vegetables like peas 🟩 or bell peppers 🌶️ to the 
            sauce, or incorporating additional herbs for extra flavor.
          </p>

          <strong>Butter Chicken as a Global Favorite 🌍</strong>
          <p className="text-center sm:text-left">
            While butter chicken is deeply rooted in Indian cuisine, it has become a worldwide favorite. Its creamy texture and comforting 
            flavors make it perfect for all occasions—whether it's a family dinner, a special celebration, or a cozy meal with friends. It 
            pairs beautifully with naan bread 🍞 or basmati rice 🍚, soaking up the flavorful sauce in every bite.
          </p>

          <strong>Why We Love Butter Chicken ❤️</strong>
          <p className="text-center sm:text-left">
            Butter chicken is the ultimate comfort food. The combination of tender chicken, rich sauce, and aromatic spices is simply irresistible. 
            It’s the perfect dish for anyone who loves a creamy, flavorful meal with just the right balance of spice and sweetness.
          </p>

          <strong>Conclusion: A Celebration of Tradition 🏛️</strong>
          <p className="text-center sm:text-left">
            In conclusion, butter chicken is a dish that brings people together through its warm, inviting flavors. Its a symbol of Indias 
            rich culinary heritage and a true comfort food for people of all cultures. Whether youre enjoying it at a restaurant or making it 
            at home, butter chicken is sure to satisfy your cravings and leave you craving more 🍽️.
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