import {useState, useEffect} from 'react'
import './App.css'
import Cell from './assets/Cell'
import {Input} from "antd"

function ChessBoard() {
  const[chessBoard, setChessBoard] = useState([])
  const [size, setSize] = useState(0)
  const [color, setColor] = useState({colorOdd:'rgb(25, 148, 219)', colorEven:'rgb(250, 245, 248)'})
  
  useEffect(() => {
    let board = [];
    for (let i = 0; i < size; i++) {
      let row = Array.from({ length: size });
      board.push(row);
    }
    setChessBoard(board);
  }, [size]);
  
  function changeColor(){
    const tempOdd=color.colorOdd;
    const tempEven=color.colorEven;
    setColor({colorOdd: tempEven, colorEven: tempOdd} )
  }
  return (
    <>
      <label style={{width: 50, transform: 'translateY(0px)'}}>Size: </label>
      <Input type="number" style={{width: 100}} min="0" value={size} onChange={(e)=>setSize(e.target.value)} />
      
      <br/>
      <br/>
      
      <div className="board" onClick={changeColor}>
      {
      chessBoard.map( (row, rowIdx) => (
          <div key={rowIdx} className="row ">
            {row.map( (_, cellIdx) => (<Cell key={cellIdx} className={`cell ${(rowIdx + cellIdx) % 2 == 0 ? "" : "black"}`} rowIdx={rowIdx} cellIdx={cellIdx} colorEven={color.colorEven} colorOdd={color.colorOdd}  />)
            )}  
          </div>
        )
      )}
      </div>
      
      <br/>
      <br/>

      <input type="color" value={color.colorOdd} onChange={(e) => setColor({...color,colorOdd:e.target.value})} />
      <input type="color"  value={color.colorEven} onChange={(e) => setColor({...color,colorEven:e.target.value})}/>
      
    </>

  )
}
export default ChessBoard
