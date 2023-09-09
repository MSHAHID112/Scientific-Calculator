import React, { useState } from 'react'
export default function Input(props) {
    return (
        <>
            <div name="inputfield" id="inputfield" className='h-[150px] w-[95%] flex items-end mx-auto px-2  overflow-x-auto text-2xl m-2 border-2 border-gray-300 rounded-xl overflow-hidden text-white pb-3'>{props.string}</div>

        </>
    )
}
