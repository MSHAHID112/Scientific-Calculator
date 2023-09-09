'use client'
import { useState } from 'react';
import Calculator from '../../components/Calculator'
export default function Home() {

	const [displyString, setdisplyString] = useState("");
	const setString = (string) => {
		setdisplyString(string)
	}

	// const [primaryColor, setPrimaryColor] = useState('#065c1d')
	// const [secondaryColor, setSecondaryColor] = useState()

	// const [btnRound, setBtnRounded] = useState('full')

	// const handleOnChange = (e) => {
	// 	console.log((e.target.value.substr(0, 7)))
	// 	setPrimaryColor((e.target.value).substr(0, 7))
	// 	// setPrimaryColor('#470520')
	// }

	return (

		<>
			{/* <input type="color" name="" id="" onChange={handleOnChange} /> */}
			{/* <button className={`bg-[${primaryColor}] `}>adf adsfadsf</button> */}
			<div className="bg-black">
				<div className="text-3xl text-white flex justify-center" >
					<h2 className=''>Scientific Calculator</h2>
				</div>
				<Calculator btnRounded={btnRound} string={displyString} setString={setString} />
			</div>
		</>
	);
}
