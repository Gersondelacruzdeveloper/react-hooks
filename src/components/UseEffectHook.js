import React, {useState, useEffect} from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = count;
    },[count]);

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count=> count + 1)}>Counter</button>
    <button onClick={()=>setCount(count=> count - 1)}> Reduce counter</button>
    
    </div>
  )
}

export default UseEffectHook