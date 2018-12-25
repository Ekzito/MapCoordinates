import React, { Component } from 'react';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl, Clusterer, GeolocationControl, Polyline } from 'react-yandex-maps';

class MapFrame extends Component {

    render() {
        return (          
            <YMaps>
                <div className='map'>
                    <Map width='100%' height="100%" state={{ 
                        center: ((this.props.points.length > 0) ? this.props.points[this.props.points.length - 1].coordinates : [55.75, 37.57]), zoom: 13 }}>
                    <Clusterer>
                    {this.props.points ? this.props.points.map((point) => (
                        <Placemark options={{draggable: true}} key={point.key} geometry={point.coordinates} />
                    )) : null}
                    </Clusterer>
                    <Polyline geometry={this.props.points.map(point => point.coordinates)}
                        options={{
                            balloonCloseButton: false,
                            strokeColor: '#000',
                            strokeWidth: 2,
                            strokeOpacity: 0.7,
                        }}>
                    </Polyline>
                        <ZoomControl></ZoomControl>
                        <FullscreenControl></FullscreenControl>
                        <GeolocationControl options={{float: 'left'}} />
                    </Map>
                    
                </div>
            </YMaps>
        )
    }
}
  
export default MapFrame;