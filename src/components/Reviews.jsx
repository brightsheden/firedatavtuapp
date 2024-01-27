import React from 'react';

const CustomerReviewSection = () => {
  const reviews = [
    {
      title:'Best Price For Resellers',
      content: "Best platform for reselling of vtu service I have ever seen. Thumbs up for them for their great services. I recommend this platform, it's fast.",
      author: "Daniel",
      role: "Reseller",
    },
    {
        title:'Nice work! Keep it up.',
      content: " Best platform when it comes to affordable data plans for both end-users and resellers. I recommend this platform, it's fast.",
      author: "Favour Omah",
      role: "Agent",
    },
    {
        title:'Great support!!',
      content: " I love the quick response to issues. We might just get along well. So far so good. There's no star here but I give ⭐⭐⭐⭐⭐",
      author: "Solomon Alozie",
      role: "User",
    },
  ];

  return (
    <section id='reviews' className="bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            CUSTOMER REVIEWS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (

              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className='font-bold text-xl text-purple-500 my-3'>{review.title}</h2>
                <p className="text-gray-700 mb-4">{review.content}</p>
                <div className='flex items-center '>

                    <img className='w-20 h-20'  src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740'/>

                    <div className='flex flex-col'>
                    <div className="text-lg font-semibold">{review.author}</div>
                <div className="text-gray-500">{review.role}</div>
                    </div>

                </div>

               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
