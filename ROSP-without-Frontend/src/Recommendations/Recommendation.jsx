const Recommendation = async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/recommend', {
            method: 'POST',  // ✅ Use POST instead of GET
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ touristLocation: "some_location" })  // ✅ POST requests allow body
        });

        console.log("Status Code:", response.status);
        console.log("Status Text:", response.statusText);

        if (!response.ok) {
            console.error("Server Error:", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        console.log("Parsed Data:", data);

        if (!data.recommendations) {
            console.error("Error: 'recommendations' key not found in response");
        } else {
            console.log("Recommendations:", data.recommendations);
        }
    } catch (error) {
        console.error("Error fetching recommendations:", error);
    }
};

export default Recommendation;
