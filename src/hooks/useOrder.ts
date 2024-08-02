import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Con useState<OrderItem[]> Se coloca el tipo de dato esto es con Generic
    //const [total, setTotal] = useState<number>(0)
    const [tip, setTip] = useState(0)  // Para la propina


    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist) {
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1 } : 
                orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem  = {...item, quantity: 1}  // Copio todo lo de item y le agrego quantity, tambien puede ser const newItem : OrderItem  = {...item, quantity: 1}
            setOrder([...order, newItem])    // Aqui se agrega el valor de OrderItem mas el nuevo valor
        }
    }

    const removeItem = (id: MenuItem['id']) => {  // Donde id: MenuItem['id']   es un tipo look up
        setOrder(order.filter( item => item.id !== id ))// Selecciona todos los id diferentes al id seleccionado
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}