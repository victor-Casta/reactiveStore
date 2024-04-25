import PropTypes from 'prop-types'
import { Navbar } from '../components/Navbar'
import '../css/Layout.css'

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  return (
    <div className='Layout debug-screens'>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export { Layout }