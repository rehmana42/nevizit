import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "react-rating-stars-component";
import StarRatings from "react-star-ratings";
import NavTourist from "./NavTourist";

export default function MainTourist() {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize state with data from location.state, or defaults if none
  const initialState = location.state || {};
  const [currentHeading, setCurrentHeading] = useState(initialState.heading || "");
  const [currentImg, setCurrentImg] = useState(initialState.img || "");
  const [currentPara, setCurrentPara] = useState(initialState.para || "");
  const [currentTouristLocation, setCurrentTouristLocation] = useState(initialState.location || "");

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(true);
  const [errorRecommendations, setErrorRecommendations] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/test/reviews/${currentTouristLocation}`);
        setReviews(response.data);
        calculateAverageRating(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]); // Reset reviews on error
        setAverageRating(0);
      }
    };
    if (currentTouristLocation) fetchReviews();
  }, [currentTouristLocation]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoadingRecommendations(true);
      setErrorRecommendations(null);
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("User from localStorage:", user);
        if (!user || !user.email) {
          console.warn("No user logged in, redirecting to login...");
          navigate("/login");
          return;
        }

        const response = await axios.post("http://localhost:3000/api/recommend", { email: user.email });
        console.log("Recommendations fetched:", response.data);
        setRecommendations(response.data.recommendations || []);
      } catch (error) {
        console.error("Error fetching recommendations:", error.message);
        setErrorRecommendations("Failed to load recommendations. Please try again.");
      } finally {
        setLoadingRecommendations(false);
      }
    };
    fetchRecommendations();
  }, [navigate]);

  // Update state when location.state changes (e.g., on initial load or external navigation)
  useEffect(() => {
    if (location.state) {
      setCurrentHeading(location.state.heading || "");
      setCurrentImg(location.state.img || "");
      setCurrentPara(location.state.para || "");
      setCurrentTouristLocation(location.state.location || "");
    }
  }, [location.state]);

  const calculateAverageRating = (reviewsData) => {
    if (!reviewsData || reviewsData.length === 0) {
      setAverageRating(0);
      return;
    }
    const totalRating = reviewsData.reduce((sum, review) => sum + (parseFloat(review.rating) || 0), 0);
    const avgRating = (totalRating / reviewsData.length).toFixed(1);
    setAverageRating(parseFloat(avgRating) || 0);
  };

  const handleRecommendationClick = (place) => {
    // Update the local state with the new place's data
    setCurrentHeading(place.heading);
    setCurrentImg(place.image);
    setCurrentPara(place.para);
    setCurrentTouristLocation(place.heading); // Use the heading as the touristLocation for fetching reviews
    setRating(0); // Reset rating and comment when switching places
    setComment("");
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.email) {
      alert("Please log in to submit a review.");
      navigate("/login");
      return;
    }

    const username = user.email.split("@")[0]; // Extract username from email (e.g., "ananyam" from "ananyam@gmail.com")
    const initial = username.charAt(0).toUpperCase(); // Get the first letter as initial

    const reviewData = {
      heading: currentHeading,
      rating: rating,
      comment: comment,
      touristLocation: currentTouristLocation,
      username: username,
      initial: initial,
      img: currentImg, // Use the current image URL
    };

    try {
      await axios.post("http://localhost:3000/test/reviews", reviewData); // Save review to backend
      setRating(0); // Reset form fields
      setComment("");
      // Fetch updated reviews
      const response = await axios.get(`http://localhost:3000/test/reviews/${currentTouristLocation}`);
      setReviews(response.data);
      calculateAverageRating(response.data);
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  return (
    <>
      <NavTourist />
      <div className="container mx-auto p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
          {currentHeading && currentImg && currentPara && currentTouristLocation ? (
            <>
              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="md:w-1/2">
                  <img
                    src={currentImg}
                    alt={currentHeading}
                    className="rounded-xl shadow-xl object-cover w-full h-[360px]"
                  />
                </div>
                <div className="mt-4 md:mt-0 md:w-1/2">
                  <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      <i className="fa-solid fa-location-dot mr-2 text-blue-600"></i>
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentTouristLocation)}`}className="text-blue-600">{currentTouristLocation}</a>
                    
                    </div>
                    <hr />
                    <div className="flex items-center mb-2">
                      <i className="fa-solid fa-dollar-sign mr-2 text-gray-500"></i>
                      <p className="text-gray-700">Free</p>
                    </div>
                    <hr />
                    <div className="flex items-center mb-2">
                      <i className="fa-solid fa-clock mr-2 text-gray-500"></i>
                      <p className="text-gray-700">24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-6">
                <div className="flex items-center">
                  <StarRatings
                    rating={averageRating}
                    starRatedColor="gold"
                    starEmptyColor="gray"
                    numberOfStars={5}
                    starDimension="24px"
                    starSpacing="3px"
                    name="average-rating"
                  />
                  <span className="ml-2 text-gray-700">{averageRating} / 5</span>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Description</h2>
                <p className="text-gray-700">
                  {isExpanded ? currentPara : `${currentPara.slice(0, 150)}...`}
                </p>
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Recommended Places</h2>
                {loadingRecommendations ? (
                  <p className="text-gray-600">Loading recommendations...</p>
                ) : errorRecommendations ? (
                  <p className="text-red-600">{errorRecommendations}</p>
                ) : recommendations.length > 0 ? (
                  <div className="w-full overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                      {recommendations.concat(recommendations).map((place, index) => (
                        <div
                          key={index}
                          className="bg-white shadow-lg rounded-lg p-4 w-60 flex-shrink-0 mx-2 cursor-pointer hover:shadow-xl transition-shadow duration-200"
                          onClick={() => handleRecommendationClick(place)}
                        >
                          <img
                            src={place.image}
                            alt={place.heading}
                            className="w-full h-32 object-cover rounded mb-2"
                            onError={(e) => (e.target.src = "/fallback-image.jpg")}
                          />
                          <h3 className="text-center font-semibold text-gray-700">{place.heading}</h3>
                          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{place.para}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">No recommendations available.</p>
                )}
              </div>

                 {/* Add Rating and Comment Section */}
                 <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Add Your Review</h2>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-gray-700">Rating:</label>
                    <Rating
                      count={5}
                      value={rating}
                      onChange={setRating}
                      size={24}
                      activeColor="#ffd700"
                      color="#d1d5db"
                      emptyIcon={<i className="far fa-star"></i>}
                      filledIcon={<i className="fas fa-star"></i>}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Comment:</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full p-2 border rounded"
                      rows="3"
                      placeholder="Write your review here..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Submit Review
                  </button>
                </form>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Reviews</h2>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review._id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
                      <div className="flex items-center mb-2 font-semibold">
                        <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-2">
                          {review.initial}
                        </span>
                        <span>{review.user}</span>
                      </div>
                      <Rating
                        count={5}
                        value={parseFloat(review.rating)}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                        color="#d1d5db"
                      />
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No reviews yet.</p>
                )}
              </div>

           
            </>
          ) : (
            <p className="text-red-600">Location data not available. Please select a location.</p>
          )}
        </section>
      </div>

      {/* Add CSS for marquee effect */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite; /* Adjust speed with duration */
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Moves half the list length for seamless loop */
          }
        }
        .animate-marquee:hover {
          animation-play-state: paused; /* Pause on hover */
        }
      `}</style>
    </>
  );
}