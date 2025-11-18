import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'





const Home = () => {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const navigate = useNavigate();

    const saveName = ()=>{

        if(!player1 || !player2){
            alert("enter both name !!!!!!!! 💥🔥🔥🔥💥")
            return;
        } 

        localStorage.setItem("player1",player1)
        localStorage.setItem("player2",player2)

        navigate("/Playground");

    }


 
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-5 '>

        <h1 className="text-3xl font-bold text-center text-black  py-3 px-4 rounded-lg">
  Tic Tac Toe
</h1>

        <div className='bg-blue-200 max-w-180 w-full  h-100 flex flex-col justify-center items-center rounded-lg gap-5' >
        <div className='flex flex-col gap-5 text-2xl'>
            <div className='flex gap-2 justify-center items-center'>
                <label>Player 1 : </label>
                <input type='text' className='bg-white outline-none rounded w-50 sm:w-[274.4px]' onChange={(e)=>{setPlayer1(e.target.value)}} required></input>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <label>Player 2 : </label>
                <input type='text' className='bg-white outline-none rounded w-50 sm:w-[274.4px]' onChange={(e)=>{setPlayer2(e.target.value)}} required></input>
            </div>
        </div>
        <button className='bg-emerald-400 px-4 py-1 text-xl rounded text-gray-700 hover:bg-emerald-300 active:scale-95 transition cursor-pointer' onClick={saveName}>Submit</button>
        </div>

    </div>
  )
}

export default Home