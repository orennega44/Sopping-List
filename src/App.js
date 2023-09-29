import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import InputForm from './components/InportForm';
import InputList from './components/InputList';
import Total from './components/Total';



function App() {

  const [items, setItem] = useState([])


  function heandleItem(item) {

    //מוסיף את האייטמס למערך קיים (לרשימה)
    setItem((items) => [...items, item])

  }
  //ID מסמן מוצר אשר נבחר על פי  
  function heandleMarkItem(id) {
    setItem(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  // ID מוחק מוצר על פי סימון 
  function heandleDeleteItem(id) {
    setItem(item => item.filter(item => item.id !== id))
  }


  return (
    <div>

      <Logo />

      <InputForm onAddItem={heandleItem} />

      <InputList
        onDeleteItem={heandleDeleteItem}
        onMarkItem={heandleMarkItem}
        item={items}
      />

      <Total item={items} />

    </div>
  );
}


export default App;
