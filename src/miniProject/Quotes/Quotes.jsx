import { useEffect } from "react";

function Quotes(){
    
    async function getNewQuote() {
        const response = await fetch('http://localhost:3000/quote');
        const data = await response.json();
        console.log(data);
    }
      useEffect(()=>{
        getNewQuote()
    },[])
    return(

        <div>
            hiiii
        </div>
    )
}
export default Quotes