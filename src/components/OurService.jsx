
const OurServicesSection = () => {
  const services = [
    {
      icon: 'https://img.freepik.com/free-vector/connected-concept-illustration_114360-4481.jpg?w=740&t=st=1705612674~exp=1705613274~hmac=53c24d64a375d7b17a225f342e26c9d808f19cabb21aa52f8921a0a052eeb985',
      title: 'Airtime/Data Purchase',
      description: 'Empower Your Connectivity: Seamless Solutions for Instant Airtime and Data Purchases',
    },
    {
      icon: 'https://img.freepik.com/premium-vector/medical-bill-icon-web_116137-6314.jpg?w=740',
      title: 'Pay Utility Bills',
      description: 'Streamlined Solutions: Effortlessly Settle Your Utility Bills with Speed and Ease',
    },
    {
      icon: 'https://img.freepik.com/free-vector/isometric-shop-receipt-paper-payment-bill_107791-292.jpg?w=826&t=st=1705613450~exp=1705614050~hmac=197d45d66337da7c0303addeffd3393f65c8d4cd1c449ea0529b8bd5c29e0177',
      title: 'Print Receipt',
      description: 'As a vendor on our platform, easily share a receipt that is customized to your own price with your customer',
    },
    {
      icon: 'https://img.freepik.com/free-vector/stack-money-gold-coins-3d-cartoon-style-icon-coins-with-dollar-sign-wad-cash-currency-flat-vector-illustration-wealth-investment-success-savings-economy-profit-concept_74855-26108.jpg?w=740&t=st=1705613589~exp=1705614189~hmac=eac0096d44f22ef34bb03fc11f2629f23723c77067d7a4ee4214f3a65dc93f96',
      title: 'Funds Withdraw',
      description: 'Withdraw your money to any Nigerian bank account',
    },
    {
      icon: 'https://img.freepik.com/free-psd/emoji-hand-isolated_23-2150602125.jpg?w=740&t=st=1705613728~exp=1705614328~hmac=6239abb984cb78d2569172d7b86ae4dbef65058269745c035eb10bde7e3621c8',
      title: 'Earn Bonus',
      description: 'Unlock Rewards: Seamlessly Earn Exciting Bonuses as You Engage with Our Services',
    },
    {
        icon: "https://img.freepik.com/free-photo/man-hands-with-heap-paper-money-cash_107791-17570.jpg?w=740&t=st=1705613912~exp=1705614512~hmac=6f60c84b6d8d4b9d01015073f11a52d4c363647f22a0d04ebb592ae6a197e541",
        title:'Airtime To Cash',
        description:'We offer this service at a very good attractive rate please login to get current conversion rate.'
    },
    {
        icon:"https://img.freepik.com/free-psd/3d-icon-with-printer_23-2150813704.jpg?w=740&t=st=1705614026~exp=1705614626~hmac=8bd4d942d839881490e3f4065f6f3c55010c7472d683736ec9584e58ac79eb76",
        title:"Rechard Card/Data Printing",
        description:"We offer rechard card and data printing service"
    }
  ];

  return (
    <section id="services" className="bg-primary text-black py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-white">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center mb-8 bg-gray-200 rounded-lg p-2 hover:shadow-lg hover:shadow-white ">
                <div className=" text-4xl mb-4">
                    <img className='w-20 h-20  rounded-full ' src={service.icon} alt='logo'/>
                
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
