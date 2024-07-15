import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import InternshipCard from "./InternshipCard";

const InternshipCarousel = ({ internshipCards }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col w-[95%] md:w-[95%] bg-[#43a724] py-8 px-4 ml-8 rounded-xl">
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        showDots={true} // Enable dots
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} // Remove arrows on all devices
        containerClass="carousel-container"
        dotListClass="custom-dot-list" // Custom class for dots
        customDot={<CustomDot />} // Optional: Custom dot component
      >
        <div className="flex flex-col text-white w-[80%]">
          <h1 className="text-xl sm:text-3xl md:text-4xl p-2 mb-4 font-bold">
            Get Internship In Your Favourite Domain 🙌. Almost 30+{" "}
          </h1>
          <h2 className="text-xl mt-10 sm:text-3xl md:text-4xl p-2 my-4 font-bold">
            Internships Are Open, Go & Grab Your Seats Now and secure your
            future👨🏼‍💻
          </h2>
        </div>
        {internshipCards.map((card) => (
          <InternshipCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </Carousel>
      <h2 className="mt-8 text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-white mx-auto">
        Learn skills, <b>Market will be yours.</b>
      </h2>
    </div>
  );
};

// Optional: Custom dot component
const CustomDot = ({ onClick, ...rest }) => {
  const { onMove, index, active } = rest;
  return (
    <li
      className={`custom-dot ${active ? "custom-dot--active" : ""}`}
      onClick={() => onClick()}
    >
      <button />
    </li>
  );
};

export default InternshipCarousel;
