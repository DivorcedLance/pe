/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useState } from 'react'

export function Button() {
  const { color, setColor } = useState('black')
  const { colorIndex, setColorIndex } = useState(0)
  const { colorList, setColorList } = useState([
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'black',
    'white',
    'pink',
    'brown',
    'gray',
    'cyan',
    'magenta',
    'lime',
    'teal',
    'indigo',
    'violet',
    'navy',
    'maroon',
    'olive',
    'aqua',
    'silver',
    'limegreen',
    'skyblue',
    'tan',
    'lightgray',
    'darkgray',
    'gold',
    'coral',
    'salmon',
    'lightcoral',
    'darkcoral',
    'lightpink',
    'darkpink',
    'lightgreen',
    'darkgreen',
    'lightblue',
    'darkblue',
    'lightyellow',
    'darkyellow',
    'lightpurple',
    'darkpurple',
    'lightorange',
    'darkorange',
    'lightbrown',
    'darkbrown',
    'lightcyan',
    'darkcyan',
    'lightmagenta',
    'darkmagenta',
    'lightlime',
    'darklime',
    'lightteal',
    'darkteal',
    'lightindigo',
    'darkindigo',
    'lightviolet',
    'darkviolet',
    'lightnavy',
    'darknavy',
    'lightmaroon',
    'darkmaroon',
    'lightolive',
    'darkolive',
    'lightaqua',
    'darkaqua',
    'lightsilver',
    'darksilver',
    'lighttan',
    'darktan',
    'lightgold',
    'darkgold',
    'lightsalmon',
    'darksalmon',
    'lightlimegreen',
    'darklimegreen',
    'lightskyblue',
    'darkskyblue',
  ])

  useEffect(() => {
    setColor(colorList[colorIndex])
  }, [colorIndex, colorList, setColor])

  const changeColor = () => {
    if (colorIndex === colorList.length - 1) {
      setColorIndex(0)
    } else {
      setColorIndex(colorIndex + 1)
    }
  }

  return (
    <button
      onClick={changeColor}
      style={{ backgroundColor: color, borderRadius: '20px', color: 'black' }}
    >
      Press
    </button>
  )
}
