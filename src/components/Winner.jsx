import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'

const Winner = () => {

    const navigate = useNavigate()

    const winner = localStorage.getItem("winner")

    // 💥 Fire confetti on page load
    useEffect(() => {
        // Big burst
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });

        // Extra mini-bursts
        const interval = setInterval(() => {
            confetti({
                particleCount: 50,
                spread: 80,
            });
        }, 500);

        // stop after 3 seconds
        setTimeout(() => clearInterval(interval), 3000);

    }, []);



    const playagain = () => {
        navigate('/playground')
    }

    const restart = () => {
        navigate('/')
    }

  return (
    <div className='flex justify-center items-center h-150'>
        <div className='flex flex-col justify-center items-center'>

            <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg animate-pulse">
               🎉 The Winner is {winner}! 🎉
            </h1>

            <div className='flex gap-5 p-10'>
                <button className='bg-emerald-400 px-4 py-1 text-xl rounded text-gray-700 hover:bg-emerald-300 active:scale-95 transition cursor-pointer m-5' onClick={playagain}>Play Again</button>
                <button className='bg-emerald-400 px-4 py-1 text-xl rounded text-gray-700 hover:bg-emerald-300 active:scale-95 transition cursor-pointer m-5' onClick={restart}>Restart</button>
            </div>
        </div>
    </div>
  )
}

export default Winner
