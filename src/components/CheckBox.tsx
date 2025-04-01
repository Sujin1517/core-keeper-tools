import "./css/checkBox.css";


const CheckBox = 
(props:{ defaultCheck?:boolean, labelText?:string, name?:string, onChange?:(name:string, e:boolean) => void }) => {
    const { defaultCheck=false, labelText="", name="", onChange=(name:string, e:boolean) => {console.log(name, e)} } = props;

    return (
        <label>
            {labelText}
            <input type="checkbox"
                defaultChecked={defaultCheck}
                onChange={(e) => onChange(name, e.target.checked)}
            />
        </label>
    );
}

export default CheckBox;