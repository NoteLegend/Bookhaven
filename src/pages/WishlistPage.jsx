import { useWishlist } from '../context/WishlistContext'
import BookCard from '../components/BookCard'

function WishlistPage() {
  const { wishlist } = useWishlist()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 dark:text-white">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Your wishlist is empty. Start adding some books!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WishlistPage
