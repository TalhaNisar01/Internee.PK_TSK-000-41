import Icon from "../assets/images/icon.jpg";

const About = ({ internshipCards }) => {
  return (
    <section className="flex flex-col items-center m-4 sm:mx-32 mt-12 ">
      <div className="flex items-center justify-center h-24 w-24 rounded-full shadow-md">
        <img
          className="h-11 sm:h-14 md:h-16 w-auto m-2"
          src={Icon}
          alt="Internee.pk icon"
        />
      </div>
      <h1 className="text-center  text-3xl sm:text-4xl md:text-5xl p-2 text-[#21282E] font-bold">
        Who is internee.pk?
      </h1>
      <p className="my-4 text-[#717275]  text-center text-[16px] font-[100] sm:text-[18px]   md:text-[20px] m-1 w-[100%] md:max-w-[80%]">
        The ultimate platform designed to turbocharge the IT sector in Pakistan!
        We recognize the immense potential of talented individuals in the
        country and aim to bridge the gap between them and the thriving IT
        industry. Internee.pk offers a comprehensive range of virtual internship
        opportunities exclusively in the IT field.
      </p>
      <span className="font-bold text-[#4c4d51] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] m-4 mb-10 w-[100%] md:max-w-[80%] text-center">
        👇 Click Below and grab your internship now 👇
      </span>
    </section>
  );
};

export default About;
