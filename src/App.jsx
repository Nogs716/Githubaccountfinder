import { Routes, Route, Link } from 'react-router-dom'
import TailwindPage from './pages/TailwindPage'
import StyledPage from './pages/StyledPage'

function App() {
  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">GitHub Profile Cards</h1>
      <div className="flex gap-4">
        <Link to="/tailwind" className="text-blue-500 underline">Tailwind Card</Link>
        <Link to="/styled" className="text-green-500 underline">Styled Card</Link>
      </div>
      <Routes>
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/styled" element={<StyledPage />} />
      </Routes>
    </div>
  )
}

export default App
