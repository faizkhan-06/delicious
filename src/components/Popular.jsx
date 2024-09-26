import axios from "axios";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_SPOONACULAR_API
        }&number=9`
      );
      setPopular(api.data.recipes);
      localStorage.setItem("popular", JSON.stringify(api.data.recipes));
    }
  };

  useEffect(() => {
    try {
      getPopular();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left font-Gaegu">
        Our Popular Picks
      </h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "1.5rem",
          breakpoints: {
            1280: { perPage: 4 }, // 3 items on large screens
            1024: { perPage: 2 }, // 2 items on tablets
            768: { perPage: 1 }, // 1 item on smaller tablets and mobile
          },
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <motion.div
                className="relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.05 }} // Slight scale on hover
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 md:h-72 object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:to-transparent">
                  <p className="relative z-10 text-lg md:text-xl font-bold font-Gaegu">
                    {recipe.title}
                  </p>
                </div>
              </motion.div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Popular;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import { Link } from "react-router-dom";

// const Popular = () => {
//   const [popular, setPopular] = useState([]);

//   const getPopular = async () => {
//     const check = localStorage.getItem("popular");
//     if (check) {
//       setPopular(JSON.parse(check));
//     } else {
//       const api = await axios.get(
//         `https://api.spoonacular.com/recipes/random?apiKey=${
//           import.meta.env.VITE_SPOONACULAR_API
//         }&number=9`
//       );
//       setPopular(api.data.recipes);
//       localStorage.setItem("popular", JSON.stringify(api.data.recipes));
//     }
//   };

//   useEffect(() => {
//     try {
//       getPopular();
//     } catch (e) {
//       console.log(e);
//     }
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h3 className="text-3xl font-bold mb-6 text-gray-800">
//         Our Popular Picks
//       </h3>
//       <Splide
//         options={{
//           perPage: 4,
//           arrows: false,
//           pagination: false,
//           drag: "free",
//           gap: "1.5rem",
//           breakpoints: {
//             1024: { perPage: 3 }, // 3 items on screens larger than 1024px
//             768: { perPage: 2 }, // 2 items on tablet screens
//             640: { perPage: 1 }, // 1 item on mobile screens
//           },
//         }}
//         className="p-4"
//       >
//         {popular.map((recipe) => {
//           return (
//             <SplideSlide key={recipe.id}>
//               <Link
//                 to={`/recipe/${recipe.id}`}
//                 className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <img
//                   src={recipe.image}
//                   alt={recipe.title}
//                   className="w-full h-64 object-cover rounded-t-xl"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-center">
//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>

//                   {/* Recipe title */}
//                   <p className="relative z-10 text-lg font-bold font-Gaegu">
//                     {recipe.title}
//                   </p>
//                 </div>
//               </Link>
//             </SplideSlide>
//           );
//         })}
//       </Splide>
//     </div>
//   );
// };

// export default Popular;
