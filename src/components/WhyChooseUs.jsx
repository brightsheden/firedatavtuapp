import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      title: 'Instant Delivery',
      description: 'FireData is simple, fast, and easy to use on all mobile phones, desktops. We have you covered on all network providers such as MTN, AIRTEL, GLO, 9MOBILE.',
      image: 'https://img.freepik.com/free-vector/express-delivery-service-abstract-concept-vector-illustration-air-freight-logistics-global-postal-mail-package-delivery-fast-shipping-order-tracking-number-post-office-abstract-metaphor_335657-1743.jpg?w=740&t=st=1705615741~exp=1705616341~hmac=5b5c61b9ae2edeb18eb9fb93098d5a45548409e28d32cef69291a090c79d58b6', // Replace with actual image URL
    },
    {
      title: 'Convenience',
      description: 'Recharge your databundle and airtime anytime, anywhere, using any device with internet access. No more rushing to physical locations or waiting in line.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-people-talking-phone-illustration_23-2149872203.jpg?w=740&t=st=1705615994~exp=1705616594~hmac=85d7271d603fddf420c5872ad52a4347f7e680bd65d1d0725bcc150f40f76442', // Replace with actual image URL
    },
    {
      title: 'Flexible Payment Options',
      description: 'Funding of your wallet is easy and stress-free. Fund your account wallet, purchase your cheap databundle, or pay other utility bills for yourself, friends, and family with a single click.',
      image: 'https://img.freepik.com/free-vector/flat-woman-paying-by-pos-terminal-refund-cashback_88138-785.jpg?w=740&t=st=1705616242~exp=1705616842~hmac=eef02d5039e75623086dae5d1ea494c2c235d715a8c73a808f8522043c57c51d', // Replace with actual image URL
    },
    {
      title: 'Secure',
      description: 'We prioritize the security of your personal and financial information. Our robust encryption ensures that your transactions are safe and protected.',
      image: 'https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37375.jpg?w=740&t=st=1705616305~exp=1705616905~hmac=7252d07429d037859d7b108a9d666ffc377e5a08997b21736efc48a45119661e', // Replace with actual image URL
    },
    {
      title: 'Wide Range of Services',
      description: 'Whether it\'s data, airtime, electricity, or cable TV bills, FireData covers it all. No need to visit multiple platforms – we\'ve got you covered in one place.',
      image: 'https://img.freepik.com/free-vector/setup-concept-illustration_114360-382.jpg?w=740&t=st=1705616369~exp=1705616969~hmac=049d7f19d935930001e69d632f41b2ac4aa0b7b73cc2fec75f4a60cd2360a0f0', // Replace with actual image URL
    },
    {
      title: 'Excellent Support',
      description: 'We have a dedicated support system to help and guide you on needed help with zero waiting time on Chat support.',
      image: 'https://img.freepik.com/free-vector/flat-customer-service-week-illustration_23-2149644201.jpg?w=740&t=st=1705616419~exp=1705617019~hmac=b40ddd562bd0e7ab42120b7b67842ddd97c5018f808f0b1a1a6136a04c9da9ce', // Replace with actual image URL
    },
  ];

  return (
    <section id='whyus' className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            WHY CHOOSE FIREDATA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="mb-8 border-2  border-primary p-4 rounded-lg shadow-lg shadow-blue-200">
                <img
                  className="w-full max-h-48 object-cover mb-4"
                  src={feature.image}
                  alt={`Image for ${feature.title}`}
                />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
