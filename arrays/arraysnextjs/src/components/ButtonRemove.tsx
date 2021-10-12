interface ButtonRemoveProps {
  children: any
  event: () => void
}

export default function ButtonRemove(props:ButtonRemoveProps) {
  return (
    <button onClick={props.event} className="
      p-5 text-xl rounded-xl cursor-pointer flex items-center justify-center
      border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
      {props.children}
    </button>
  )
}