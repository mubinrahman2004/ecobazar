import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";

const ContactPage = () => {
  const contactInfo = [
    {
      id: 1,
      icon: CiLocationOn,
      title: "Address",
      content: "Uttara, Dhaka",
      iconClass: "text-2xl sm:text-3xl text-green-600"
    },
    {
      id: 2,
      icon: FaMessage,
      title: "Email",
      content: "mubinrahman2003@gmail.com",
      iconClass: "text-xl sm:text-2xl text-green-600"
    },
    {
      id: 3,
      icon: MdWifiCalling3,
      title: "Phone",
      content: "01855090726",
      iconClass: "text-2xl sm:text-3xl text-green-600"
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50">
  
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
       
          <div className="h-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg h-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <item.icon className={item.iconClass} />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg h-full">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Just Say Hello!
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Do you fancy saying hi to me or you want to get started with
                  your project and you need my help? Feel free to contact me.
                </p>
              </div>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-base sm:text-lg"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-base sm:text-lg"
                  />
                </div>

               

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.8451814131364!2d90.39946285684371!3d23.86878978966383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59ad99e526d%3A0x8301be280dfeb039!2sCreative%20IT%20Institute%2C%20Uttara%20Campus!5e1!3m2!1sen!2sbd!4v1763470268004!5m2!1sen!2sbd"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;