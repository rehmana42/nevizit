import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import placesData from "./places.json"; // Import static JSON data (adjust path as needed)
import NavTourist from "./NavTourist"; // Import the NavTourist component (adjust path as needed)

// ShowTourist Component (without NavTourist)
function ShowTourist({ heading, location, img, para, link, website, webname }) {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/MainTourist", {
      state: { heading, img, para, location, website, webname },
    });
  };

  return (
    <div>
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-7xl mx-auto my-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-serif font-semibold text-gray-800">
            {heading}
          </h1>
          <div className="w-[200px] h-[1.8px] mt-[10px] bg-black mx-auto"></div>
        </header>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 overflow-hidden">
            <img
              src={img}
              alt={heading}
              className="rounded-xl shadow-xl object-cover w-full h-[360px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="leading-relaxed text-gray-700 font-desc text-justify text-2xl font-medium">
              {para}
            </p>
            <a href={link}>
              <p className="text-blue-600 text-[20px] ml-2 font-semibold mt-8 cursor-pointer font-desc transition-all duration-300 ease-in-out transform hover:scale-105">
                <i className="fa-solid fa-location-dot fa-bounce"></i> {location}
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Parent Component with Search, Recommendation, and Default Display
export default function SearchAndRecommend() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);
  const [similarityMatrix, setSimilarityMatrix] = useState([]);
  const [processedPlaces, setProcessedPlaces] = useState([]);

  // Preprocess data and compute similarity (runs once on component mount)
  useEffect(() => {
    // Step 1: Combine tags if not already present in JSON
    const processedData = placesData.map((place) => ({
      ...place,
      tags: place.tags || `${place.para} ${place.category} ${place.heading}`, // Combine if tags not precomputed
    }));

    setProcessedPlaces(processedData);

    // Step 2: Create a bag-of-words vocabulary
    const allTags = processedData
      .map((place) => place.tags.toLowerCase().split(" "))
      .flat();
    const uniqueWords = [...new Set(allTags)]; // Vocabulary (mimics CountVectorizer)

    // Step 3: Create binary vectors for each place (mimics CountVectorizer)
    const vectors = processedData.map((place) => {
      const words = place.tags.toLowerCase().split(" ");
      return uniqueWords.map((word) => (words.includes(word) ? 1 : 0));
    });

    // Step 4: Compute cosine similarity between all pairs of places
    const computeCosineSimilarity = (vecA, vecB) => {
      const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
      const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
      const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
      if (magnitudeA === 0 || magnitudeB === 0) return 0;
      return dotProduct / (magnitudeA * magnitudeB);
    };

    const similarity = vectors.map((vecA, i) =>
      vectors.map((vecB, j) => (i === j ? 1 : computeCosineSimilarity(vecA, vecB)))
    );

    setSimilarityMatrix(similarity);
  }, []);

  // Recommendation function (adapted from your Python code)
  const recommend = (partialHeading) => {
    if (!partialHeading || partialHeading.trim() === "") return [];

    partialHeading = partialHeading.toLowerCase();

    // Find matching places based on partial heading
    const matchingPlaces = processedPlaces.filter((place) =>
      place.heading.toLowerCase().startsWith(partialHeading)
    );

    if (matchingPlaces.length === 0) {
      throw new Error(`No headings found starting with '${partialHeading}'`);
    }

    // Select the first matching place
    const selectedPlace = matchingPlaces[0];
    const placeIndex = processedPlaces.findIndex(
      (place) => place.heading === selectedPlace.heading
    );

    // Initialize recommendations with the matched place
    const recommendedPlaces = [];
    const seenHeadings = new Set();
    let placeCount = 0;

    recommendedPlaces.push({
      heading: selectedPlace.heading,
      image: selectedPlace.image,
      para: selectedPlace.para,
      tags: selectedPlace.tags,
    });
    seenHeadings.add(selectedPlace.heading);
    placeCount++;

    // Get similarity scores for this place
    const distances = similarityMatrix[placeIndex] || [];
    const placesList = distances
      .map((sim, idx) => ({ idx, sim }))
      .sort((a, b) => b.sim - a.sim)
      .slice(1, 20); // Skip the place itself and take top matches

    // Add similar places
    for (const { idx } of placesList) {
      const place = processedPlaces[idx];
      if (!place || seenHeadings.has(place.heading)) continue;

      recommendedPlaces.push({
        heading: place.heading,
        image: place.image,
        para: place.para,
        tags: place.tags,
      });
      seenHeadings.add(place.heading);
      placeCount++;
      if (placeCount >= 6) break; // Limit to 6 recommendations
    }

    return recommendedPlaces;
  };

  // Update recommendations when search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setRecommendations([]);
      setError(null);
      return;
    }

    try {
      const recommendedPlaces = recommend(searchTerm);
      if (recommendedPlaces.length === 0) {
        setError("No recommendations found for this search term.");
        setRecommendations([]);
      } else {
        setRecommendations(recommendedPlaces);
        setError(null);
      }
    } catch (err) {
      setError(err.message || "An error occurred while fetching recommendations.");
      setRecommendations([]);
    }
  }, [searchTerm]);

  return (
    <>
      {/* Render NavTourist only once at the top */}
      <NavTourist />

      <div className="max-w-7xl mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for a place..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Render Recommendations or Default Places */}
        {searchTerm.trim() === "" && recommendations.length === 0 ? (
          // Show all places by default
          <div>
            <h2 className="text-2xl font-bold mb-4">All Places</h2>
            {placesData.map((place, index) => (
              <ShowTourist
                key={index}
                heading={place.heading}
                img={place.image}
                para={place.para}
                location={place.heading} // Adjust based on your data
                link={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  place.heading
                )}`} // Example link to Google Maps
                website={place.website || ""} // Add if available in your data
                webname={place.webname || ""} // Add if available in your data
              />
            ))}
          </div>
        ) : recommendations.length > 0 ? (
          // Show recommendations when search term is entered
          <div>
            <h2 className="text-2xl font-bold mb-4">Recommended Places</h2>
            {recommendations.map((place, index) => (
              <ShowTourist
                key={index}
                heading={place.heading}
                img={place.image}
                para={place.para}
                location={place.heading} // Adjust based on your data
                link={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  place.heading
                )}`} // Example link to Google Maps
                website={place.website || ""} // Add if available in your data
                webname={place.webname || ""} // Add if available in your data
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            No recommendations found. Try adjusting your search!
          </p>
        )}
      </div>
    </>
  );
}