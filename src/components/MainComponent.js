import { useState, useEffect } from 'react'
import SquareComponent from './squareCompo';

const TicTacToe = () => {
     const[won,setWon] = useState(false);
     const[element,setElement] = useState(Array(9).fill(null))
     const[currTurn, setCurrTurn] = useState('x');
     const winningCriteria = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; 
     const[winner,setWinner] = useState(null);

     const changeTurn = (e) => {
        if(!won){
          const newElement = [...element];
          if(newElement[parseInt(e.target.id)] !== null){
          return
         } 
         newElement[parseInt(e.target.id)] = currTurn;
         setElement(newElement)
         setCurrTurn(currEle => currEle === 'x' ? 'o' : 'x');   
        }    
     }

     useEffect(() => {
      const checkWinner = () => {
        for (const win of winningCriteria) {
          const [a, b, c] = win;
          if (element[a] !== null && element[a] === element[b] && element[a] === element[c]) {
            setWon(true);
            setWinner(element[a]);
            return;
          }
        }
      };
      checkWinner();
    }, [element]);

     const reStart = () => {
        setElement(Array(9).fill(null));
        setCurrTurn('x');
        setWon(false);
        setWinner(null)
     }

    return (
      <>
         <h1 className="text-center font-bold text-red-500 text-xl"> {currTurn}'s Turn </h1>
       <div className="text-center my-5">
          <div className="flex justify-center">
            <SquareComponent changeTurn={changeTurn}  value={element[0]} id={0} />
            <SquareComponent changeTurn={changeTurn}  value={element[1]}  id={1} />
            <SquareComponent changeTurn={changeTurn}  value={element[2]}  id={2} />
          </div>

          <div className="flex justify-center">
            <SquareComponent changeTurn={changeTurn}  value={element[3]}  id={3} />
            <SquareComponent changeTurn={changeTurn}  value={element[4]}  id={4} />
            <SquareComponent changeTurn={changeTurn} value={element[5]}  id={5}/>
          </div>

          <div className="flex justify-center">
            <SquareComponent changeTurn={changeTurn} value={element[6]}  id={6} />
            <SquareComponent changeTurn={changeTurn} value={element[7]}  id={7} />
            <SquareComponent changeTurn={changeTurn} value={element[8]}  id={8} />
          </div>
        </div> 

        { won && (
           <div className="flex justify-center items-center"> 
           <span className="text-green-600 font-semibold text-xl mx-3"> {winner}'s won the match </span> 
            <button className="w-24 rounded-lg h-8 bg-black text-white" onClick={reStart}> Restart </button> 
          </div> 
        ) }
      </>
       
    )
}

export default TicTacToe