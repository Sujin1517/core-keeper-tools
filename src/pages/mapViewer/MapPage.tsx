import './css/mapPage.css'
import MapView from "./MapView.tsx";
import SideMenu from "./SideMenu.tsx";

const MapPage = () => {

    return (
        <div id="mapPage">
            <MapView />
            <SideMenu />
        </div>
    );
}

export default MapPage;