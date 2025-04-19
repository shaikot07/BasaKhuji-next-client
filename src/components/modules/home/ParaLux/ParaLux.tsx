// import React from "react";
// import parallux from "../../../../assets/paralux-1.jpg"
// const ParaLux = () => {
//   return (
//     <div>
//       <div className="bg-[url(/img/mountains.jpg)] bg-fixed ..."></div>
//     </div>
//   );
// };

// export default ParaLux;


import React from "react";
import parallux from "../../../../assets/paralux-1.jpg"

const ParaLux = () => {
  return (
    <section
    className="relative h-[400px] flex items-center justify-center text-center text-white bg-fixed bg-center bg-cover mt-16"
    style={{ backgroundImage: `url(${parallux.src})` }}
  >
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

    {/* Content */}
    <div className="relative z-10 p-8 rounded-xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Any Inquiry? Feel free</h1>
      <h2 className="text-3xl md:text-4xl mb-6">To contact Us.</h2>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition">
        Send Message
      </button>
    </div>
  </section>
  );
};

export default ParaLux;