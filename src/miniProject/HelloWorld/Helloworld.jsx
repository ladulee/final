/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {Input, Checkbox} from 'antd'

function HelloWorld(){
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState(false);
    
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return(
        <div>
            <div style={{marginTop: 10}}>
                <label>Nhập: </label>
                <Input type="text" style={{transform: 'translateY(8px)', width: 200, marginRight: 20}} onChange={onChange}/>
                <Checkbox style={{ width: 100}} checked={checked} onChange={(e) => setChecked(e.target.checked)}>Viết hoa</Checkbox>
            </div>
            <br/>
            <br/>
            <div>
            Từ vừa nhập: <span style={{textTransform: checked?'uppercase':'none'}}>{value}</span>
            </div>
        </div>
    )
}
export default HelloWorld;