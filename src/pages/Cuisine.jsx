import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const { type } = useParams();
  const [cuisine, setCuisine] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Function to fetch cuisine data
  const getCuisine = async () => {
    try {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_SPOONACULAR_API
        }&number=10&cuisine=${type}`
      );
      setCuisine(api.data.recipes); // Access the recipes array
    } catch (e) {
      console.error("Error fetching data", e);
    } finally {
      setLoading(false); // Ensure loading is set to false after fetching
    }
  };

  useEffect(() => {
    getCuisine();
  }, [type]);

  // Loader component
  const Loader = () => (
    <div className="flex justify-center items-center h-48">
      <svg
        className="animate-spin h-10 w-10 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 008-8 8 8 0 000 16 8 8 0 00-8-8z"
        ></path>
      </svg>
    </div>
  );

  return (
    <div className="container mx-auto px-4 font-Gaegu">
      <h2 className="text-3xl font-bold text-center mb-8">{type} Cuisine</h2>
      {loading ? ( // Show loader while loading
        <Loader />
      ) : (
        <motion.div
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {cuisine.map((item) => {
            return (
              <Link to={`/recipe/${item.id}`} key={item.id}>
                <motion.div
                  className="bg-white rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 rounded-xl object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Cuisine;
