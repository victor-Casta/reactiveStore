import { Layout } from "../layout"
import { Header } from '../components/Header'
import { Categories } from '../components/Categories'
import { Characteristics } from '../components/Characteristics'
import { SalesBanner } from '../components/SalesBanner'
import headphones from '../assets/images/headphones.png'

function Home() {
  return (
    <Layout>
      <Header />
      <Categories />
      <Characteristics />
      <SalesBanner
        discount="20% OFF"
        titleProduct="AIRPODS JBL SOUND"
        endDiscount="28 Nov to 7 Dec"
        img={headphones}
        description="Discover an exceptional listening experience with our next-generation hearing aids."
      />
    </Layout>
  );
}

export { Home };
