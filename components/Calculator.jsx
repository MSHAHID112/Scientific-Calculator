import React from 'react'
import Inputfield from './Input'
import Button from './Button'



export default function Calculator() {
    return (
        <div className=' flex flex-col border mx-auto max-w-md'>
            <Inputfield />
            <div className="flex justify-between px-4 mt-3">
                <Button text="C" className='text-red-600 bg-red-200' />
                <Button text="/" className='bg-gray-100 text-black' />
                <Button text="*" className='bg-gray-100 text-black' />
                <Button text="X" className='bg-gray-100 text-black' />
            </div>
            <div className="flex justify-between px-4 mt-3">
                <Button text="7" className='bg-green-200 text-black' />
                <Button text="8" className='bg-green-200 text-black'/>
                <Button text="9" className='bg-green-200 text-black'/>
                <Button text="-" className='bg-gray-100 text-black'/>
            </div>
            <div className="flex justify-between px-4 mt-3">
                <Button text="4" className='bg-green-200 text-black' />
                <Button text="5" className='bg-green-200 text-black'/>
                <Button text="6" className='bg-green-200 text-black'/>
                <Button text="+" className='bg-gray-100 text-black'/>
            </div>
            <div className="flex justify-between px-4 mt-3">
                <Button text="1" className='bg-green-200 text-black' />
                <Button text="2" className='bg-green-200 text-black'/>
                <Button text="3" className='bg-green-200 text-black'/>
                <Button text="+" className='bg-gray-100 text-black'/>
            </div>
            <div className="flex justify-between px-4 mt-3">
                <Button text="(" className='bg-green-200 text-black' />
                <Button text="0" className='bg-green-200 text-black'/>
                <Button text=")" className='bg-green-200 text-black'/>
                <Button text="=" className='bg-gray-100 text-black'/>
            </div>
        </div>
    )
}
