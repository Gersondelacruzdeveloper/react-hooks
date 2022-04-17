import React, {useState, useEffect} from 'react'

const UseEffectHookOnce = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(()=>{
        document.title = count;
    },[count]);

    useEffect(()=>{
        console.log('creating timer')
        const interval = setInterval(() => {
          console.log('interval executed')
            setTime(time => time + 1)
        }, 1000);
        return ()=>{
          clearInterval(interval)
        }

    },[])

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count=> count + 1)}>Counter</button>
    <button onClick={()=>setCount(count=> count - 1)}> Reduce counter</button>
    <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectHookOnce