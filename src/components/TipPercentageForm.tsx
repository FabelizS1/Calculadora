import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>, // si se hace un impor de React      import type { Dispatch } from "react"      y se pone asi        setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

/*

      label aqui el valor de htmlFor que es {tipOption.id} se conecta con id={tipOption.id} de input
      <label htmlFor={tipOption.id}>{tipOption.label}</label>
      <input
          id={tipOption.id}


      value={tipOption.value}    es el valor del input
      Para que los radio no se seleccionen todos al input hay que agregarle name="tip" es decir el mismo nombre para todos


      onChange={ e => setTip(+e.target.value)}   sele coloca un + para convertirlo en numero


      Donde aqui se hace la validaciony solo va a ser checked si en value es igual al tip
      checked={tipOption.value === tip}

*/

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={ e => setTip(+e.target.value)}
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
