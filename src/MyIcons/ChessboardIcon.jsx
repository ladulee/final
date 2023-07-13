/* eslint-disable react/prop-types */
function ChessboardIcon({size, style}) {
  return(
    <svg className='anticon' style={style} xmlns="http://www.w3.org/2000/svg" width={size || 16} height={size || 16} viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 6h-4v4h4v4h-4v4h-4v-4H8v4H4v-4h4v-4H4V8h4V4h4v4h4V4h4v4z"/><path fill="currentColor" d="M8 8h4v4H8zm4 4h4v4h-4z"/></svg>
  );
  
}
export default ChessboardIcon;
