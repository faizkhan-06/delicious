import axios from "axios";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Vaggie = () => {
  const [vaggie, setVaggie] = useState([]);

  const getVaggie = async () => {
    const check = localStorage.getItem("vaggie");
    if (check) {
      setVaggie(JSON.parse(check));
    } else {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_SPOONACULAR_API
        }&number=9&tags=vegetarian`
      );
      setVaggie(api.data.recipes);
      localStorage.setItem("vaggie", JSON.stringify(api.data.recipes));
    }
  };

  useEffect(() => {
    getVaggie();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left font-Gaegu">
        Our Vegetarian Picks
      </h3>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "2rem",

          breakpoints: {
            1024: { perPage: 2 }, // 2 items on tablet screens
            640: { perPage: 1 }, // 1 item on mobile screens
          },
        }}
      >
        {vaggie.map((recipe) => (
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

export default Vaggie;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import { Link } from "react-router-dom";

// const Vaggie = () => {
//   const [vaggie, setVaggie] = useState([]);

//   const getVaggie = async () => {
//     const check = localStorage.getItem("vaggie");
//     if (check) {
//       setVaggie(JSON.parse(check));
//     } else {
//       const api = await axios.get(
//         `https://api.spoonacular.com/recipes/random?apiKey=${
//           import.meta.env.VITE_SPOONACULAR_API
//         }&number=9&tags=vegetarian`
//       );
//       setVaggie(api.data.recipes);
//       localStorage.setItem("vaggie", JSON.stringify(api.data.recipes));
//     }
//   };

//   useEffect(() => {
//     try {
//       getVaggie();
//     } catch (e) {
//       console.log(e);
//     }
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h3 className="text-3xl font-bold mb-6 text-gray-800">
//         Our Vegetarian Picks
//       </h3>
//       <Splide
//         options={{
//           perPage: 3,
//           arrows: false,
//           pagination: false,
//           drag: "free",
//           gap: "1.5rem",
//           breakpoints: {
//             1024: { perPage: 2 }, // 2 items on tablet screens
//             768: { perPage: 1 }, // 1 item on smaller screens
//           },
//         }}
//         className="p-4"
//       >
//         {vaggie.map((recipe) => {
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
//                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/70 before:to-transparent">
//                   <p className="relative z-10 text-xl font-bold font-Gaegu">
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

// export default Vaggie;
