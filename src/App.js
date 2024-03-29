import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import Delete from './Delete'

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock key={i} color={color} />
        )
    })

    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }
    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
            <Delete />
        </div>
    )
}


export default App;
