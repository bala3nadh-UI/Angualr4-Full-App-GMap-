import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './gmap.component.html',
  styleUrls: [ './gmap.component.css' ]
})
export class GMapComponent  {
  // google maps zoom level
  zoom: number = 11;  
  // initial center position for the map
  lat: number = 0;
  lng: number = 0;

  pins: pin[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {    
    this.getResourceLocation();
  }

  getResourceLocation() {
    this.apiService.getLocation().subscribe(res=> {
          this.pins = [];
          res.path.map((point) => this.pins.push({ lat: parseFloat(point[0]), lng: parseFloat(point[1]), label: '', draggable: true }));
          this.lat = parseFloat(res.path[0][0]);
          this.lng = parseFloat(res.path[0][1]);
    });
  }

  pinClick(label: string, index: number) {
    console.log(`Pin clicked: ${label || index}`)
  }
  
  mapTouched($event: MouseEvent) {
    this.pins.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  pinDragEnd(m: pin, $event: MouseEvent) {
    console.log('Dragged: ', m, $event);
  }
  
}

// just an interface for type safety.
interface pin {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
