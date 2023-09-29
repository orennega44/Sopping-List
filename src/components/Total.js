
export default function Total({ item }) {


    if (!item.length) return (
  
      <p className='footer'>{"lets get started!  🛍️"}</p>
  
    )
  
  
    const itemPacked = item.filter((item) => item.packed).length
  
    const numItem = item.length
  
    if (numItem === itemPacked) return (<p className='footer'>You go them all,lets go pay 💰</p>)
  
    return (<p className='footer'>{`You have ${numItem} items in your list and (${itemPacked}) items in your cart 💸 `}</p>)
  
  
  }
  