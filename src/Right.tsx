import { Button, Empty } from "antd"
import { generate } from 'random-words'
import { useStore } from "./store"

const ListAddress = () => {
  const [address] = useStore(state => [state.address])


  if (address.length === 0) {
    return <Empty />
  }

  return (
    <ul>
      {address.map((item) => (
        <li key={[item.street, item.city].join('-')}>
          <span>{item.street}</span>
          <span> - </span>
          <span>{item.city}</span>
        </li>
      ))}
    </ul>
  )
}

const AddressAction = () => {
  const [addAddress] = useStore(state => [state.addAddress]);

  const handleAdd = () => {
    const street = generate(1) as string;
    const city = generate(1) as string;
    console.log(street, city)
    addAddress({ street, city })
  }


  return (
    <div>
      <Button onClick={handleAdd}>
        添加地址
      </Button>
    </div>
  )

}

const Right = () => {

  return (
    <div>
      <h3>Right</h3>
      <AddressAction />
      <br />
      <hr />
      <ListAddress />
    </div>
  )
}


export default Right;