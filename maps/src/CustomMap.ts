
import { User } from "./Users";
import { Company } from "./Company";


// Instruction to every other class
// on how they can be an argument to 'addMarker'

export interface Mappable {
    location: {
        lat: number,
        lng: number
    };
    color: string;

    markerContent(): string;
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lng: mappable.location.lng,
                lat: mappable.location.lat
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }

}