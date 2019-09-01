import React,  {useState, useEffect} from 'react';
import { FusePageCarded } from '@fuse';
import TecnicoHeader from './TecnicoHeader';
import TecnicoDialog from './TecnicoDialog';
import TecnicosList from './TecnicosList';

function Tecnico() {

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
                    <TecnicoHeader 
                    openDialog={openDialog}
                    handlerEdicao={handlerEdicao}
                    />
                }
                content={
                    <TecnicosList 
                    handlerEdicao={handlerEdicao} 
                    openDialog={openDialog}
                    valorRows={valorRows}/>
                }
                innerScroll
            />
           {abrir && <TecnicoDialog 
                      abrir={abrir}
                      openDialog={openDialog}
                      rows={rows}
                      isEdicao={isEdicao}/>}
        </React.Fragment>
    );
}

export default Tecnico;


