import { useState } from 'react'
import SquareComponent from './squareCompo';

const TicTacToe = () => {
     const[element,setElement] = useState(Array(9).fill(null))
     const[currTurn, setCurrTurn] = useState('x');
     const winningCriteria = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

     const changeTurn = (e) => {
       const newElement = [...element];
         newElement[parseInt(e.target.id)] = currTurn;
         setElement(newElement)
         setCurrTurn(currEle => currEle === 'x' ? 'o' : 'x');    
     }

     const winner = () => {
        for(const win of winningCriteria){
          const[a,b,c] = win;
          if(element[a]!=null && (element[a]==element[b] && element[a]==element[c])){
            return element[a];
          }
        }
     }
     const checkWinner = winner();

     const reStart = () => {
        setElement(Array(9).fill(null));
        setCurrTurn('x');
     }

    return (
      <>
       { checkWinner ?
       <div className="text-center"> 
          <p className=" font-bold text-green-700 text-xl "> {checkWinner} Won the match </p> 
          <button className="border w-24 h-8 bg-black text-white rounded" onClick={reStart}> play again </button>
       </div>
      
        :  
       
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
        </div> }
        
      </>
       
    )
}

export default TicTacToe