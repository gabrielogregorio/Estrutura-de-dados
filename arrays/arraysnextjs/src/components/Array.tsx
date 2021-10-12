import ArrayItem from "./ArrayItem"

interface ArrayProps {
  items: string[]
}

export default function Array(props: ArrayProps) {
  function renderItems() {
    return props.items?.map((item, i) => <ArrayItem key={`${item} - ${i}`} index={i} color="bg-blue-800" value={item}/>
    )
  }
  return (
    <div className={`flex mx-1`}>
      {renderItems()}
    </div>
  )
}