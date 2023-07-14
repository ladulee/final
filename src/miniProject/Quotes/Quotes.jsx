// import { useEffect } from "react";
import { Carousel, Typography } from "antd";
const { Text } = Typography;

function Quotes() {
  //   async function getNewQuote() {
  //     const response = await fetch("http://localhost:3000/quote");
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   useEffect(() => {
  //     getNewQuote();
  //   }, []);
  const contentStyle = {
    height: "160px",
    lineHeight: "160px",
    textAlign: "center",
    fontSize: 18,
    fontFamily: 'sans-serif'
  
  };
  return (
    <Carousel autoplay style={{textAlign: 'center'}} autoplaySpeed={2000}>
      <div>
        <Text style={contentStyle} >
          "Act as if what you do makes a difference. It does."
        </Text>
        <img src="/quote.jpg" style={{width: 500, height: 500, margin: '0 auto'}} />
      </div>
      <div>
        <Text style={contentStyle} strong>
          "Believe you can and you're halfway there."
        </Text>
        <img src="/2.jpg" style={{width: 500, height: 500, margin: '0 auto'}} />
      </div>
      <div>
        <Text style={contentStyle} strong>
          "Life is like riding a bicycle. To keep your balance, you must keep
          moving."
        </Text>
        <img src="/3.jpg" style={{width: 500, height: 500, margin: '0 auto'}} />
      </div>
      <div>
        <Text style={contentStyle} strong>
          "You are never too old to set another goal or to dream a new dream."
        </Text>
        <img src="/4.jpg" style={{width: 500, height: 500, margin: '0 auto'}} />
      </div>
      <div>
        <Text style={contentStyle} strong>
            "It is never too late to be what you might have been."
        </Text>
        <img src="/5.jpg" style={{width: 500, height: 500, margin: '0 auto'}} />
      </div>
    </Carousel>
  );
}
export default Quotes;
