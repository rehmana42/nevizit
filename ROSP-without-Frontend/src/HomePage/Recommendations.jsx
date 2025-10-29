import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      const userData = localStorage.getItem('user');
      if (!userData) {
        setError('No user data found in local storage');
        setLoading(false);
        return;
      }

      let email;
      try {
        const parsedData = JSON.parse(userData);
        email = parsedData.email || parsedData;
      } catch (e) {
        email = userData;
      }

      if (!email) {
        setError('No email found in user data');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post('http://localhost:3004/api/ratingbase', { email });
        const data = Array.isArray(response.data)
          ? response.data
          : Array.isArray(response.data?.recommendations)
          ? response.data.recommendations
          : [];
        setRecommendations(data);
      } catch (err) {
        setError('Failed to fetch recommendations');
        console.error('Fetch Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  useEffect(() => {
    if (recommendations.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(recommendations.length / 3));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [recommendations]);



  const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating || 0);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-[20px] mr-[2px] ${i <= roundedRating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
      );
    }
    return stars;
  };

  const slidesCount = Math.ceil(recommendations.length / 3);

  if (loading) return <div className="text-center text-lg text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-lg text-red-600">{error}</div>;

  return (
    <div className="p-5 max-w-[1200px] mx-auto">
      <h2 className="text-center mb-5 text-2xl font-bold">Top Places to Visit</h2>
      {recommendations.length === 0 ? (
        <p className="text-center text-base text-gray-600">No recommendations available.</p>
      ) : (
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {recommendations.map((place, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
                <div
                  className="border border-gray-200 rounded-lg p-3 text-center shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
               
                >
                  <img
                    src={place.img || 'https://via.placeholder.com/150'}
                    alt={place.touristLocation || 'Unknown Place'}
                    className="w-full h-[150px] object-cover rounded-md mb-3"
                  />
                  <h3 className="text-lg font-semibold mb-2">{place.touristLocation || 'Unknown'}</h3>
                  <div className="flex items-center justify-center mt-2">
                    <span className="ml-2 text-sm text-gray-600"><h1>Ratings:</h1>{renderStars(place.avg_rating)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: slidesCount }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
