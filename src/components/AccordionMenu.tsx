import { ReactElement, useState } from "react";
import FoldArrow from "./FoldArrow.tsx";

const AccordionMenuTitle = (props: {menuName:string, elements:ReactElement}) => {
    const { menuName, elements } = props;
    const [foldState, setFoldState] = useState<boolean>(false);

    const ChangeFoldState = () => {
        setFoldState(!foldState);
    }

    return (
        <div className="menuInnerContiner">
            <div className="menuContainerHeader" onClick={ChangeFoldState}>
                <FoldArrow state={foldState}/>
                <div className="menuInnerContinerTitle">
                    {menuName}
                </div>
            </div>
            {foldState ? elements : ""}
        </div>
    );
}

export default AccordionMenuTitle