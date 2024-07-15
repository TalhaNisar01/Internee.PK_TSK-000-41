import ContactForm from "../components/ContactForm";
import { dataContactPage } from "../constants/index";

const ContactPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-10 my-10">
        <div className="p-3 md:p-6 flex flex-col justify-between md:flex-row w-full md:w-[85%]  ">
          <div className=" md:w-[90%] flex flex-col justify-center">
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 border-l-2 border-[#43a724]"></div>
              {dataContactPage.map((data, index) => {
                const Icon = data.Icon;
                return (
                  <div
                    key={index}
                    className="flex items-baseline md:items-center mb-10 relative"
                  >
                    <div className="text-[#43a724] bg-[#43a724] rounded-full p-3 "></div>

                    <div className="m-4 flex flex-col md:flex-row justify-center items-start md:items-center ">
                      <div className="bg-[#7be5a25b] m-4 rounded-full p-2 flex items-center justify-center">
                        <Icon className="h-24 w-24 p-4 text-[#43a724]" />
                      </div>
                      <div className="flex flex-col m-2">
                        <h1 className="text-lg font-semibold text-[#21282E]">
                          {data.title}
                        </h1>
                        <p className="my-4 text-[#717275] text-[14px] sm:text-[16px] md:text-[18px] w-[90%]">
                          {data.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactPage;
