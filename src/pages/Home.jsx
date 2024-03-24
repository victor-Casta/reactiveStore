import { Layout } from "../layout"
import { Header } from '../components/Header'
import { Categories } from '../components/Categories'

function Home() {
  return (
    <Layout>
      <Header />
      <Categories />
    </Layout>
  );
}

export { Home };
