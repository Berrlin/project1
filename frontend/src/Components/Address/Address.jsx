import React, { useEffect, useRef, useState } from 'react'
import './Address.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import address_icon from '../../assets/address-icon.png'
import mail_icon from '../../assets/email-icon.png'
import phone_icon from '../../assets/phone-icon.png'

const Address = () => {
    const [position, setPosition] = useState([10.8111185, 106.7707259])
    const mapRef = useRef();
    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.on('click', (e) => {
                setPosition([e.latlng.lat, e.latlng.lng]);
            });
        }
    }, [mapRef]);

    return (
        <div className='address'>
            <div>
                <MapContainer
                    center={position}
                    zoom={13}
                    style={{ height: '50vh', width: '100%' }}
                    whenCreated={(map) => { mapRef.current = map; }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Vị trí hiện tại: {position[0]}, {position[1]}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className='address-right'>
                <h2>DEAL INTRODUCTION</h2>
                <p>An Dan Investment and Trading Joint Stock Company - a member company of Gami Group was established in 1994. Proud to be the first Mitsubishi Dealer in the North, with 25 years of experience in the Automotive industry, Mitsubishi Motors An Dan has become a familiar name to Mitsubishi lovers in Vietnam.</p>
                <h2>Contact</h2>
                <div className="address-right-contact">
                    <span><img src={address_icon} alt="" /><b>35 street 14, Phuoc Binh Ward, District Thu Duc, Ho Chi Minh City</b></span>
                    <span><img src={address_icon} alt="" />Website: localhost://5173</span>
                    <span><img src={mail_icon} alt="" />Email: maiquoctuan@gmail.com</span>
                    <span><img src={phone_icon} alt="" />Hotline: 0989765231</span>
                </div>
            </div>

        </div>


    )
}

export default Address