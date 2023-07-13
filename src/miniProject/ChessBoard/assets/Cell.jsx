/* eslint-disable react/prop-types */
function Cell({rowIdx, cellIdx, colorEven, colorOdd} ){
    return (
        <div style={{backgroundColor: (rowIdx + cellIdx) % 2 === 0 ? colorOdd : colorEven}} className="cell" ></div>
    )
}
export default Cell
