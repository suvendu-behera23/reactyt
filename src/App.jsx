import React, { useState } from 'react'
const App = () => {
    const [username, setUsername] = useState('');
    const submitHandler=(e)=>{
      e.preventDefault()
      console.log(username);
    }
  return (
    <div>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }}>
      <input onChange={(e)=>{
        setUsername(e.target.value);  
      }}
      className="px-4 rounded py-3 text-xl m-5" 
      type="text" 
      value={username}
      placeholder='Enter your name' />
      <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
     </form>
    </div>
  );
};
export default App
