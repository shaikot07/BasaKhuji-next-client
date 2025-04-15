import { HelpCircleIcon, MessageCircle, Phone, } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white text-black">
      <div className="text-center py-16 px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8">
          Questions? Feel Free to Reach Out Via Message.
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16 text-gray-600 text-sm">
          {/* Email Contact */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-md">
              <HelpCircleIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium">We’re always happy to help.</p>
              <a href="mailto:ask@homy.com" className="text-black underline">
                ask@homy.com
              </a>
            </div>
          </div>

          {/* Phone Contact */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium">Our hotline number.</p>
              <a href="tel:+8801711111111" className="text-black underline">
                +8801711111111
              </a>
            </div>
          </div>
          {/* Live Chat */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-md">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium">Live chat.</p>
              <a href="#" className="text-black underline">
                www.bashakhuji/chat
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl px-4 pb-16 gap-8 mt-11">
        <div className="w-full lg:w-1/2 h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024429096354!2d90.37739841498178!3d23.750903184589913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5bcedfe0f3%3A0x4b214d3a83d2dfdf!2sDhaka%20College!5e0!3m2!1sen!2sbd!4v1616568391264!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg border"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 bg-orange-50 p-8 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              placeholder="Your message*"
              rows={5}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
