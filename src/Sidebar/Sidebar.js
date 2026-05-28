import "./Sidebar.css";
import Category from "../Sidebar/Category/Catagory";
import Price from "../Sidebar/Price/Price";
import Colors from "../Sidebar/Colors/Colors";

export default function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}
