import React, {useState} from 'react'

const UseStateWidthObjects = () => {
    const [name, setName] = useState({firstName: '', lastName: '' });

  return (

    <div>
      <form>
          <input 
          type="text" 
          placeholder="First Name"
          value={name.firstName}
          onChange={(e)=>setName({...name, firstName: e.target.value})}
        />
          <input 
          type="text" 
          placeholder="Last Name" 
          value={name.lastName}
          onChange={(e)=>setName({...name, lastName: e.target.value})}
          />
          <h2>{JSON.stringify(name)}</h2>
      </form>
        
    </div>
  )
}

export default UseStateWidthObjects
