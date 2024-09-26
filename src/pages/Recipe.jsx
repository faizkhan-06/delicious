import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instruction");

  const fetchDetails = async () => {
    try {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
          import.meta.env.VITE_SPOONACULAR_API
        }`
      );
      setDetails(api.data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  // Helper function to split instructions into steps
  const getInstructionsAsSteps = (instructions) => {
    if (instructions) {
      // Split instructions by period or new line
      return instructions.split(/\.|\n/).filter((step) => step.trim() !== "");
    }
    return [];
  };

  return (
    <div className="container mx-auto py-8 px-4 font-Gaegu">
      {/* Recipe Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        {details.title}
      </h2>

      {/* Main Section with Image and Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={details.image}
            alt={details.title}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Content Section (Tabs and Content) */}
        <div className="w-full lg:w-1/2">
          {/* Tabs for Instruction and Ingredients */}
          <div className="flex justify-center lg:justify-start space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("Instruction")}
              className={`px-4 py-2 rounded-md border border-black-100 ${
                activeTab === "Instruction" && "bg-black-100 text-white-100"
              } `}
            >
              Instruction
            </button>
            <button
              onClick={() => setActiveTab("Ingredients")}
              className={`px-4 py-2 rounded-md border border-black-100 ${
                activeTab === "Ingredients" && " bg-black-100 text-white-100"
              } `}
            >
              Ingredients
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "Instruction" && (
            <div className="text-left">
              <h3
                className="text-lg font-semibold text-gray-800 mb-4"
                dangerouslySetInnerHTML={{ __html: details.summary }}
              ></h3>
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-800">
                  Instructions
                </h3>
                {/* Ensure that ordered list items display correctly */}
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></div>
              </div>
            </div>
          )}

          {activeTab === "Ingredients" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Ingredients
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {details.extendedIngredients &&
                  details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id} className="text-gray-700">
                      {ingredient.original}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
