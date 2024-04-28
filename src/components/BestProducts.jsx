import { Card } from "./Card";
import "../css/BestProducts.css";

function BestProducts() {
  return (
    <section className="BestProducts">
      <h2>Best Seller Products</h2>
      <div className="cards-container">
        <Card
          topics={["Electronics"]}
          image="https://source.unsplash.com/random/400×400"
          titleProduct="AirPods Pro"
          price="$120"
          description="Discover an exceptional listening experience with our next-generation hearing aids."
        />
        <Card
          topics={["Electronics"]}
          image="https://source.unsplash.com/random/400×400"
          titleProduct="AirPods Pro"
          price="$120"
          description="Discover an exceptional listening experience with our next-generation hearing aids."
        />
        <Card
          topics={["Electronics"]}
          image="https://source.unsplash.com/random/400×400"
          titleProduct="AirPods Pro"
          price="$120"
          description="Discover an exceptional listening experience with our next-generation hearing aids."
        />
        <Card
          topics={["Electronics"]}
          image="https://source.unsplash.com/random/400×400"
          titleProduct="AirPods Pro"
          price="$120"
          description="Discover an exceptional listening experience with our next-generation hearing aids."
        />
        <Card
          topics={["Electronics"]}
          image="https://source.unsplash.com/random/400×400"
          titleProduct="AirPods Pro"
          price="$120"
          description="Discover an exceptional listening experience with our next-generation hearing aids."
        />
      </div>
    </section>
  );
}

export { BestProducts };
