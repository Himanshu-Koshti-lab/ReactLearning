import { useState } from 'react'

import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <p>Hello React {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click Here</button>
      <br /><br />
      <MyButton />
      <br /><br />
      <button className='avatarButton'>Hello</button>
    </div>
  )
}

export default App
