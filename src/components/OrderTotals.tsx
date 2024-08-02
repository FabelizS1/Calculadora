import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {



    //En este reduce se agrega el total y el item
    //useMemo(()=> order.reduce((total, item) => total + (item.quantity * item.price)) , [order])
    //useMemo(() => subtotalAmount + tipAmount, [tip, order]) 
    //Tambien se usa useCallback
    //Cuando se usa useCallback se usan parentesis asi   subtotalAmount() + tipAmount()
    //useMemo y useCallback hacen lo mismo solo cambia la sintaxis

    /*

        Donde deshabilita el boton solo si es cero    disabled={totalAmount() === 0}

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
                disabled={totalAmount() === 0}

    */



    const subtotalAmount = useCallback(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ) , [order])
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order]) // Este es el total del valor

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subtotalAmount()) }</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{ formatCurrency(tipAmount()) }</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-bold">{ formatCurrency(totalAmount()) }</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
                disabled={totalAmount() === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
