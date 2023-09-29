import { useState } from "react"
import Button from "./Button"

export default function InputForm({ onAddItem }) {

    const [pro, setPro] = useState("")
    const [sele, setSelect] = useState(1)
  
    const heandleSubmit = (e) => {
  
      e.preventDefault()
  
  
      if (!pro) return;
  
      const newPro = { pro, sele, id: Date.now(), packed: false, }
  
      onAddItem(newPro)
  
      setPro("")
      setSelect(1)
  
    }
  
  
    return (
      <form className='form' onSubmit={heandleSubmit}>
  
        <label><h5>Add product:</h5></label>
  
        <input type='text' value={pro} placeholder='Add Item...' onChange={(e) => setPro(e.target.value)} />
  
        <h5>How many?</h5>
  
        <select value={sele} onChange={(e) => setSelect(Number(e.target.value))}>
  
          {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option key={num} value={num}>{num}</option>)}
  
        </select>
  
        <Button>Add</Button>
  
      </form>
  
    )
  
  }