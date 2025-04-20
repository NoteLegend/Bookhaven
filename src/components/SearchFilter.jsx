import { useState } from 'react'

function SearchFilter({ onSearch, onSort }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
      <form onSubmit={handleSubmit} className="flex-1">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search books..."
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
        />
      </form>
      
      <select
        onChange={(e) => onSort(e.target.value)}
        className="w-full md:w-48 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
      >
        <option value="">Sort by...</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
    </div>
  )
}

export default SearchFilter
