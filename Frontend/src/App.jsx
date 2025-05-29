import { useState , useEffect} from 'react'
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/componets/prism-jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    prism.highlightAll()
  })
  return (
    <>
    <main>
      <div className='left'>
        <div className="code">
          <div className="review">
            Review
          </div>
        </div>
      </div>
      <div className='right'></div>
    </main>
    </>
  )
}

export default App
