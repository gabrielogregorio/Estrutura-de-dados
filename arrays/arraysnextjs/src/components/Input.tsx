interface InputProps {
  value: string
  setValue: (e) => any
}

export default function Input(props:InputProps) {
  return (
    <div className="h-full">
      <input type="text" className="h-full p-2 rounded-xl mx-2 focus:outline-none text-xl border-2 border-green-500" value={props.value} onChange={props.setValue} />
    </div>
  )
}