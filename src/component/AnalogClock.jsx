import { useEffect, useRef, useState } from 'react';
import '../styles/AnalogClock.css';

const AnalogClock = ({speed}) => {
  const [time, setTime] = useState(new Date());
 const[data,setData]=useState([]);
 const[quoteIndex,setQuoteIndex]=useState(0);
  const intervalRef = useRef(null);
  const endTime = useRef(null);
 const intervalRefNew= useRef(null);
   useEffect(() => {
    
     const currentEndTime=new Date();
     
      currentEndTime.setMinutes(currentEndTime.getMinutes() - 120);
      endTime.current = currentEndTime;
     console.log('End time set to:', endTime.current);

     
     intervalRef.current = setInterval(() => {
       setTime((prevTime) => {
         const newTime = new Date(prevTime.getTime() - speed* 1000);
         console.log('New time:', newTime);

   
         if (newTime <= endTime.current) {
           clearInterval(intervalRef.current);
           console.log('Clock stopped at:', newTime);
           return endTime.current;
         }

         return newTime;
       });
     }, 1000);

    
     return () => clearInterval(intervalRef.current);
   }, [speed]);


   useEffect(()=>{
    const fetchQuote=async()=>{
try {
  const response = await fetch('https://dummyjson.com/quotes');
  if(!response.ok){
    throw new Error('Failed to fetch quote');
  }
  const data=await response.json();
  setData(data.quotes);

} catch (error) {
  console.Error('Error while fetching quote:', error);
}
    };
    fetchQuote();

    intervalRefNew.current = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % data.length);
    }, 5000);
return () => clearInterval(intervalRefNew.current);
   },[data.length])


  return (
    <div className='clock-quote-wrapper'>
      <div className='clock'>
        <div
          className='hour_hand'
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
        />
        <div
          className='min_hand'
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className='sec_hand'
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
        />
        <span className='twelve'>12</span>
        <span className='one'>1</span>
        <span className='two'>2</span>
        <span className='three'>3</span>
        <span className='four'>4</span>
        <span className='five'>5</span>
        <span className='six'>6</span>
        <span className='seven'>7</span>
        <span className='eight'>8</span>
        <span className='nine'>9</span>
        <span className='ten'>10</span>
        <span className='eleven'>11</span>
      </div>

      <div className='quote'>
        <div>{data.length > 0 && <span>{data[quoteIndex].quote}</span>}</div>
      </div>
    </div>
  );
};

export default AnalogClock;


