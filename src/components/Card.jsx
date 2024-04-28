import BurCar from "../assets/icons/Buy-car.svg";
import "../css/Card.css";
function Card(props) {
  const topics = props.topics;
  const image = props.image;
  const titleProduct = props.titleProduct;
  const price = props.price;
  const description = props.description;

  return (
    <div className="Card">
      <div className="top-section">
        <div className="topics">
          {topics.map((item) => (
            <a>{item}</a>
          ))}
        </div>
        <div className="add-to-card">
          <a href="#">
            <img src={BurCar} alt="add to car" />
          </a>
        </div>
      </div>
      <picture>
        <img src={image} />
      </picture>
      <div className="Card__content">
        <div className="top__content">
          <h3 key='title'>{titleProduct}</h3>
          <p key='price' className="price">{price}</p>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export { Card };
