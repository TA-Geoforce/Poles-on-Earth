import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import {MapControl} from 'react-leaflet';

class GeoSearch extends MapControl {

  createLeafletElement() {
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: 'bar',
      showMarker: true,
      showPopup: false,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: false,
      searchLabel: 'search'
    });
  }
}

export default GeoSearch;