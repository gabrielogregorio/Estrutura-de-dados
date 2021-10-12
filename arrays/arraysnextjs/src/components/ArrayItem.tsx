interface ArrayItemProps {
  value: string
  color: string
  index:number
}

export default function ArrayItem(props: ArrayItemProps) {
  return (
    <div className={`flex items-center justify-center flex-col border-2 border-blue-300 p-2`}>
      <p>{props.value}</p>
      <span>{props.index}</span>
    </div>
  )

}