import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parkings } from 'src/app/models/parkings';
import { Category } from 'src/app/models/category';


//importons notre mapbox
import * as mapboxgl from 'mapbox-gl';
//import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Router } from '@angular/router';
import { ParkingsService } from 'src/app/services/_parkings/parkings.service';
import { TokenStorageService } from 'src/app/services/_auth-services/token-storage.service';
import { Communes } from 'src/app/models/communes';
import { getStyle } from '@coreui/utils/src';
import { style } from '@angular/animations';
@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss'],
})
export class IdentificationComponent implements OnInit {
  mapbox = mapboxgl as typeof mapboxgl;
  //varibale map
  map!: mapboxgl.Map;
  parking: Parkings = new Parkings();
  markerPark!: Parkings[]
  categorie!: Category[];
  street!: Communes[];

  //variable attendue
  currentUser: any;
  constructor(
    private parkingService: ParkingsService,
    private router: Router,
    private token: TokenStorageService
  ) {
    this.mapbox.accessToken = environment.mapbox_key;
  }
  //map!: mapboxgl.Map;
  //stores!: any;
  marker: any;
  parkingMarkers!:any[]
  dataMap: any;
  trip: any;
  popup:any

  ngOnInit() {
    //this.buildMap(-4.0224767, 5.3404293);
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
      center: [-4.0224767, 5.3404293], // starting position -4.2398673, 4.3641034
      zoom: 14, // starting zoom
      pitch: 25, // pitch in degrees
    })

    this.createMarcador(-4.0224767 , 5.3404293);{
      const marker = new mapboxgl.Marker({
        draggable:true,
      })
    }

    // Add markers to the map.
    this.getCategoryList();
    this.currentUser = this.token.getUser();
    this.getListeCommune();
    this.getMarkers();

  }

  createMarcador(lng: number, lat: number) {
    const popup = new mapboxgl.Popup()
    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.map);

    // marker.on('dragend', () => {
    //   console.log(marker.getLngLat());
    // });

    this.map.on('style.load', () => {
      this.map.setFog({}); // Set the default atmosphere style
    });

    // Add geolocate control to the map.
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    );

    marker.on('drag', () => {
      this.dataMap = marker.getLngLat();
      console.log(marker.getLngLat());

      // var element = this.dataMap.split(',');

      // var longitude = element[0];
      // var latitude = element[1];

      // console.log(longitude);
      //console.log(marker.getLngLat());

      var m = localStorage.setItem('lngLat', this.dataMap);

      console.log(m);
      localStorage.getItem(this.dataMap);
    });
  }

  getMarkers()
  {
      this.parkingService.getParkingsList().subscribe((data)=>{
        this.markerPark=data;
        console.log(this.markerPark)
        for(let i=0;i<this.markerPark.length;i++)
          {
            if(this.markerPark[i].IdCategorie==4){
              const el = document.createElement('div');
              const width = 25
              const height = 25
              el.className = 'marker';
              el.style.backgroundImage=`url('https://cdn-icons-png.flaticon.com/512/46/46297.png')`;
              el.style.width = `${width}px`;
              el.style.height = `${height}px`;
              el.style.backgroundSize = '100%';
                  const marker =new mapboxgl.Marker(el
                  )
                  .setLngLat([this.markerPark[i].longitude, this.markerPark[i].latitude])
                  .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<img src=${environment.baseImgUrl}/${this.markerPark[i].image} width=200>`))
                  .addTo(this.map)
            }

            if(this.markerPark[i].IdCategorie==7){
              const el = document.createElement('div');
              const width = 25
              const height = 25
              el.className = 'marker';
              el.style.backgroundImage=`url('https://img2.freepng.fr/20180421/uxw/kisspng-car-park-parking-computer-icons-parking-5adbce25d707b5.1998015715243545978808.jpg')`;
              el.style.width = `${width}px`;
              el.style.height = `${height}px`;
              el.style.backgroundSize = '100%';
                  const marker =new mapboxgl.Marker(el
                  )
                  .setLngLat([this.markerPark[i].longitude, this.markerPark[i].latitude])
                  .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<img src=${environment.baseImgUrl}/${this.markerPark[i].image} width=200>`))
                  .addTo(this.map)
            }

            if(this.markerPark[i].IdCategorie==5){
              const el = document.createElement('div');
              const width = 25
              const height = 25
              el.className = 'marker';
              el.style.backgroundImage=`url('https://www.morteratsch.ch/wp-content/uploads/2016/06/Bus.png')`;
              el.style.width = `${width}px`;
              el.style.height = `${height}px`;
              el.style.backgroundSize = '100%';
                  const marker =new mapboxgl.Marker(el
                  )
                  .setLngLat([this.markerPark[i].longitude, this.markerPark[i].latitude])
                  .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<img src=${environment.baseImgUrl}/${this.markerPark[i].image} width=200>`))
                  .addTo(this.map)
            }
            if(this.markerPark[i].IdCategorie==3){
              const el = document.createElement('div');
              const width = 25
              const height = 25
              el.className = 'marker';
              el.style.backgroundImage=`url('https://cdn.pixabay.com/photo/2017/10/06/11/20/sport-2822768_1280.png')`;
              el.style.width = `${width}px`;
              el.style.height = `${height}px`;
              el.style.backgroundSize = '100%';
                  const marker =new mapboxgl.Marker(el
                  )
                  .setLngLat([this.markerPark[i].longitude, this.markerPark[i].latitude])
                  .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<img src=${environment.baseImgUrl}/${this.markerPark[i].image} width=200>`))
                  .addTo(this.map)
            }
        }
      }
      )
  }


  //Appelles des api

  private getCategoryList() {
    this.parkingService.getCategoryList().subscribe((data) => {
      this.categorie = data;
      console.log(data)
    });
  }

  //Parkings save
  saveParking() {
    this.parking.longitude = this.dataMap.lng;
    this.parking.latitude = this.dataMap.lat;
    //recuperer l'id user
    this.parking.IdUser = this.currentUser.data.id;
    //Recuperation des informations sur sa commune
    //this.parking.IdCommune = this.currentUser.data.Idcommune;
    this.parkingService.createParkings(this.parking).subscribe(
      (data) => {
        console.log(this.parking.longitude);
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {

    this.saveParking();
  }

  //Communes liste
  getListeCommune() {
    this.parkingService.getStreetList().subscribe((data) => {
      this.street = data;

    });
  }
}

// create a HTML element for each feature
// const = document.createElement('pre');
// el.className = 'coordinates';

// function onDragEnd() {
// const coordinates = Array.from(
//   document.getElementsByClassName(
//     'coordinates'
//   ) as HTMLCollectionOf<HTMLElement>
// );
// coordinates.forEach((element) => {});
// const lngLat = marker.getLngLat();
// coordinates.style.display = 'block';
// coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;

//   const coordinates = document.querySelector<HTMLElement>('.coordinates')!;
//   coordinates.style.display = 'block';
//   coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;

// }

// marker.on('dragend', onDragEnd);

// buildMap(lng: number, lat: number) {
//   const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
//     center: [-4.0224767, 5.3404293], // starting position -4.2398673, 4.3641034
//     zoom: 14, // starting zoom
//   });
//   // Add zoom and rotation controls to the map.
//   //map.addControl(new mapboxgl.NavigationControl());
//   //const coordinates = document.getElementById('coordinates');

//   const marker = new mapboxgl.Marker({
//     draggable: true,
//   })
//     .setLngLat([lng, lat])
//     .addTo(map);

//   // create a HTML element for each feature
//   const coordinates = document.createElement('pre');
//   coordinates.className = 'coordinates';
//   coordinates.setAttribute('id', 'coordinates');

//   marker.on('drag', () => {
//     this.dataMap = marker.getLngLat();
//     var m = localStorage.setItem('lngLat', this.dataMap);

//     console.log(m);
//     //localStorage.getItem(this.dataMap);
//   });

//   // Add the control to the map.
//   map.addControl(
//     new MapboxGeocoder({
//       accessToken: mapboxgl.accessToken,
//       marker: false,
//       //mapboxgl: mapboxgl,
//     })
//   );

//   map.addLayer({
//     id: 'point',
//     source: 'single-point',
//     type: 'circle',
//     paint: {
//       'circle-radius': 10,
//       'circle-color': '#448ee4',
//     },
//   });

//   // const geocoder = new MapboxGeocoder({
//   //   // Initialize the geocoder
//   //   accessToken: mapboxgl.accessToken, // Set the access token
//   //   //mapboxgl: mapboxgl, // Set the mapbox-gl instance
//   //   marker: false, // Do not use the default marker style
//   // });

//   // // Add the geocoder to the map
//   // map.addControl(geocoder);
//   //   // coordinates.setAttribute('id', 'coordinates');
// }
