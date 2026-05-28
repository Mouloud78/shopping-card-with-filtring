import "../Products/Products.css";
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
    // <section className="card-container">
    <section className="card">
      <img src={img} alt={title} className="card-img" />

      <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <div className="card-reviews">
          {star}
          {star}
          {star}
          {star}

          <span className="total-reviews">{reviews}</span>
        </div>

        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>

            <span>${newPrice}</span>
          </div>

          <div className="bag">
            <BsFillHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
    // </section>
  );
}
