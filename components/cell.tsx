import { Dispatch, SetStateAction } from "react";

type CellProps ={
    go :string;
    setGo : Dispatch<SetStateAction<string>>;
    id : number;
    cells : string[];
    setCells:Dispatch<SetStateAction<string[]>>;
    cell:string;
    winningMessage: string;
}
 
const Cell = ({go , setGo , id, cells , setCells , cell , winningMessage} : CellProps) => {
   const handleCellChange = (cellToChange : string) => {
     if (winningMessage){
        return;
     }
    
   
    let copyCells = [...cells];
     copyCells[id] = cellToChange;
     setCells(copyCells)
   };

    const handleClick = () => {
    
    const taken = !!cells[id];
    if (!taken){
        if (go === 'circle'){
            handleCellChange('circle');
            setGo('cross');
    } else if (go === 'cross'){
        handleCellChange('cross');
        setGo('circle');
    }
    }
   
    
   }

    return <div className = 'square' onClick={ handleClick}>
       <div className= {cell}> {cell ? (cell === 'circle' ? 'O' : 'X') : '' }</div>
    </div>

}

export default Cell;