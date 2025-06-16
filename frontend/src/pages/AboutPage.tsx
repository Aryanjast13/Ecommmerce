

import {
  Award,
  DollarSign,
  Headphones,
  Shield,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";

export default function Component() {
  const stats = [
    {
      icon: Users,
      number: "10.5k",
      label: "Sellers active on our site",
    },
    {
      icon: DollarSign,
      number: "33k",
      label: "Monthly product sale",
    },
    {
      icon: ShoppingCart,
      number: "45.5k",
      label: "Customer active in our site",
    },
    {
      icon: Award,
      number: "25k",
      label: "Annual gross sale in our site",
    },
  ];


  const services = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
     
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-[#263238] mb-6">
              Our Story
            </h1>
            <div className="space-y-4 text-[#455A64] leading-relaxed">
              <p>
              Launched in 2021, SmartDrobe is a next-gen fashion e-commerce platform reshaping the way South Asia shops for style. With over 8,000 sellers and 250+ trusted brands, we serve more than 2 million customers through a growing catalog of 750,000+ products. From men’s and women’s fashion to footwear, accessories, and sustainable wear, SmartDrobe offers a curated and personalized shopping experience. Powered by smart technology and data-driven insights, we go beyond just selling clothes — acting as your personal stylist, trend advisor, and wardrobe assistant. Whether you're dressing for work, weekends, or special occasions, SmartDrobe makes fashion smarter, simpler, and tailored to you.
              </p>
              
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-lg p-8 flex items-center justify-center">
            <img
              src="/story-page.jpg"
              alt="Our story"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-[#B0BEC5] rounded-lg p-6 text-center hover:bg-[#F7F7F7] transition-colors group"
            >
              <div className="w-16 h-16 bg-[#455A64] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#263238] transition-colors">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#263238] mb-2">
                {stat.number}
              </h3>
              <p className="text-[#455A64] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>


        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#455A64] rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#263238] mb-2">
                {service.title}
              </h3>
              <p className="text-[#455A64] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
