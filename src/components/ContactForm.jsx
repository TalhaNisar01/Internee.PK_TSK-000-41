import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactForm = () => {
  return (
    <div className="relative w-full h-screen">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%", width: "100%", opacity: 0.5 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <Form />
    </div>
  );
};
const Form = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPhone("");
    setMessage("");

    alert("Your message has been submitted successfully!");
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center md:justify-end  pointer-events-none">
      <div className="bg-white p-8 m-4 md:mr-12 rounded-lg shadow-lg z-10 pointer-events-auto">
        <h2 className="text-2xl mb-4">Project in mind? Let’s Talk 🚀</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "Please enter a valid email address"
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="name@email.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="03\d{2}\d{7}"
              required
              placeholder="03XXXXXXXXX"
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "Please enter a valid 11-digit Phone Number. (03XXXXXXXXX)"
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={500}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Your message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={submitHandler}
            className={`w-full py-2 my-3 text-white hover:bg-[#58a940cd] rounded-[5px] bg-[#43a724] transition-all duration-300 ease-in-out `}
            disabled={!email || !phone || !message}
          >
            Submit
          </button>
          <p className="text-xs text-center text-gray-500">
            After your message submission, Our team will respond 1-2 Business
            days
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
