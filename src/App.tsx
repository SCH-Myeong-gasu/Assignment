import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>본좌 이승희</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          나는 개똥벌래~{count}
        </button>
        <p>
          지금 나는 짜빠게티가 먹고싶다.
        </p>
      </div>
      <p className="read-the-docs">
        대충 쓸꺼 없어서 아무거나 써보는 중
      </p>
    </>
  )
}

export default App
