import { PiSmileySadLight } from "react-icons/pi";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const GoogleForm = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <PiSmileySadLight className="text-yellow-500 text-6xl mb-4" />
      <img className="h-12 my-6 lg:h-16 w-auto " src={Logo} alt="Internee.pk" />
      <p className="text-xl mb-5 text-red-900">
        The internship on this domain is full now.
      </p>
      <Link
        to="/"
        className=" bg-[#43a724] hover:bg-[#74cb5acd] text-white rounded-[25px] transition-all duration-300 ease-in-out px-6 py-3 mt-4"
      >
        Go Home
      </Link>
    </section>
  );
};

export default GoogleForm;
