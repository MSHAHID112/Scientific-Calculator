'use client'
import React, { useState } from 'react'
import { useContext } from 'react'
import  CalculatorContext  from '../context/Display/displayContext'
export default function Input() {

    // const test = useContext(CalculatorContext);
    // const { displayString } = test;

    return (
        <>
        <input type="text" disabled name="inputfield" id="inputfield" className='h-[100px]' />
        displayString
        </>

    )
}
