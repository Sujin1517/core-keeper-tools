import "./css/checkBox.css";

const CheckBox = (props:{defaultCheck?:boolean, labelText?:string} = { defaultCheck: false, labelText: "" }) => {
    const { defaultCheck, labelText } = props;

    return (
        <label>
            {labelText}
            <input type="checkbox"
                checked={defaultCheck}
                onChange={(e) => {console.log(e.target.checked)}}
            />
        </label>
    );
}

export default CheckBox;