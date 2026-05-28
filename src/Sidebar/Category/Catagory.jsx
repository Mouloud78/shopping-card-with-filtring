import "./Category.css";
import Input from "../../components/Input";

export default function Catagory({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneackers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="casual"
          title="Casual"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="skate"
          title="Skate"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="running"
          title="Running"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="basketball"
          title="Basketball"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="fashion"
          title="Fashion"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="luxury"
          title="Luxury"
          name="test"
        />
      </div>
    </div>
  );
}
