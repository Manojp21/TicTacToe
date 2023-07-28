import React,{useState} from "react";
import Square from "./Square";

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);


    const checkWinner = ()=>{
        const winnerLogic =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6],

            

        ];

        for(let logic of winnerLogic){
           const [a,b,c] = logic;
           if(state[a] !== null && state[a]=== state[b] && state[a] === state[c]){
            return state[a];
           }    
        }

        if (state.every((Square)=>Square!==null)){
            return "Draw";
        }
        return false;
    };
    const isWinner = checkWinner();

    const handleClick = (index) =>{
        if (state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);

    };
    const handleReset = () =>{
        setState(Array(9).fill(null));
    }

    return(

        <div className="board-container">
         { isWinner ? ( <>
         {isWinner === "Draw"?(
            <>It's a Draw!  </>
         ):(
            <><b>{isWinner} is the winner </b> <br></br><br></br>   </>
         )}
    
    
        <button type="button" class="btn btn-primary  my-2" onClick={handleReset}>Play Again </button> </> 
         ):(
         <> 
       
       <div className="container mx-10" >
         <h4>Player {isXTurn ? "X" : "O" } Please Move </h4>
         </div>
           
           <div className="container my-3" rows="8" >
         <div className="board-row">
            <Square onClick={()=> handleClick(0)} value={state[0]}/>
            <Square onClick={()=> handleClick(1)} value={state[1]}/>
            <Square onClick={()=> handleClick(2)} value={state[2]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=> handleClick(3)} value={state[3]}/>
            <Square onClick={()=> handleClick(4)} value={state[4]}/>
            <Square onClick={()=> handleClick(5)} value={state[5]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=> handleClick(6)} value={state[6]}/>
            <Square onClick={()=> handleClick(7)} value={state[7]}/>
            <Square onClick={()=> handleClick(8)} value={state[8]}/>
            </div>
            </div>
            </> )}

        </div>
    );
};

export default Board;