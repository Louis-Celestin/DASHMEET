// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl: 'http://192.168.0.130:8000/api',
  baseImgUrl:'http://192.168.252.201:8000',
  //base_Url: 'http://192.168.252.183:8000/api',
  mapbox_key:
    'pk.eyJ1IjoiZHlkamEiLCJhIjoiY2w0emZxbG1wMXpoZTNibXp4NG42NzZlbCJ9.nDypHyIoge9w6hL1aQqM0A',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
