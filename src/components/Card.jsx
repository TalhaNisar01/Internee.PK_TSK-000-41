import { Link } from "react-router-dom";

const Card = ({ title, image }) => {
  return (
    <div className="flex flex-col pb-4  justify-between bg-white  h-auto w-auto rounded-xl shadow-md m-4 sm:m-4">
      <img src={image} alt={title} className="h-auto w-full rounded-t-md" />
      <h1 className="mx-2  text-xl font-bold text-[#21282E] p-2">{title}</h1>
      <hr className=" w-11/12 m-auto border-1 h-0.5 rounded-full" />
      <div className="flex justify-end">
        <Link to={`/internships/${title.toLowerCase().replace(/\s+/g, "")}`}>
          <button className="w-32 py-2 mx-6 my-3 text-white hover:bg-[#58a940cd] rounded-[5px] bg-[#43a724] transition-all duration-300 ease-in-out ">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
