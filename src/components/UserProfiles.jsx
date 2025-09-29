// Task 3: Component to display user profiles from API
import { useState, useEffect } from "react";
function UserProfiles() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Async function to fetch user data
    const fetchUsers = async () => {
      try {
        // Fetch data from API
        const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=7");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        // Convert response to JSON
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle next button click
  const handleNext = () => {
    // Update index, looping back to 0 when reaching the end
    setCurrentIndex((prev) => (prev + 1) % users.length);
  };

  return (
    <div className="card user-profiles">
      <h2>Task 3: User Profiles</h2>
      
      {loading && <p className="loading">Loading user data...</p>}
      {error && <p className="error">Error: {error}</p>}
      
      {!loading && !error && users.length > 0 && (
        <div className="fade-in">
          <div className="user-card">
            <p><strong>Name:</strong> {users[currentIndex].name}</p>
            <p><strong>Email:</strong> {users[currentIndex].email}</p>
            <p><strong>Address:</strong> {users[currentIndex].address.street},{" "}
              {users[currentIndex].address.city}</p>
          </div>

           <button onClick={handleNext} className="next-btn">
            Next User ({currentIndex + 1}/{users.length}) {/* Show current position */}
          </button>
        </div>
      )}
      
      {!loading && !error && users.length === 0 && (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserProfiles;