import Buttons from "../components/Buttons";
import "./Recommended.css";
export default function Recommended({ handleClick }) {
  return (
    <>
      <h2 className="recommended-title">best-selling</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All" />
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Reebok" title="Reebok" />
        <Buttons
          onClickHandler={handleClick}
          value="Converse"
          title="Converse"
        />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        <Buttons
          onClickHandler={handleClick}
          value="New Balance"
          title="New Balance"
        />
        <Buttons onClickHandler={handleClick} value="Asics" title="Asics" />
        <Buttons
          onClickHandler={handleClick}
          value="Under Armour"
          title="Armour"
        />
        <Buttons onClickHandler={handleClick} value="Fila" title="Fila" />
        <Buttons
          onClickHandler={handleClick}
          value="Balenciaga"
          title="Balenciaga"
        />
      </div>
    </>
  );
}
