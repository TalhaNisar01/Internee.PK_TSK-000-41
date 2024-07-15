import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { Link } from "react-router-dom";

const InternshipSection = ({ cards }) => {
  return (
    <>
      <section className="flex flex-col items-center mx-0 sm:mx-8 lg:mx-16 xl:mx-4 mt-12 w-full">
        
        <div className="flex flex-col sm:flex-row  items-center w-full sm:w-full md:max-w-[88%] mt-4 ml-0">
          <div className="w-[60%]">

          
          <p className="my-4 text-[#717275] text-left text-[16px] sm:text-[18px] md:text-[20px] m-1 font-light w-full sm:w-[70%]">
           <span className="text-[#717275] font-bold text-[20px] ">Internships every months</span> <span className="font-light">Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</span>
          </p>
          </div>
          <div className="ml-60">

          
          <button className="w-40 p-2 my-3 text-white hover:bg-[#58a940cd] rounded-[10px] bg-[#43a724] transition-all duration-300 ease-in-out sm:ml-4">
            <Link to="/internship">Browse Internship</Link>
          </button>
          </div>
        </div>
        
          <div   className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-[90%] ">

          
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              image={card.image}
            
            />
            
          ))}
          </div>
        
      </section>
    </>
  );
};

export default InternshipSection;
