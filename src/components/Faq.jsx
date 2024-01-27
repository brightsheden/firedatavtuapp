import React from 'react';

import { Accordion } from 'flowbite-react';

const FAQSection = () => {
  const faqs = [
    {
       

      question: ' How can I purchase data or airtime on your platform?',
      answer: 'To purchase data or airtime, simply log in to your account, choose the desired package, and proceed to checkout. Follow the easy steps to complete your transaction securely.',
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we take the security of your personal information seriously. Our platform uses encryption to ensure your data is safe.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, PayPal, and bank transfers. Check the "Payment Options" section for more details.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team by navigating to the "Contact Us" page and filling out the contact form. Alternatively, you can use the live chat feature for instant assistance.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. Visit the "Subscription" section in your account settings to manage your subscription.',
    },
  ];

  return (
    <section id='faq' className="bg-primary text-white py-16 md:py-24 lg:py-32">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          FAQ (Frequently Asked Questions)
        </h2>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='mb-6 md:mb-0 md:mr-4'>
          <img
            className="w-full max-w-md border-2 object-cover md:max-w-none mx-auto md:mx-0 rounded-lg shadow-md"
            src='https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?w=740&t=st=1705625035~exp=1705625635~hmac=d112e8dc268b8245f5762f2e37a6be71a4b91f270d884e9735369f96fe73a7c5'
          />
        </div>
        <div className='w-full md:w-2/3'>
          <Accordion collapseAll>
            {faqs.map((faq, index) => (
              <Accordion.Panel key={index}>
                <Accordion.Title className='text-black hover:text-primary'>{faq.question}</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-white dark:text-gray-400">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FAQSection;
