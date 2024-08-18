import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import L from 'leaflet';  // Add this import

export function Contact() {
    useEffect(() => {
        // Fix for the missing icon issue
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        });
    }, []);

    return (
        <div className="mx-auto max-w-[1240px] py-7 px-10">
            <div>
                <h1 className="text-4xl font-light">Contacts</h1>
                <div className="mt-6 h-[450px]">
                    <MapContainer
                        center={[6.14053912219095, 80.09998112885576]}
                        zoom={12}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[6.14053912219095, 80.09998112885576]}>
                            <Popup>
                                Devicer Mobile, Hikkaduwa
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}