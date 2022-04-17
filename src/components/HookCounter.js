import React, {useState} from 'react'

const HookCounter = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count=> count + 1)}>Counter</button>
    <button onClick={()=>setCount(count=> count - 1)}> Reduce counter</button>
    </div>
  )
}

export default HookCounter