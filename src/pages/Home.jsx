import { Layout } from "../layout"
import { Header } from '../components/Header'
import { Categories } from '../components/Categories'
import { Characteristics } from '../components/Characteristics'

function Home() {
  return (
    <Layout>
      <Header />
      <Categories />
      <Characteristics />
    </Layout>
  );
}

export { Home };
