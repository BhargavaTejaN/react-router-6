import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Home = () => {

    // const navigate = useNavigate();

    // const handleFindVanClick = () => navigate("/vans")

  return (
    <div className="home-container">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="vans">Find your van</Link>
    </div>
  );
};

export default Home;
