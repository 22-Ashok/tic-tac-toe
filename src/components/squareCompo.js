
const SquareComponent = ({ value, changeTurn, id }) => {

    return (
        <div id={id} className="border-2 w-20 h-20  bg-black text-white flex justify-center items-center text-2xl cursor-pointer" onClick={(e)=>changeTurn(e)}>
            { value }
            </div>
    )
}

export default SquareComponent