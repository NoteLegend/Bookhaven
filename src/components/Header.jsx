import { Link } from 'react-router-dom'
import { FaBook, FaHeart } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <FaBook className="text-primary-dark text-2xl" />
          <span className="text-xl font-bold dark:text-white">BookHaven</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="flex items-center space-x-1 hover:text-primary-dark dark:text-gray-200">
            <FaHeart />
            <span>Wishlist</span>
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
