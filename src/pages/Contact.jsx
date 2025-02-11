import { BsEnvelope, BsTelephone } from "react-icons/bs";

export default function Contact() {
  return (
    <div
      id="contact"
      className="section min-h-screen container mx-auto flex items-center justify-center px-5 py-10 text-white"
    >
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:px-10">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
          Contact Me
        </h1>
        <p className="text-base text-gray-400 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Feel free to reach out to me through the following channels. I’d love
          to connect with you!
        </p>

        {/* Contact Info */}
        <div className="space-y-4">
          {/* Email Section */}
          <a
            href="mailto:nugrohocn6@gmail.com"
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-primary hover:text-gray-900 transition duration-300 transform hover:scale-105 shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsEnvelope className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">nugrohocn6@gmail.com</span>
          </a>

          {/* Phone Section */}
          <a
            href="https://api.whatsapp.com/send/?phone=%2B6287739772955&text&type=phone_number&app_absent=0"
            className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-primary hover:text-gray-900 transition duration-300 transform hover:scale-105 shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelephone className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">+62 877-3977-2955</span>
          </a>
        </div>
      </div>
    </div>
  );
}
