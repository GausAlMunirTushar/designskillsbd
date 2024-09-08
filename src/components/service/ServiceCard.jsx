import Image from "next/image";

const ServiceCard = ({ service }) => {
	return (
	  <div className="w-full shadow-md rounded-md border border-gray-200 dark:border-gray-700 cursor-pointer">
		<Image
		  src={service.image}
		  alt={service.title}
		  className="rounded-t-lg w-full h-48 object-cover"
		  width={400}
		  height={160}
		/>
		<div className="py-4 px-4">
		  <div className="flex items-center mb-2">
			<Image
			  src={service.profileImage}
			  alt={service.name}
			  className="w-8 h-8 rounded-full mr-2"
			  width={400}
		  	height={160}
			/>
			<span className="font-semibold">{service.name}</span>
			<span className="ml-auto text-sm text-gray-500">{service.level}</span>
		  </div>
		  <p className="text-sm text-gray-700 dark:text-white">{service.description}</p>
		  <div className="flex items-center mt-3">
			<span className="text-yellow-500">{`⭐ ${service.rating}`}</span>
			<span className="ml-auto font-semibold">{`From ${service.price}`}</span>
		  </div>
		</div>
	  </div>
	);
  };

  export default ServiceCard;
