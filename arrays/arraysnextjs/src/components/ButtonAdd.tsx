interface ButtonAddProps {
  children: any
  event: () => void
}

export default function ButtonAdd(props:ButtonAddProps) {
  return (
    <div>
      <button onClick={props.event} className={`
        border-2 border-green-500 flex items-center justify-center text-green-500
        hover:bg-green-500 hover:text-white
        transition-colors
        p-5 text-xl rounded-xl cursor-pointer`}>
        {props.children}
      </button>
    </div>
  )
}