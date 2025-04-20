import { useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import BookList from '../components/BookList'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Discover Books</h1>
      <SearchFilter 
        onSearch={setSearchTerm}
        onSort={setSortBy}
      />
      <BookList 
        searchTerm={searchTerm}
        sortBy={sortBy}
      />
    </div>
  )
}

export default Home
