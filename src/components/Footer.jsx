function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} BookHaven. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
