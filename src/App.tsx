
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6">
          It Works!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Tailwind v4 + Vite + React is running perfectly 🚀
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105 shadow-lg">
          Click me
        </button>
      </div>
    </div>
  )
}

export default App
