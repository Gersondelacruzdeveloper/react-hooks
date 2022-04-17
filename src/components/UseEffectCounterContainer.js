import React, {useState}from 'react'
import UseEffectHookOnce from './UseEffectHookOnce'

const UseEffectCounterContainer = () => {
    const [display, setDisplay ] = useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>togle timer</button>
        {display && <UseEffectHookOnce/>}
    </div>
  )
}

export default UseEffectCounterContainer