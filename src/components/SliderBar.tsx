import "./css/sliderBar.css";
import { useState } from "react";

const SliderBar = (props:{value:number, min:number, max:number}) => {
    const { value, min, max } = props
    const [ sliderValue, setSliderValue ] = useState<number>(value);

    return (
        <div className="sliderBarContainer">
            <input
                type="number"
                value={sliderValue}
                min={min} max={max}
                onChange={(e) => {
                    setSliderValue(e.target.valueAsNumber);
                }}
            />
            <input
                type="range"
                value={sliderValue}
                min={min} max={max}
                step={1}
                onChange={(e) => {
                    setSliderValue(e.target.valueAsNumber);
                }}
            />
        </div>
    );
}

export default SliderBar;