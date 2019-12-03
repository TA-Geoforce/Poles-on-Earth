import React, { Component } from 'react'
import { Map, TileLayer, LayersControl, FeatureGroup } from 'react-leaflet';
import { GoogleLayer } from 'react-leaflet-google-v2';
import { EditControl } from "react-leaflet-draw";
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch';
import L from 'leaflet';

export default class MapComponent extends Component {

  _onEditStop = (e) => {
    console.log('_onEditStop', e);
  }

  _onCreate = (e) => {
    const type = e.layerType,
      layer = e.layer;
    if (type === 'rectangle') {
      const seeArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
      console.log('_onCreate', seeArea);
    }
  }

  _onDeleted = (e) => {
    console.log('_onDeleted', e);
  }

  render() {
    const { options } = this.props

    const key = 'AIzaSyDEG4lyorD61vnJoAHG0FkQERZ-McElZyg';
    const prov = OpenStreetMapProvider;
    const GeoSearchControlElement = SearchControl;
    const { BaseLayer } = LayersControl || {};

    const terrain = 'TERRAIN';
    const road = 'ROADMAP';
    const satellite = 'SATELLITE';
    const hydrid = 'HYBRID';
    return (
      <div>
        {(typeof window !== 'undefined') ? (
          <Map {...options} center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true} className={'mapStyle'}>
            <LayersControl position='topright' collapsed={true}>
              <BaseLayer name='OpenStreetMap.Mapnik'>
                <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
              </BaseLayer>
              <BaseLayer name='Google Maps Roads'>
                <GoogleLayer googlekey={key} maptype={road} />
              </BaseLayer>
              <BaseLayer name='Google Maps Terrain'>
                <GoogleLayer googlekey={key} maptype={terrain} />
              </BaseLayer>
              <BaseLayer name='Google Maps Satellite'>
                <GoogleLayer googlekey={key} maptype={satellite} />
              </BaseLayer>
              <BaseLayer checked name='Google Maps Hydrid'>
                <GoogleLayer googlekey={key} maptype={hydrid} libraries={['geometry', 'places']} />
              </BaseLayer>
              <BaseLayer name='Google Maps with Libraries'>
                <GoogleLayer googlekey={key} maptype={hydrid} libraries={['geometry', 'places']} />
              </BaseLayer>
            </LayersControl>
            <FeatureGroup >
              <EditControl
                position='topright'
                onEditStop={this._onEditStop}
                onCreated={this._onCreate}
                onDeleted={this._onDeleted}
                draw={{
                  rectangle: {
                    showArea: true,
                    showRadius: false,
                    feet: false,
                    metric: 'km',
                    nautic: false
                  },
                  polygon: false,
                  polyline: false,
                  circle: false,
                  marker: false,
                  circlemarker: false
                }}
                edit={{
                  featureGroup: FeatureGroup, //REQUIRED!!
                  edit: false
                }}

              />
            </FeatureGroup>
            <GeoSearchControlElement provider={prov} showMarker={false} showPopup={false} popupFormat={({ query, result }) => result.label}
              maxMarkers={1} retainZoomLevel={false} animateZoom={true} autoClose={false}
              searchLabel={'Enter address, please'} keepResult={true} style={'bar'}/>
          </Map>
        ) : null}
      </div>
    )
  }
}