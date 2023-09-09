import React, { useState } from 'react'
export default function Input(props) {
    return (
        <>
            <div name="inputfield" id="inputfield" className='h-[150px] w-full mx-3 flex items-end ml-auto px-2  overflow-x-auto text-2xl' >{props.string}</div>

        </>
    )
}
