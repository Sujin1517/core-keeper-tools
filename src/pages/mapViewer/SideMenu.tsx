import "./css/sideMenu.css";
import AccordionMenu from "../../components/AccordionMenu.tsx"

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
                        <div>Transparency</div>
                        <div>Inner rotation</div>
                        <div>Outer rotation</div>
                    </div>
                )}/>
                <AccordionMenu menuName="Grid" elements={(
                    <div className="accordionMenu">
                    <div>Chunk grid</div>
                    <div>Mob grid</div>
                    </div>
                )}/>
                <AccordionMenu menuName="Distance" elements={(
                    <div className="accordionMenu">
                    <div>100</div>
                    <div>250</div>
                    <div>500</div>
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