import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import { searchBooks } from '../utils/api'

function BookList({ searchTerm, sortBy }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const data = await searchBooks(searchTerm)
        let sortedBooks = [...data.items]
        
        if (sortBy === 'title') {
          sortedBooks.sort((a, b) => 
            a.volumeInfo.title.localeCompare(b.volumeInfo.title)
          )
        } else if (sortBy === 'author') {
          sortedBooks.sort((a, b) => 
            (a.volumeInfo.authors?.[0] || '').localeCompare(b.volumeInfo.authors?.[0] || '')
          )
        }
        
        setBooks(sortedBooks)
      } catch (err) {
        setError('Failed to fetch books')
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [searchTerm, sortBy])

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-red-500 text-center">{error}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList
