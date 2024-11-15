import { Link } from "react-router-dom";
import "../assets/css/item.css";

function ItemCards({ item }) {
  // console.log(item);
  return (
    <>
      <div className="item-div">
        <div className="item-image">
          <img src={item.image} alt="item-image" />
        </div>
        <div className="item-details">
          <Link to={item.path}>
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
          </Link>
          {/* <a href={item.path}>
            <h2>{item.name}</h2>{" "}
          </a> */}
        </div>
      </div>
    </>
  );
}

export default ItemCards;
