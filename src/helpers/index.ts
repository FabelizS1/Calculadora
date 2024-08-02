export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(quantity)  // Agregar formato y seria en Intl.NumberFormat('en-US'   en ingles 
}

// Este formato pone el $ al final del monto 20$
//Esta funcion formatea el monto
