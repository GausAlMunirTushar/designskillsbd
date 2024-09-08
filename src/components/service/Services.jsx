import ServiceCard from "./ServiceCard";



const services = [
  {
	name: "Design Skills BD",
    level: "Level 2 ✦✦",
    description: "I will do any redesign and custom graphic design",
    rating: "4.9 (376)",
    price: "US$15",
    profileImage: "/logo.png",
    image: "/banner.jpg",
  },
  {
    name: "Design Skills BD",
    level: "Level 2 ✦✦",
    description: "I will be your graphic designer",
    rating: "4.9 (1k+)",
    price: "US$40",
    profileImage: "/logo.png",
    image: "/banner.jpg",
  },
  {
	name: "Design Skills BD",
    level: "Level 2 ✦✦",
    description: "I will create any kind of graphic design with idea",
    rating: "5.0 (1k+)",
    price: "US$75",
    profileImage: "/logo.png",
    image: "/banner.jpg",
  },
  {
	name: "Design Skills BD",	
    level: "Level 2 ✦✦",
    description: "I will be your professional graphic designer for web or print",
    rating: "4.9 (811)",
    price: "US$10",
    profileImage: "/logo.png",
    image: "/banner.jpg",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
