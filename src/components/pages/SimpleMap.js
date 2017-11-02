import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

    shouldComponentUpdate(nextProps){

        console.log('asdasdasd',this.props)
        if(nextProps.lat == this.props.lat && !nextProps.loaded) {
            return false;
        }
        return true;

    }

    render(){
        console.log('map render', this.props);
        const initCenter={
            lat: Number(this.props.lat),
            lng: Number(this.props.lng)
        }


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
                <Marker  position={initCenter}
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


export default GoogleApiWrapper({
    apiKey: 'AIzaSyAuSy5MbGv8Br4Tu2GPPz_GlwmMEMebdIA'
})(MapContainer)

