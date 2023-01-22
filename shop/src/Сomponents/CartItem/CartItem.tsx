import React from 'react'
import { useState, useEffect } from 'react';

interface Items {
    id: number,
    name: string,
    cost: number,
    color: string,
    description: string,
    category: string,
    memory: number,
    screenSize: number,
    screenResolution: string,
    cpu: string,
    screenType: string,
    frontFacingCamera?: number,
    image: string,
    image2: string,
    image3: string
  }

type ItemProps = {
    deleteFromCart: (id: number) => void
    item: {
        id: number,
        name: string,
        cost: number,
        color: string,
        description: string,
        category: string,
        memory: number,
        screenSize: number,
        screenResolution: string,
        cpu: string,
        screenType: string,
        frontFacingCamera?: number,
        image: string,
        image2: string,
        image3: string
    }
    totalCost: () => void
    allOrders: Items[]
    setAllOrders: (el: Items[]) => void
}
function CartItem({item, deleteFromCart, totalCost, allOrders, setAllOrders}: ItemProps) {
    const [counterValue, setCounterValue] = useState(1)

    const increase = () => {
        setCounterValue(counterValue + 1)
        if(counterValue >= 1) {
            setAllOrders([...allOrders, item])
        }
    }

    const decrease = () => {
        if(counterValue > 0) {
            setCounterValue(counterValue - 1)
            let index = allOrders.findIndex(el => el.id === item.id)
            allOrders.splice(index, 1)
            setAllOrders([...allOrders])
        } else {
            return counterValue
        }
    }

    if(counterValue === 0) {
        deleteFromCart(item.id)
    } 

    return (
        <div className='card-item'>
            <img src={item.image} alt={item.name}/>
            <div className='card-item-info'>
                <h3>{item.name}</h3>
                <div className='card-item-price'>
                    <div className='card-counter'>
                        <div className='card-counter-minus' onClick={decrease}>-</div>
                        <div className='card-counter-amount'>{counterValue}</div>
                        <div className='card-counter-plus' onClick={increase}>+</div>
                    </div>
                    <b>{item.cost}$</b>
                </div>
            </div>
        </div>
    )
}

export default CartItem