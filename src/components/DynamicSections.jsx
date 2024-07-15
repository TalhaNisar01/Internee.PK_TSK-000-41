import { motion } from "framer-motion";
import { fadeIn, bottomUp, staggerContainer } from "../utils/motion";

const DynamicSections = ({ screenWidth, sections }) => {
  return (
    <section className=" flex flex-col justify-center items-center">
      <div className="w-[90%]  lg:w-[80%] xl:w-[85%]">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse w-[100%] lg:flex-row my-24 ${
              index === 1 || index === 3 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="flex  items-center w-[90%] lg:w-1/2"
            >
              <motion.div
                variants={
                  screenWidth < 1024
                    ? bottomUp
                    : index === 1 || index === 3
                    ? fadeIn("left", "tween", 0.2, 1)
                    : fadeIn("right", "tween", 0.2, 1)
                }
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-fit"
                />
              </motion.div>
            </motion.div>
            <div className="flex flex-col w-full py-2 lg:w-1/2 pl-1 md:pl-10">
              <h1 className="text-xl md:text-2xl font-bold">
                {section.subTitle}
              </h1>
              <h1 className=" text-2xl sm:text-4xl md:text-5xl  text-[#21282E] font-bold">
                {section.title}
              </h1>
              <p className="my-4 text-[#717275] text-[16px] sm:text-[18px] md:text-[20px] m-1 w-[100%] md:max-w-[80%]">
                {section.description}
              </p>
              <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 md:gap-8 w-[100%]">
                {section.content.map((content, contentIndex) => {
                  const Icon = content.Icon;
                  return (
                    <div key={contentIndex} className="flex">
                      <motion.div
                        variants={bottomUp}
                        initial="hidden"
                        whileInView="show"
                        className="icon"
                      >
                        <Icon className="h-12 w-12 m-2 p-4 text-[#43a724] bg-[#fdae1e0d]" />
                      </motion.div>
                      <div>
                        <p className="text-[#717275] text-[14px] m-1 w-[100%] md:max-w-[90%]">
                          <b>{content.title}</b>
                          {content.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicSections;
