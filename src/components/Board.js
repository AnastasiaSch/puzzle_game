
import React, { useState } from 'react'
import { Winner } from './Winner'

export const Board = () => {  
  
const [rows, setRows] = useState(4)

const mixing = () => 
    Array.from(Array(rows * rows).keys()) 
    .sort(() => Math.random() -.5) 
    .map((x, i) => ({value: x + 1, index: i}))    

const [numbers, setNumbers] = useState(mixing())
const [animating, setAnimating] = useState(false)

const moveItems = e => { 
    let zeroIndex = numbers.find(el => el.value === (rows * rows)).index
    let indexOfElement = numbers.find(el => el.value === Number(e.target.innerHTML)).index
    let zeroValue = numbers.find(el => el.value === (rows * rows)).value
    let valueOfElement = numbers.find(el => el.value === Number(e.target.innerHTML)).value

    if (e.target.innerHTML === zeroValue) return  
    if (![zeroIndex - 1, zeroIndex + 1, zeroIndex - rows, zeroIndex + rows].includes(indexOfElement)) return

    let newNumbers = [...numbers]
    newNumbers[zeroIndex] = {...newNumbers[zeroIndex], value: valueOfElement}
    newNumbers[indexOfElement] = {...newNumbers[indexOfElement], value: (rows * rows)}

    setNumbers(newNumbers)
}

return (<div className="game">
    <div className='grid-container' style={{gridTemplateColumns: `repeat(${rows}, 70px)`, gridTemplateRows: `repeat(${rows}, 70px)`}}>
    {numbers.map(x => <div className={`items ${x.value === rows * rows ? 'white' : 'black'}`} key={x.value} onClick={moveItems}>{x.value}</div>)}
    </div>
    <Winner numbers={numbers}/>
</div>
)
}
