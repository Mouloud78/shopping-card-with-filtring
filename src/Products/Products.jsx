import { AiFillStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

import "./Products.css";

export default function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card-title">Shoes</h3>
            <div className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </div>
            <section className="card-price">
              <div className="price">
                <del>$300,00</del>
                $200,00
              </div>
              <div className="bag">
                <BsFillHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
