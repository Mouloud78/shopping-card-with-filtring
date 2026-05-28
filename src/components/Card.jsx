import products from "../db/data";
import "../Products/Products.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

export default function Card({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}) {
  return (
    <section className="card-container">
      {products.map((product, index) => (
        <section className="card" key={index}>
          <img src={product.img} alt={product.title} className="card-img" />

          <div className="card-details">
            <h3 className="card-title">{product.title}</h3>

            <div className="card-reviews">
              {product.star}
              {product.star}
              {product.star}
              {product.star}

              <span className="total-reviews">{product.reviews}</span>
            </div>

            <section className="card-price">
              <div className="price">
                <del>{product.prevPrice}</del>

                <span>${product.newPrice}</span>
              </div>

              <div className="bag">
                <BsFillHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      ))}
    </section>
  );
}
