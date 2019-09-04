import React,  {useState, useEffect} from 'react';
import { FusePageCarded } from '@fuse';
import IncidenteHeader from './IncidenteHeader';
import IncidenteDialog from './IncidenteDialog';
import IncidentesList from './IncidentesList';

function Incidente() {

    const [abrir, setAbrir] = useState(false);
    const [isEdicao, setIsEdicao] = useState(false);
    const [rows, setRows] = useState();

    useEffect(() => {
        setAbrir(false);
      }, []);

    function openDialog(event){
        setAbrir(event);
    }

    const handlerEdicao = (event) => {
        setIsEdicao(event);
    }
    
    const valorRows = (row) => {
        setRows(row);
    }

    return (
        <React.Fragment>
            <FusePageCarded
                header={
                    <IncidenteHeader 
                    openDialog={openDialog}
                    handlerEdicao={handlerEdicao}
                    />
                }
                content={
                    <IncidentesList 
                    handlerEdicao={handlerEdicao} 
                    openDialog={openDialog}
                    valorRows={valorRows}/>
                }
                innerScroll
            />
           {abrir && <IncidenteDialog 
                      abrir={abrir}
                      openDialog={openDialog}
                      rows={rows}
                      isEdicao={isEdicao}/>}
        </React.Fragment>
    );
}

export default Incidente;


