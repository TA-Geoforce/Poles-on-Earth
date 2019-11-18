import { MapControl } from 'react-leaflet';
import { GeoSearchControl as LeafletGeosearchControl } from 'leaflet-geosearch';

export default class GeoSearchControl extends MapControl {
  createLeafletElement(props) {
    return new LeafletGeosearchControl(props);
  }

  componentDidMount() {
    super.componentDidMount();
    const { map } = this.props.leaflet || this.context;
    const {
      onShowLocation,
      onMarkerDragend,
    } = this.props;
    map.on('geosearch/showlocation', (e) => {
      this._propagateEvent(onShowLocation, e);
    })
      .on('geosearch/marker/dragend', (e) => {
        this._propagateEvent(onMarkerDragend, e);
      });
  }

  updateLeafletElement(fromProps, toProps) {
    const { map } = this.props.leaflet || this.context;
    this.leafletElement.remove();
    this.leafletElement = new GeoSearchControl(toProps);
    this.leafletElement.addTo(map);
  }

  _propagateEvent(eventHandler, event) {
    if (typeof eventHandler !== 'function') return;
    eventHandler(event);
  }
}
