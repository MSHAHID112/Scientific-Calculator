'use client'
import { useState } from 'react';
import Calculator from '../../components/Calculator'
export default function Home() {

	const [displyString, setdisplyString] = useState("");
	const setString = (string) => {
		setdisplyString(string)
	}
	return (
		<div className="bg-black">
			<div className="text-3xl text-white flex justify-center" >
				<h2 className=''>Scientific Calculator</h2>
			</div>
			<Calculator string={displyString} setString={setString} />
		</div>
	);
}
