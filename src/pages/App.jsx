import { Routes } from '../routes/Routes'
import { ShoppingCardProvider } from '../context/index'
import '../css/App.css'

function App() {
  return (
    <div className="App">
      <ShoppingCardProvider>
        <Routes />
      </ShoppingCardProvider>
    </div>
  )
}

export default App
