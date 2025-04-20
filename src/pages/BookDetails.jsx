import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { getBookById } from '../utils/api'
import { useWishlist } from '../context/WishlistContext'

function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { wishlist, dispatch } = useWishlist()

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true)
        const data = await getBookById(id)
        setBook(data)
      } catch (err) {
        setError('Failed to fetch book details')
      } finally {
        setLoading(false)
      }
    }

    fetchBook()
  }, [id])

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-red-500 text-center">{error}</div>
  if (!book) return <div className="text-center">Book not found</div>

  const isInWishlist = wishlist.some(item => item.id === book.id)
  const toggleWishlist = () => {
    dispatch({
      type: isInWishlist ? 'REMOVE_FROM_WISHLIST' : 'ADD_TO_WISHLIST',
      payload: book
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="md:flex">
          <img 
            src={book.volumeInfo?.imageLinks?.thumbnail || '/placeholder.png'}
            alt={book.volumeInfo?.title}
            className="w-48 h-72 object-cover rounded-lg"
          />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-2 dark:text-white">
              {book.volumeInfo?.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              by {book.volumeInfo?.authors?.join(', ')}
            </p>
            <button
              onClick={toggleWishlist}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isInWishlist 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <FaHeart />
              <span>{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
            </button>
            <div className="mt-6 prose dark:prose-invert">
              <p>{book.volumeInfo?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
