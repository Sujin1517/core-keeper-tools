import "./css/sideMenu.css";
import AccordionMenu from "../../components/AccordionMenu.tsx"
import SliderBar from "../../components/SliderBar.tsx";
import CheckBox from "../../components/CheckBox.tsx";

const SideMenu = () => {

    return (
        <div id="sideMenu">
            <div className="menuTitle">CoreKeeper Tools</div>
            <div className="toolContainer">
                <div className="toolContainerItem">Map Viewer</div>
                <div className="toolContainerItem">Simulator</div>
            </div>
            <div className="menuContainer">
                <div className="menuContinerTitle">Load map file</div>
                <div>load file button</div>
                <div>Download map as image button</div>
            </div>
            <div className="menuContainer">
                <div className="menuContinerTitle">Display Options</div>
                <AccordionMenu menuName="Biome" elements={(
                    <div className="accordionMenu">
                        <div className="toolContainer">
                            <div>Show biome area</div>
                            <CheckBox />
                        </div>
                        <div>Transparency</div>
                        <div><SliderBar value={0} min={0} max={100} /></div>
                        <div>Inner rotation</div>
                        <div><SliderBar value={0} min={-180} max={180} /></div>
                        <div>Outer rotation</div>
                        <div><SliderBar value={0} min={-180} max={180} /></div>
                    </div>
                )}/>
                <AccordionMenu menuName="Grid" elements={(
                    <div className="accordionMenu">
                        <div className="toolContainer">
                            <div>Show chunk grid</div>
                            <CheckBox />
                        </div>
                        <div className="toolContainer">
                            <div>Show mob spawn grid</div>
                            <CheckBox />
                        </div>
                    </div>
                )}/>
                <AccordionMenu menuName="Distance" elements={(
                    <div className="accordionMenu">
                        <div className="toolContainer">
                            <CheckBox labelText="100" />
                            <CheckBox labelText="250" />
                            <CheckBox labelText="500" />
                        </div>
                    </div>
                )}/>
                <AccordionMenu menuName="Highlighting" elements={(
                    <div className="accordionMenu">
                    </div>
                )}/>
            </div>
        </div>
    );
}

export default SideMenu;