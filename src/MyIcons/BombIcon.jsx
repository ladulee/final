// eslint-disable-next-line react/prop-types
function BombIcon({size, style}){
    return(
        <svg className="anticon" style={style} xmlns="http://www.w3.org/2000/svg" width={size || 16} height={size || 16} viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="currentColor" d="M11.25 6a3.25 3.25 0 0 1 3.25-3.25A3.25 3.25 0 0 1 17.75 6c0 .42.33.75.75.75s.75-.33.75-.75v-.75h1.5V6a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 16.25 6a1.75 1.75 0 0 0-1.75-1.75A1.75 1.75 0 0 0 12.75 6H14v1.29c2.89.86 5 3.54 5 6.71a7 7 0 0 1-7 7a7 7 0 0 1-7-7c0-3.17 2.11-5.85 5-6.71V6h1.25M22 6h2v1h-2V6m-3-2V2h1v2h-1m1.91.38l1.42-1.42l.71.71l-1.42 1.42l-.71-.71Z"/></svg>
    )
}
export default BombIcon