import './App.css'
import DevCard from './components/DevCard'
import ItemsList from './components/ItemsList'

function App() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <DevCard />
        <ItemsList />
      </div>
    </>
  )
}

export default App
