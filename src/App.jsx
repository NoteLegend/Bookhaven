import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BookDetails from './pages/BookDetails'
import WishlistPage from './pages/WishlistPage'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme}`}>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
