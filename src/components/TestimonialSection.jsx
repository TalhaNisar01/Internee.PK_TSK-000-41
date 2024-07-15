import { motion } from "framer-motion";
import { fadeIn, bottomUp, staggerContainer } from "../utils/motion";

import Carousel from "react-multi-carousel";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";

const TestimonialSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1400, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 840 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 840, min: 0 },
      items: 1,
    },
  };

  const testimonials = [
    {
      comment:
        "internee.pk is the best, most comprehensive 21st-century innovation for those student who's looking for internship and upgrade thier skillsets. Their projects are tough but market valued.",
      name: "Rabia Javed",
      location: "Karachi, Pakistan",
    },
    {
      comment:
        "internee.pk is all about helping us grow our careers. May ALLAH give them more achivements and success on their journey.",
      name: "Nagina Asif",
      location: "Karachi, Pakistan",
    },
    {
      comment:
        "Thanks to internee.pk, I grew up my skills here and now i am working as a Flutter Developer in a US company.",
      name: "Razaullah Sami",
      location: "KPK, Pakistan",
    },
    {
      comment:
        "I find internee.pk to be an outstanding tool for getting hands on experience. Sometimes you have to spend a little to make a lot to develop projects.",
      name: "Kashan Soomro",
      location: "Multan, Pakistan",
    },
    {
      comment:
        "Amazing! internee.pk is a gamechanger! The way thier team is working is so crazy. Thank you for giving me this opportunity",
      name: "Naila Rozi",
      location: "Lahore, Pakistan",
    },
    {
      comment:
        "After getting this internship, my skill got enhance more than my expectation. JazakALLAH for this.",
      name: "Mohammad Rafiq",
      location: "Sindh Division, Pakistan",
    },
    {
      comment:
        "I would like to say, I think you have a great product and I’m excited that I found it!",
      name: "Ayesha Laghari",
      location: "Islamabad, Pakistan",
    },
    {
      comment:
        "Been using internee.pk for internship is amazing experience. I do some other virtual internship as well but thier task portal and presentation is amazing",
      name: "Sidra",
      location: "Bahawalnagar, Pakistan",
    },
  ];
  return (
    <section className=" flex flex-col justify-center w-full bg-[#f0f0f0] py-8 px-8">
      <div className="md:ml-24">
        <h1 className=" text-2xl sm:text-4xl md:text-5xl md:w-1/2  text-[#21282E] font-bold my-12">
          What Students are saying about internee.pk
        </h1>
        <motion.div variants={bottomUp} initial="hidden" whileInView="show">
          <Carousel
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                comment={testimonial.comment}
                name={testimonial.name}
                location={testimonial.location}
              />
            ))}
          </Carousel>
        </motion.div>
      </div>
      <div className="md:ml-24 flex flex-col md:flex-row items-center justify-center my-12">
        <div className="flex flex-1 ">
          <AiOutlineSafetyCertificate className="h-16 w-16 mx-2 p-2 text-[#43a724]" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#21282E] my-4">
              Safe and secure
            </h1>
            <ul className="list-disc list-inside">
              <li className="m-2">
                Powered by Microsoft Azure cloud technology.
              </li>
              <li className="m-2">Encrypted at rest and in transit.</li>
              <li className="m-2">Data resides in US-based data centers.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 ">
          <MdOutlinePayment className="h-12 w-12 mt-2 mx-2  text-[#43a724]" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#21282E] my-4 ">
              Free From Internship To Certification
            </h1>
            <ul className="list-disc list-inside">
              <li className="m-2">Profile Building & Optimization</li>
              <li className="m-2">Free Learning Management System</li>
              <li className="m-2">Hands on Tasks with Certification</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="mt-8 text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-white mx-auto "></h1>
    </section>
  );
};

const Testimonial = ({ comment, name, location }) => {
  return (
    <div className="flex flex-col  justify-between bg-[#21282E] text-white min-h-80 h-auto m-1 md:m-4 rounded-3xl p-5 md:p-10">
      <p className="text-xl sm:text-xl p-2 ">&quot; {comment} &quot;</p>
      <div>
        <p className="text-lg md:text-xl  text-[#FFCF5C] font-semibold">
          {name}
        </p>
        <p className="text-lg md:text-xl">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialSection;
