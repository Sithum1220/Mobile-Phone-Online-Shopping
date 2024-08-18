import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import L from 'leaflet';  // Add this import

export function Contact() {
    useEffect(() => {
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
                <div className="mt-6 h-[450px] relative z-0">
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

                <div className="mt-[4%] w-full">
                    <div className="w-1/2">
                        <h1 className="text-3xl font-light">Did not find an answer to your question?</h1>
                        <div className="flex flex-row gap-3 mt-[3%]">
                            <div className="flex flex-col w-1/2">
                                <label className="font-light" htmlFor="#">Name</label>
                                <input className="border-2 text-text rounded-2xl px-4 py-1" type="text"
                                       placeholder="Your Name"/>
                            </div>
                            <div  className="flex flex-col w-1/2">
                                <label className="font-light" htmlFor="#">Email</label>
                                <input className="border-2 text-text rounded-2xl px-4 py-1" type="text"
                                       placeholder="Your Email"/>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-[3%]  flex-col">
                            <label className="font-light" htmlFor="#">Message</label>
                            <textarea name="message" id="" placeholder="Your Message" className="border-2 text-text
                            rounded-2xl px-4 py-2 h-60" />
                        </div>

                        <div className="mt-[3%]">
                            <button className="border-2 font-light text-sm hover:bg-primary hover:text-white transition-all duration-500 rounded-2xl px-4 py-1">Send Message</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}