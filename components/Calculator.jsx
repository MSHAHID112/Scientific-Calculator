import React from 'react'
import Inputfield from './Input'
import Button from './Button'



export default function Calculator(props) {

    const handleOnclick = (e) => {
        console.log(props.string)
        if (e.target.textContent === 'C') return props.setString('')
        else if (e.target.textContent === 'X') return props.setString(props.string.substr(0, props.string.length - 1))
        else if (e.target.textContent === '=') return props.setString(eval(props.string))
        props.setString(props.string + e.target.textContent)
    }

    return (
        <div className=' flex flex-col mx-auto max-w-md bg-gray-300/50 sm:rounded-2xl my-5'>
            <Inputfield string={props.string} />
            <div className="flex justify-between px-4 mt-3">
                <Button text="C" name="C" className={`text-red-700 bg-red-200 rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="/" name="/" className={`bg-gray-400 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="*" name="*" className={`bg-gray-400 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="X" name="X" className={`bg-gray-400 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
            </div>
            <div className="flex justify-between px-4 mt-3">
                <Button text="7" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="8" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="9" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="-" className={`bg-gray-400 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
            </div>
            <div className="flex justify-between px-4 mt-3">
                <Button text="4" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="5" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="6" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="+" className={`bg-gray-400 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
            </div>
            <div className="flex justify-between px-4 mt-3">
                <Button text="1" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="2" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="3" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="." className={`bg-gray-400 text-black rounded-${props.btnRounded}`}onClick={handleOnclick} />
            </div>
            <div className="flex justify-between px-4 mt-3">
                <Button text="(" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="0" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text=")" className={`bg-green-600 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
                <Button text="=" className={`bg-gray-400 text-black rounded-${props.btnRounded}`} onClick={handleOnclick} />
            </div>
        </div>
    )
}
