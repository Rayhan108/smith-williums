import React from 'react';

import { FaStar, FaStarHalfAlt } from "react-icons/fa"
const Review = () => {
    return (
        <div className='max-w-7xl mx-auto'>
              {/* Reviews */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Reviews</h3>

        {/* Share Your Experience Form */}
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h4 className="font-medium mb-3">Share Your Experience</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded text-sm" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded text-sm" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Your rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-gray-300 cursor-pointer hover:text-yellow-400" />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Your review</label>
              <textarea className="w-full p-2 border border-gray-300 rounded text-sm h-20"></textarea>
            </div>
            <div className="flex items-center text-xs">
              <input type="checkbox" className="mr-2" />
              <span>
                I agree that my submitted data is being <span className="text-orange-500">collected and stored</span>.
              </span>
            </div>
            <button className="px-4 py-2 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition-colors">
              Submit
            </button>
          </div>
        </div>

        {/* Sample Review */}
        <div className="border-b border-gray-200 pb-4">
          <div className="font-medium">Michael Johnson</div>
          <div className="flex items-center my-1">
            {[1, 2, 3, 4].map((star) => (
              <FaStar key={star} className="text-yellow-400 text-sm" />
            ))}
            <FaStarHalfAlt className="text-yellow-400 text-sm" />
          </div>
          <div className="text-sm text-gray-600 leading-relaxed">
            The desert safari was absolutely amazing! The vintage Land Rover ride was thrilling, and everything was
            perfectly organized. The dune bashing was exciting and gave us that adrenaline rush we were looking for. The
            camel ride was peaceful and gave us a different perspective of the desert. The falcon show was spectacular -
            watching these magnificent birds in action was truly mesmerizing. The traditional Bedouin camp was authentic
            and beautifully set up. The 4-course dinner was delicious with a great variety of local and international
            dishes. The hospitality of the staff made the experience even more enjoyable. The cultural performances,
            including the traditional dance, were captivating and gave us insight into the rich heritage of the UAE. I
            would definitely recommend this to anyone visiting Dubai!
          </div>
        </div>
      </div>
        </div>
    );
};

export default Review;