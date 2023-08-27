import React from 'react'
import { useContext } from 'react'

export default function Button(props) {
    return (
        <button className={`max-h-20 w-1/5 max-w-20 text-2xl rounded-full bg-black text-white aspect-square ${props.className}`} id={props.text} name={props.text}>{props.text}</button>
    )
}
