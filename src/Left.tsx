import { Button } from "antd";
import { generate } from 'random-words'
import { useStore } from "./store";
import isEqual from 'fast-deep-equal'

const ShowName = () => {
  const [name] = useStore(state => [state.name])

  return (
    <span>名字：{name}</span>
  )
}


const Left = () => {
  const [setName] = useStore(state => [state.setName], isEqual)

  const handleClick = () => {
    setName((generate(2) as string[]).join("-"))
  }

  return (
    <div>
      <h3>Left</h3>
      <ShowName />
      <br />
      <Button type="primary" onClick={handleClick}>
        随机名字
      </Button>
    </div>
  )

}


export default Left;