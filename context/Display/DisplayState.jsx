import DisplayContext from './displayContext';
import { useState } from 'react';
const DisplayState = (props) => {

    const [displayString, setDisplayString] = useState("")

    handleOnclick = (e) => {
        setDisplayString(displayString + e.target.value)
    }

    return (
        <DisplayContext.Provider value={{ displayString,setDisplayString }}>
            {props.children}
        </DisplayContext.Provider>
    );
};

export default DisplayState