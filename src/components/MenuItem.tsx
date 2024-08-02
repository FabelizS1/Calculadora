import type {  MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void    // Si aparece asi addItem?: (item: MenuItem) => void       esto addItem? quiere decir que es opcional
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
      <button 
        className=' border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg  rounded-lg flex justify-between w-full'
        onClick={() => addItem(item)}
      > 
          <p>{item.name}</p> 
          <p className='font-black'>${item.price}</p>
      </button>
  )
}
