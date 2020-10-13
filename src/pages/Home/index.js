import React,{Fragment,useState,useEffect} from 'react';
import apiCall from '../../api';
import { api_token } from '../../constants';
import Comunes from '../../components/Comunnes';
import Grid from '@material-ui/core/Grid';
import DealersComponent from '../../components/Dealers';
import Modal from '@material-ui/core/Modal';
import {Container, Box, Button} from '@material-ui/core';
import ProgressBar from '../../components/Progressbar';
import NoResults from '../../components/Welcome';
import SearchIcon from '@material-ui/icons/Search';
import './../../assets/css/styles.css';


export default function Home(){
    const [comunes,setComunes]=useState("");
    const [valorInput,setValorInput]=useState("");
    const [resultComunes,setResultComunes]=useState("");
    const [resultsDetail,setResultsDetail]=useState("");
    const [open, setOpen] = useState(false);
    const [dataModal,setDataModal]= useState("");


    useEffect(()=>{
        handleComunes();
    },[]);

    const handleComunes=async()=>{
        try{
            let method='GET';
            let url='comunas?token'+api_token+'&callback&region=09';
            let data=null;
            let head={'Content-Type': 'application/json'};
            const comunesData = await apiCall(method,url,data,head);
            if(comunesData.data.data){
                    setComunes(comunesData.data.data);
            }else{
                console.log("error no hay comunas en esa región");
            }
        }catch(e){
            console.log(e);
        }
    }

    const searchComunesFilter=(val)=>{
        var filtered = comunes.filter(result => {
            return result.nom_comuna.match(new RegExp(`${val}`, 'gi')) ;
        });
        setResultComunes(filtered);
    }

    const handleSearch=(e)=>{
        let  valueInp =e.target.value; 
        setValorInput(e.target.value);
        if(valueInp.length>=3){
            searchComunesFilter(e.target.value);
            console.log("valor mayor a 3 buscare");
        }else{
            console.log("valor no es mayor a 3 no busco");
        }      
    }

    const mostrarCuadros=(val,res)=>{
        setResultComunes("");
        setValorInput(res);
        handleDealers(val);
    }

    const handleDealers=async(id)=>{
        try{
            let method='GET';
            let url='combustibles/vehicular/estaciones?token'+api_token+'&region=09&comuna='+id;
            let data=null;
            let head={'Content-Type': 'application/json'};
            const dealerData = await apiCall(method,url,data,head);
            if(dealerData.data.data){
                    setResultsDetail(dealerData.data.data);
            }else{
                console.log("No hay dealers");
            }
        }catch(e){
            console.log(e);
        }
    }

      const handleClose = () => {
        setOpen(false);
      };
    
      const openModal=(vals)=>{
        setDataModal(vals);
            setOpen(true); 
      }

     

    return(
        <Fragment> 
        <div>   
           {comunes ? 
           <div> 
           <div className="input_Search" ><SearchIcon/>
               <div className="form_complete"> 
                    <input value={valorInput} onChange={(e)=>{handleSearch(e)}} className="input_form"/>
                    
                    {resultComunes ? <div className="results_data">   
                    {resultComunes.map((result, index) =>(
                    <Comunes key={index} result={result} mostrarCuadros={mostrarCuadros}/>
                    ))}
                    
                    </div> : null}
                    
                    </div>
           </div>
           <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                
            <div className="modal-body-detail">
                
            {dataModal ? 


            <div>
                <h1>{dataModal.distribuidor.nombre}</h1> 
                    <h3>Comuna: {dataModal.nombre_comuna}</h3>
                    <h3>Dirección: {dataModal.direccion_calle} {dataModal.direccion_numero}</h3>
                    <h3>Horario de atención: {dataModal.horario_atencion}</h3>
                    <h2>Precio: ${dataModal.precios["petroleo diesel"]}</h2>


                    <Button variant="contained" color="primary"  href={`https://maps.google.com/?q=+${dataModal.ubicacion.latitud}+${dataModal.ubicacion.longitud}`}>
                        <h3>Ir Ahora</h3>
                    </Button>
                    

                    
            </div>
            
            :null}
            </div>
        </Modal>
                        {resultsDetail? 
                        <Container>
                        <Grid container>
                        {resultsDetail.map((detail, index) => (
                            <Grid key={index} xs={ 12 } sm={ 6 } item>
                                <Box p={2}>
                                <DealersComponent className="container_modal_info" detail={detail} openModal={openModal} />
                                </Box>                                          
                              
                            </Grid> 
                              ))}
                        </Grid>
                        </Container>
                        :
                        <NoResults/>

                        }
           </div>
           : <ProgressBar />
           }
        </div>
        </Fragment>
    )
}