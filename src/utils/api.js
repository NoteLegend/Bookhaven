import axios from 'axios'

const API_BASE_URL = 'https://www.googleapis.com/books/v1'

export const searchBooks = async (query, startIndex = 0) => {
  const response = await axios.get(`${API_BASE_URL}/volumes`, {
    params: {
      q: query || 'subject:fiction',
      startIndex,
      maxResults: 20,
      key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
    }
  })
  return response.data
}

export const getBookById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/volumes/${id}`)
  return response.data
}
