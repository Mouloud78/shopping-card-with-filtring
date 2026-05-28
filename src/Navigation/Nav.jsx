import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

import "./Nav.css";

export default function Nav({ query, handleInputChange }) {
  return (
    <div>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter your search shoes"
          value={query}
          onChange={handleInputChange}
        />

        <div className="profile-container">
          <FiHeart className="nav-icons" />

          <AiOutlineShoppingCart className="nav-icons" />

          <AiOutlineUser className="nav-icons" />
        </div>
      </div>
    </div>
  );
}
