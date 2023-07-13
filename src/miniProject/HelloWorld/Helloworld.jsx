/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {Input} from 'antd'

function HelloWorld(){
    const [value, setValue] = useState("");
    return(
        <div>
            <div>
                <label>Nhập: </label>
                <Input type="text" style={{transform: 'translateY(8px)', width: 200}} onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <br/>
            <div>{value}</div>
        </div>
    )
}
export default HelloWorld;