
import { User } from "./Users";
import { Company } from "./Company";

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

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lng: user.location.lng,
                lat: user.location.lat
            }
        })
    }

    addCompanyMarker(company: Company): void {

    }

}