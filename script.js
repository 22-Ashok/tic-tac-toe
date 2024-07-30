import React from 'react'
import ReactDOM from 'react-dom/client'
import TicTacToe from './src/components/MainComponent'

const App = () => {

    return (
        <>
         <h1 className="text-center text-2xl text-blue-700 my-2 font-extrabold">Tic-Tac-Toe</h1>
         <TicTacToe />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)