import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Playground = () => {

    const player1 = localStorage.getItem("player1");
    const player2 = localStorage.getItem("player2");
    const navigate = useNavigate();

    const [score1,setScore1] = useState(0);
    const [score2,setScore2] = useState(0);

    const [turn,setTurn] = useState("player1")

    const [tie,setTie] = useState("")

    const [b1, setB1] = useState("");
    const [b2, setB2] = useState("");
    const [b3, setB3] = useState("");
    const [b4, setB4] = useState("");
    const [b5, setB5] = useState("");
    const [b6, setB6] = useState("");
    const [b7, setB7] = useState("");
    const [b8, setB8] = useState("");
    const [b9, setB9] = useState("");

    const  [gameover,setGameover] = useState(false)

    const press = (box,setBox)=>{


      if(win === true){
        setWin(false)
      }


      if(gameover) return;

      if (box !== "" && box !== undefined) return;

      setCount(count+1)


      if(turn === "player1"){
        setBox("⭕")
        setTimeout(checkwin, 10);
        setTurn("player2")

      }
      else{
        setBox("❌")
        setTimeout(checkwin, 10);
        setTurn("player1")
      }
    }

    const final = ()=>{
        if(score1 === 3 ){
            localStorage.setItem("winner",player1)
            navigate('/Winner')
        }
        if(score2 === 3){
          localStorage.setItem("winner",player2)
          navigate('/Winner')
        }
    }

    const [win,setWin] = useState(false)

    const [count,setCount] = useState(0)

    const hasWinner = () => {
      return (
        (b1 && b1 === b2 && b2 === b3) ||
        (b4 && b4 === b5 && b5 === b6) ||
        (b7 && b7 === b8 && b8 === b9) ||
        (b1 && b1 === b4 && b4 === b7) ||
        (b2 && b2 === b5 && b5 === b8) ||
        (b3 && b3 === b6 && b6 === b9) ||
        (b1 && b1 === b5 && b5 === b9) ||
        (b3 && b3 === b5 && b5 === b7)
      );
    };


    const noresult =()=>{


      if(b1 !== ""&&b2 !== ""&&b3 !== ""&&b4 !==""&&b5 !==""&&b6 !==""&&b7 !==""&&b8 !==""&&b9 !== "" && !hasWinner()){


          setTie("Its tie")
        
        setTimeout(()=>{
          setB1("")
          setB2("")
          setB3("")
          setB4("")
          setB5("")
          setB6("")
          setB7("")
          setB8("")
          setB9("")
          setTie("")
          localStorage.removeItem("board");
        },2000)
          
      }
    }

    const [loaded, setLoaded] = useState(false);


useEffect(() => {
  if (!loaded) return;
  if (!gameover) {
    const data = { b1,b2,b3,b4,b5,b6,b7,b8,b9 };
    localStorage.setItem("board", JSON.stringify(data));
  }
}, [loaded, b1,b2,b3,b4,b5,b6,b7,b8,b9]);

    

useEffect(() => {
  const savedboard = localStorage.getItem("board");
  if (savedboard) {
    const data = JSON.parse(savedboard);
    setB1(data.b1 || "");
    setB2(data.b2 || "");
    setB3(data.b3 || "");
    setB4(data.b4 || "");
    setB5(data.b5 || "");
    setB6(data.b6 || "");
    setB7(data.b7 || "");
    setB8(data.b8 || "");
    setB9(data.b9 || "");
  }
  setLoaded(true);
}, []);



    const checkwin = ()=>{
      if(b1 === "⭕" && b2 === "⭕" && b3 === "⭕" || b4 === "⭕" && b5 === "⭕" && b6 === "⭕" || b7 === "⭕" && b8 === "⭕" && b9 === "⭕" || b1 === "⭕" && b4 === "⭕" && b7 === "⭕" || b2 === "⭕" && b5 === "⭕" && b8 === "⭕" || b3 === "⭕" && b6 === "⭕" && b9 === "⭕" || b1 === "⭕" && b5 === "⭕" && b9 === "⭕" || b3 === "⭕" && b5 === "⭕" && b7 === "⭕"   ){
        setWin(true)
        setScore1(score1+1);
        setGameover(true);
        setTimeout(()=>{
          setB1("")
          setB2("")
          setB3("")
          setB4("")
          setB5("")
          setB6("")
          setB7("")
          setB8("")
          setB9("")
          setGameover(false)  
          localStorage.removeItem("board");
        },1000)
       
      }
    if (
      (b1 === "❌" && b2 === "❌" && b3 === "❌") ||
      (b4 === "❌" && b5 === "❌" && b6 === "❌") ||
      (b7 === "❌" && b8 === "❌" && b9 === "❌") ||
      (b1 === "❌" && b4 === "❌" && b7 === "❌") ||
      (b2 === "❌" && b5 === "❌" && b8 === "❌") ||
      (b3 === "❌" && b6 === "❌" && b9 === "❌") ||
      (b1 === "❌" && b5 === "❌" && b9 === "❌") || 
      (b3 === "❌" && b5 === "❌" && b7 === "❌")  
    ) {
      setWin(true)
      setScore2(score2+1)
      setGameover(true);
      setTimeout(()=>{
          setB1("")
          setB2("")
          setB3("")
          setB4("")
          setB5("")
          setB6("")
          setB7("")
          setB8("")
          setB9("")
          setGameover(false)
          localStorage.removeItem("board");
        },1000)
    }
    }
    
    useEffect(() => {
      checkwin()
      final()
      noresult()

    }, [b1,b2,b3,b4,b5,b6,b7,b8,b9]);

    const back = ()=>{
      navigate('/')
    }



  return (
    <div className='flex flex-col text-3xl justify-center items-center'>
        <div className='self-start'>
             <button className='bg-emerald-400 px-4 py-1 text-xl rounded text-gray-700 hover:bg-emerald-300 active:scale-95 transition cursor-pointer m-5' onClick={back}>Back</button>
        </div>
       <div>
            <div>
            <h1 className="flex  gap-5 text-3xl font-bold text-center text-gray-800 py-3">
            <div className={`${turn === "player1"?" text-green-500 drop-shadow-[0_0_15px_green] scale-110 animate-bounce font-bold transition": ""}`}>{player1}</div> <span className="text-red-500">vs</span><div className={`${turn === "player2"?" text-green-500 drop-shadow-[0_0_15px_green] scale-110 animate-bounce font-bold transition": ""}`}>{player2}</div>
            </h1>
            </div>
       </div>
        <div className='flex justiy-cenetr items-center gap-10 '>
          <div>       
            <div className='w-50 h-50 bg-green-200 flex flex-col text-center rounded gap-5 p-10'>
              <h1>{player1}</h1>
              <div className="text-4xl font-bold text-red-500 animate-bounce bg-red-100 px-4 py-2 rounded-xl shadow-lg">{score1}</div>
            </div>   
          </div>

            <div className="w-120 h-120 bg-black border-2 border-black rounded-lg ">
              <div className='grid grid-cols-3 grid-rows-3 gap-1 p-2'>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b1,setB1)}>{b1}</button></div>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b2,setB2)}>{b2}</button></div>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b3,setB3)}>{b3}</button></div>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b4,setB4)}>{b4}</button></div>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b5,setB5)}>{b5}</button></div>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b6,setB6)}>{b6}</button></div>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b7,setB7)}>{b7}</button></div>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b8,setB8)}>{b8}</button></div>
                <div className="bg-white h-38 w-38"><button className='h-38 w-38 text-8xl active:scale-95 transition cursor-pointer' onClick={()=>press(b9,setB9)}>{b9}</button></div>
              </div>
            </div>
            <div>
            <div className='w-50 h-50 bg-green-200 flex flex-col text-center rounded gap-5 p-10'>
              <h1 className=''>{player2}</h1>
              <div className="text-4xl font-bold text-red-500 animate-bounce bg-red-100 px-4 py-2 rounded-xl shadow-lg">{score2}</div>
            </div>
            </div>  
        </div>
        <div className='text-red-400 text-5xl pt-2 drop-shadow-[0_0_15px_red]'>{tie}</div>
    </div>
  )
} 

export default Playground