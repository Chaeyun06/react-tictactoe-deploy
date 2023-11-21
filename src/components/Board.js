//snippet extends를 사용하여 rcc 단축키로 간편하게 컴포넌트 생성 가능
import Square from './Square'
import "./Board.css"

const Board = ({squares,onClick}) => {

  const renderSquare = (i) => {
    return <Square
      value={squares[i]}
      onClick={() => onClick(i)}/>
  }
  
  return (
    <div className='board-wrapper'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
