import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




export class MapContainer extends Component {


    render(){
        console.log('map render', this.props);
        const initCenter={
            lat: Number(this.props.lat),
            lng: Number(this.props.lng)
        }
        console.log(this.props.google);

        return (
            <Map
                center={initCenter}
                google={this.props.google}
                zoom={9}
                style = {{
                    width: '100%',
                    height: '400px'
                }}
                initialCenter={initCenter}
                onReady={console.log("Ready",initCenter)}

            >
                <Marker
                    position={initCenter}
                        onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>hello</h1>
                    </div>
                </InfoWindow>

            </Map>
        );
    }
}

MapContainer.defaultProps = {
    lat:0,
    lng:0,
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAuSy5MbGv8Br4Tu2GPPz_GlwmMEMebdIA'
})(MapContainer)

