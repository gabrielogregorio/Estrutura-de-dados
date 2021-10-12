import ButtonAdd from "../components/ButtonAdd";
import ButtonRemove from "../components/ButtonRemove";
import Array from "../components/Array";
import { IconRemove, IconLeft, IconRigth } from '../components/Icon'
import Input from "../components/Input";
import useArrays from "../hooks/useArrays";

export default function Home() {
  const { shift, items, pop, value, setValue, unshift, push } = useArrays()

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-4xl py-5">Estrutura de listas simples</h1>
      <div className="flex justify-between w-2/3">
        <ButtonRemove event={() => shift()}>{IconRemove} shift</ButtonRemove>
        <Array items={items} />
        <ButtonRemove event={() => pop()}>pop {IconRemove}</ButtonRemove>
      </div>

      <div className="flex mt-4 justify-between  w-2/3">
        <ButtonAdd event={() => unshift()}>{IconLeft} unshift</ButtonAdd>        
        <Input value={value} setValue={e => setValue(e.target.value)} />
        <ButtonAdd event={() => push()}>push {IconRigth}</ButtonAdd>
      </div>
    </div>
  )
}
