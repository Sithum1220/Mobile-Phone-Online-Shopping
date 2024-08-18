import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'
import L from 'leaflet';

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
        <div className="mx-auto max-w-[1240px] py-7 px-4 sm:px-6 lg:px-10">
            <div>
                <h1 className="text-3xl sm:text-4xl font-light">Contacts</h1>
                <div className="mt-6 h-[300px] sm:h-[450px] relative z-0">
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

                <div className="mt-8 w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-2xl sm:text-3xl font-light">Did not find an answer to your question?</h1>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label className="font-light" htmlFor="name">Name</label>
                                <input className="border-2 text-text rounded-2xl px-4 py-2" type="text" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="flex flex-col w-full sm:w-1/2">
                                <label className="font-light" htmlFor="email">Email</label>
                                <input className="border-2 text-text rounded-2xl px-4 py-2" type="email" id="email" placeholder="Your Email"/>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-4 flex-col">
                            <label className="font-light" htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Your Message" className="border-2 text-text rounded-2xl px-4 py-2 h-40 sm:h-60" />
                        </div>

                        <div className="mt-4">
                            <button className="border-2 font-light text-sm hover:bg-primary hover:text-white transition-all duration-500 rounded-2xl px-4 py-2">Send Message</button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col sm:flex-row gap-8">
                            <div className="w-full sm:w-1/2">
                                <h1 className="text-2xl sm:text-3xl font-light">Consultations and order by phone</h1>
                                <div className="mt-4">
                                    <h2 className="font-light">+94 77-7524-729</h2>
                                    <h2 className="font-light">+94 72-4700-116</h2>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
                                <h1 className="text-2xl sm:text-3xl font-light">Service department</h1>
                                <div className="flex flex-row gap-14 mt-4">
                                    <div className="flex flex-col gap-3">
                                        <h2 className="font-light">Address:</h2>
                                        <h2 className="font-light">Phone:</h2>
                                        <h2 className="font-light">City:</h2>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h2 className="font-light">Shopping Complex</h2>
                                        <h2 className="font-light">+94 77-7524-729</h2>
                                        <h2 className="font-light">Hikkaduwa 80240</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h1 className="text-2xl sm:text-3xl font-light">Contacts</h1>
                            <div className="flex flex-row gap-14 mt-4">
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-light">Address:</h2>
                                    <h2 className="font-light">Phone:</h2>
                                    <h2 className="font-light">City:</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h2 className="font-light">Shopping Complex</h2>
                                    <h2 className="font-light">+94 77-7524-729</h2>
                                    <h2 className="font-light">Hikkaduwa 80240</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}