import { useEffect, useState } from "react"
import ArrayClass from "../model/ArrayClass"

export default function useArrays() {
  const [value, setValue] = useState<string>('')
  const [arrayObj, setarrayObj] = useState<ArrayClass>()
  const [items, setItems] = useState<string[]>()

  useEffect(() => {
    setarrayObj(new ArrayClass([]))
  }, [])

  useEffect(() => {
    setItems(arrayObj?.getAll())
  }, [arrayObj])

  function addItemTest() {
    if (value?.trim().length == 0) {
      return 'null'
    }
    return value
  }
  function push() {
    setarrayObj(arrayObj?.push(addItemTest()))
    setItems(arrayObj?.getAll())
    setValue('')
  }

  function unshift() {
    setarrayObj(arrayObj?.unshift(addItemTest()))
    setItems(arrayObj?.getAll())
    setValue('')
  }

  function pop() {
    setarrayObj(arrayObj?.pop())
    setItems(arrayObj?.getAll())
  }

  function shift() {
    setarrayObj(arrayObj?.shift())
    setItems(arrayObj?.getAll())
  }

  return {
    shift,
    items,
    pop,
    value,
    setValue,
    unshift,
    push
  }
}