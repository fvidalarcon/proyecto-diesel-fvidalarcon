//https://api.cne.cl/v3/combustibles/vehicular/estaciones?token=m3DffusHUp&callback=callback&tipo_combustible=petroleo%20diesel&region=09  // data filtrada

//http://api.cne.cl/v3/combustibles/vehicular/estaciones?token=m3DffusHUp&callback=callback&distribuidor=Copec&region=09&comuna=09108&tipo_combustible=petroleo diesel
const base_url = 'http://api.cne.cl/v3/combustibles/vehicular/estaciones';
const api_token = 'm3DffusHUp';
const region = '09';
const type_fuel = 'petroleo diesel';



export const getApiUrl = query => `${ base_url }?token=${ api_token }&region=${ region }$tipo_combustible=${ type_fuel }&comuna=${ query }`;

//comunas
//https://api.cne.cl/v3/comunas?token=m3DffusHUp&callback&region=09
export const Comunnes = [
    {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09101",
        "nom_comuna": "Temuco"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09102",
        "nom_comuna": "Carahue"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09103",
        "nom_comuna": "Cunco"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09104",
        "nom_comuna": "Curarrehue"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09105",
        "nom_comuna": "Freire"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09106",
        "nom_comuna": "Galvarino"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09107",
        "nom_comuna": "Gorbea"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09108",
        "nom_comuna": "Lautaro"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09109",
        "nom_comuna": "Loncoche"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09110",
        "nom_comuna": "Melipeuco"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09111",
        "nom_comuna": "Nueva Imperial"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09112",
        "nom_comuna": "Padre las Casas"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09113",
        "nom_comuna": "Perquenco"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09114",
        "nom_comuna": "Pitrufquén"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09115",
        "nom_comuna": "Pucón"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09116",
        "nom_comuna": "Saavedra"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09117",
        "nom_comuna": "Teodoro Schmidt"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09118",
        "nom_comuna": "Toltén"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09119",
        "nom_comuna": "Vilcún"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09120",
        "nom_comuna": "Villarrica"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09121",
        "nom_comuna": "Cholchol"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09201",
        "nom_comuna": "Angol"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09202",
        "nom_comuna": "Collipulli"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09203",
        "nom_comuna": "Curacautín"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09204",
        "nom_comuna": "Ercilla"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09205",
        "nom_comuna": "Lonquimay"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09206",
        "nom_comuna": "Los Sauces"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09207",
        "nom_comuna": "Lumaco"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09208",
        "nom_comuna": "Purén"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09209",
        "nom_comuna": "Renaico"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09210",
        "nom_comuna": "Traiguén"
        },
        {
        "cod_region": "09",
        "nom_region": "De la Araucanía",
        "cod_comuna": "09211",
        "nom_comuna": "Victoria"
        }
    
];

//distribuidores
export const Dealers = [
    {
        "nombre_distribuidor": "Abastible"
        },
        {
        "nombre_distribuidor": "Adquim"
        },
        {
        "nombre_distribuidor": "Aire"
        },
        {
        "nombre_distribuidor": "Apc combustibles"
        },
        {
        "nombre_distribuidor": "Apex"
        },
        {
        "nombre_distribuidor": "Apm"
        },
        {
        "nombre_distribuidor": "Aronex"
        },
        {
        "nombre_distribuidor": "Att"
        },
        {
        "nombre_distribuidor": "Autogasco"
        },
        {
        "nombre_distribuidor": "Baltolu"
        },
        {
        "nombre_distribuidor": "Bull energy"
        },
        {
        "nombre_distribuidor": "Castrol"
        },
        {
        "nombre_distribuidor": "Cave"
        },
        {
        "nombre_distribuidor": "Chilin"
        },
        {
        "nombre_distribuidor": "Ckr"
        },
        {
        "nombre_distribuidor": "Cnc combustibles"
        },
        {
        "nombre_distribuidor": "Coc"
        },
        {
        "nombre_distribuidor": "Combustible alhue"
        },
        {
        "nombre_distribuidor": "Combustibles alquihue"
        },
        {
        "nombre_distribuidor": "Combustibles amade"
        },
        {
        "nombre_distribuidor": "Combustibles endless.com"
        },
        {
        "nombre_distribuidor": "Combustibles j.l.t."
        },
        {
        "nombre_distribuidor": "Combustibles jcd"
        },
        {
        "nombre_distribuidor": "Combustibles josefita spa"
        },
        {
        "nombre_distribuidor": "Combustibles jsp"
        },
        {
        "nombre_distribuidor": "Combustibles ortiz"
        },
        {
        "nombre_distribuidor": "Comercial maqui"
        },
        {
        "nombre_distribuidor": "Coopeserau"
        },
        {
        "nombre_distribuidor": "Copec"
        },
        {
        "nombre_distribuidor": "Cremaschi"
        },
        {
        "nombre_distribuidor": "Custom service"
        },
        {
        "nombre_distribuidor": "D'mar"
        },
        {
        "nombre_distribuidor": "Del sol combustibles"
        },
        {
        "nombre_distribuidor": "Del solar"
        },
        {
        "nombre_distribuidor": "Delpa"
        },
        {
        "nombre_distribuidor": "Dmax"
        },
        {
        "nombre_distribuidor": "Doña lucina"
        },
        {
        "nombre_distribuidor": "Ecco"
        },
        {
        "nombre_distribuidor": "Ecogreen ltda."
        },
        {
        "nombre_distribuidor": "El huique"
        },
        {
        "nombre_distribuidor": "En ruta"
        },
        {
        "nombre_distribuidor": "Enersur s.a."
        },
        {
        "nombre_distribuidor": "Enex"
        },
        {
        "nombre_distribuidor": "Estacion de servicio santa maria spa"
        },
        {
        "nombre_distribuidor": "Facaz"
        },
        {
        "nombre_distribuidor": "Farcom"
        },
        {
        "nombre_distribuidor": "Flores"
        },
        {
        "nombre_distribuidor": "Gasolinera monte aguila"
        },
        {
        "nombre_distribuidor": "Gyt combustibles"
        },
        {
        "nombre_distribuidor": "Hn"
        },
        {
        "nombre_distribuidor": "Hola!"
        },
        {
        "nombre_distribuidor": "Hs combustibles"
        },
        {
        "nombre_distribuidor": "Infinia combustibles"
        },
        {
        "nombre_distribuidor": "J allel"
        },
        {
        "nombre_distribuidor": "Jlc"
        },
        {
        "nombre_distribuidor": "Jvl combustibles"
        },
        {
        "nombre_distribuidor": "La cascada del sur"
        },
        {
        "nombre_distribuidor": "Las galaxias"
        },
        {
        "nombre_distribuidor": "Lider s.a."
        },
        {
        "nombre_distribuidor": "Lipigas"
        },
        {
        "nombre_distribuidor": "Lvt combustibles"
        },
        {
        "nombre_distribuidor": "Mimbral"
        },
        {
        "nombre_distribuidor": "Navcar combustibles"
        },
        {
        "nombre_distribuidor": "Newen"
        },
        {
        "nombre_distribuidor": "Petrobras"
        },
        {
        "nombre_distribuidor": "Petrocamp"
        },
        {
        "nombre_distribuidor": "Petrogal"
        },
        {
        "nombre_distribuidor": "Petrojac"
        },
        {
        "nombre_distribuidor": "Petromax"
        },
        {
        "nombre_distribuidor": "Petronext"
        },
        {
        "nombre_distribuidor": "Petroval"
        },
        {
        "nombre_distribuidor": "Progresa s.a."
        },
        {
        "nombre_distribuidor": "Puma verde"
        },
        {
        "nombre_distribuidor": "Punto sur"
        },
        {
        "nombre_distribuidor": "Rafael letelier yañez y cia ltda"
        },
        {
        "nombre_distribuidor": "Redsur"
        },
        {
        "nombre_distribuidor": "Segk servicentro"
        },
        {
        "nombre_distribuidor": "Servi centro todoservicio"
        },
        {
        "nombre_distribuidor": "Servi-aiken"
        },
        {
        "nombre_distribuidor": "Servicentro itata"
        },
        {
        "nombre_distribuidor": "Servicentro leal"
        },
        {
        "nombre_distribuidor": "Servicentro san miguel"
        },
        {
        "nombre_distribuidor": "Servicentros rabalme"
        },
        {
        "nombre_distribuidor": "Sesa"
        },
        {
        "nombre_distribuidor": "Shell"
        },
        {
        "nombre_distribuidor": "Sin bandera"
        },
        {
        "nombre_distribuidor": "Sinhel"
        },
        {
        "nombre_distribuidor": "Socorro"
        },
        {
        "nombre_distribuidor": "Speedway"
        },
        {
        "nombre_distribuidor": "Suarez combustibles"
        },
        {
        "nombre_distribuidor": "Surenergy"
        },
        {
        "nombre_distribuidor": "Terpel"
        },
        {
        "nombre_distribuidor": "Transpetrol"
        },
        {
        "nombre_distribuidor": "Uligas"
        },
        {
        "nombre_distribuidor": "Viva combustibles"
        }
];