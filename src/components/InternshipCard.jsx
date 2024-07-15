import { Link } from "react-router-dom";

const InternshipCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col justify-between items-center bg-white min-h-[550px] h-auto w-[220px] rounded-xl shadow-md m-1 sm:m-4 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <img src={image} alt={title} className="h-auto w-full rounded-t-md" />
        <h1 className="mx-2 text-xl font-bold text-[#21282E] p-2">{title}</h1>
        <p className="mx-2 text-[#717275] text-wrap text-sm p-2">{description}</p>
      </div>
      <button className="w-32 py-2 mb-2 text-white hover:bg-[#58a940cd] rounded-[10px] bg-[#43a724] transition-all duration-300 ease-in-out">
        <Link to={`/internships/${title.toLowerCase().replace(/\s+/g, "")}`}>
          Apply Now
        </Link>
      </button>
    </div>
  );
};

export default InternshipCard;
