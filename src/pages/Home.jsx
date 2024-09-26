import React, { useState, useEffect } from "react";
import Vaggie from "../components/Vaggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading (you can replace this with actual data fetching or remove if unnecessary)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time, adjust accordingly

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
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
    >
      {loading ? (
        // Loader display while components are loading
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
      ) : (
        // Render actual content when loading is finished
        <>
          <Vaggie />
          <Popular />
        </>
      )}
    </motion.div>
  );
};

export default Home;
