import { useState } from 'react'
import './App.css'
import vdayImage from './assets/1959.jpg'

function App() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [isAccepted, setIsAccepted] = useState(false)
  const [noCount, setNoCount] = useState(0)

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * (window.innerHeight - 100)
    setNoButtonPos({ x, y })
    setNoCount(prev => prev + 1)
  }

  const handleYes = () => {
    setIsAccepted(true)
  }

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely sure?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;("
    ]
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-[#fffaf0] font-['Outfit']">
      {!isAccepted ? (
        <div className="text-center max-w-lg animate-in fade-in duration-700">
          <div className="mb-8 float-animation">
            <img
              src={vdayImage}
              alt="Cute Chocolate"
              className="w-64 h-64 mx-auto rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3e2723] mb-4">
            Happy Chocolate Day! 🍫
          </h1>
          <p className="text-xl text-[#5d4037] mb-12">
            Will you given a chocolate?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 relative min-h-[100px] w-full">
            <button
              onClick={handleYes}
              className="px-8 py-3 bg-[#3e2723] text-white rounded-full text-xl font-semibold shadow-lg hover:bg-[#5d4037] transform hover:scale-110 transition-all duration-200 cursor-pointer"
              style={{ fontSize: `${Math.max(1, 1 + noCount * 0.1)}rem` }}
            >
              Yes! ❤️
            </button>
            <button
              onMouseEnter={moveButton}
              onClick={moveButton}
              className={`px-8 py-3 bg-gray-200 text-gray-700 rounded-full text-xl font-semibold shadow-md transition-all duration-200 ${noCount > 0 ? 'fixed' : 'relative'}`}
              style={noCount > 0 ? {
                left: `${noButtonPos.x}px`,
                top: `${noButtonPos.y}px`,
                zIndex: 50
              } : {}}
            >
              {getNoButtonText()}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center animate-in zoom-in duration-1000">
          <div className="mb-8">
            <img
              src={vdayImage}
              alt="Celebration"
              className="w-80 h-80 mx-auto rounded-3xl shadow-2xl mb-8 object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-[#3e2723] mb-4">Yay! I knew it! 🎉</h1>
          <p className="text-2xl text-[#5d4037]">See you soon with a box of chocolates! 🍫❤️</p>
        </div>
      )}

      {/* Decorative elements */}
      <div className="fixed top-10 left-10 text-4xl animate-bounce">🍫</div>
      <div className="fixed bottom-10 right-10 text-4xl animate-bounce delay-150">💝</div>
      <div className="fixed top-1/4 right-20 text-4xl animate-pulse">✨</div>
      <div className="fixed bottom-1/4 left-20 text-4xl animate-pulse delay-300">💖</div>
    </div>
  )
}

export default App
