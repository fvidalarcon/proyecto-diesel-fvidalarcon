//https://api.cne.cl/v3/combustibles/vehicular/estaciones?token=m3DffusHUp&callback=callback&tipo_combustible=petroleo%20diesel&region=09  // data filtrada
//http://api.cne.cl/v3/combustibles/vehicular/estaciones?token=m3DffusHUp&callback=callback&distribuidor=Copec&region=09&comuna=09108&tipo_combustible=petroleo diesel
//export const getApiUrl = () => `${base_url}${api_token}${region}${type_fuel}&comuna=${ query }`;

export const cors_anywhere= 'https://cors-anywhere.heroku.com/';
export const base_url = 'http://api.cne.cl/v3/combustibles/vehicular/estaciones';
export const api_token = '=m3DffusHUp';
export const region = '&region=09';
export const comunne_url = 'https://api.cne.cl/v3/comunas';
export const type_fuel = '&tipo_combustible=petroleo diesel';
export const callback = '&callback';




export const comunnesGet =  () => `${cors_anywhere}${comunne_url}${api_token}${callback}${region}`;

//comunas
//https://api.cne.cl/v3/comunas?token=m3DffusHUp&callback&region=09


//distribuidores
//https://api.cne.cl/v3/combustibles/vehicular/distribuidores?token=m3DffusHUp&callback=callback&callback
