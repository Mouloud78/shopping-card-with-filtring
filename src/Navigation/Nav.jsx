import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";

import "./Nav.css";
export default function Nav() {
  return (
  <div>
    <div className="nav-container">
      <input type="text" className="" placeholder="Enter your search shoes" />
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons"/>
          <a href="">
            <AiOutlineShoppingCart className="nav-icons"/>  
          </a>
          <a href="">
            <AiOutlineUser className="nav-icons"/>
          </a>
        </a>
      </div>
    </div>
  </div>)
}
