import './css/mapPage.css'
import MapView from "./MapView.tsx";
import SideMenu from "./SideMenu.tsx";
import { OptionProvider } from "./OptionContext.tsx";

const MapPage = () => {
    return (
        <div id="mapPage">
            <OptionProvider>
                <MapView />
                <SideMenu />
            </OptionProvider>
        </div>
    );
}

export default MapPage;