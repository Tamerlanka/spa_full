import React from 'react'
import Item from './Item'

const CardItem = (props) => {
  // получаем данные о турах через пропсы из App.jsx
  return (
    <div>
      {props.item.map((obj) => {
        return (
          // передаем данные о турах в Item в виде свойств
          <Item
            key={obj.id}
            id={obj.id}
            myId={obj.myId}
            title={obj.title}
            description={obj.description}
            price={obj.price}
            img={obj.img}
          />
        )
      })}
    </div>
  )
}
export default CardItem
