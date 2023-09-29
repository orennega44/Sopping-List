 import Button from "./Button"
 
 
 export default function InputList({ onDeleteItem, onMarkItem, item }) {

    return (
      <div className='list'>
  
        <ul>
          {item.map(item => <Input onDeleteItem={onDeleteItem} onMarkItem={onMarkItem} item={item} key={item.id} />)}
        </ul>
  
      </div>
    )
  
  }
  
  function Input({ onMarkItem, onDeleteItem, item }) {
  
    return (
      <li className='item'>
        
        <input type='checkbox'
          onClick={() => onMarkItem(item.id)}
          id={item.id} />
  
        <span style={item.packed ? { textDecoration: "line-through" } : {}} >
          {item.pro} {item.sele}
        </span>
  
        <Button>
          <span onClick={() => onDeleteItem(item.id)} id={item.id}>❌
          </span>
        </Button>
      </li>
    )
  
  }