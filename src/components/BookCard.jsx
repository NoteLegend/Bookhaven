import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useWishlist } from '../context/WishlistContext'

function BookCard({ book }) {
  const { wishlist, dispatch } = useWishlist()
  const isInWishlist = wishlist.some(item => item.id === book.id)

  const toggleWishlist = () => {
    dispatch({
      type: isInWishlist ? 'REMOVE_FROM_WISHLIST' : 'ADD_TO_WISHLIST',
      payload: book
    })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img 
        src={book.volumeInfo?.imageLinks?.thumbnail || '/placeholder.png'} 
        alt={book.volumeInfo?.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 dark:text-white">{book.volumeInfo?.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {book.volumeInfo?.authors?.join(', ')}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {book.volumeInfo?.description}
        </p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/book/${book.id}`}
            className="text-primary-dark hover:underline"
          >
            More Info
          </Link>
          <button
            onClick={toggleWishlist}
            className={`p-2 rounded-full ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
