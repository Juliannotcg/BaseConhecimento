import React,  {useState, useEffect} from 'react';
import { FusePageCarded } from '@fuse';
import OrgaoHeader from './OrgaoHeader';
import OrgaoDialog from './OrgaoDialog';
import OrgaosList from './OrgaosList';

function Orgao() {

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
                    <OrgaoHeader 
                    openDialog={openDialog}
                    handlerEdicao={handlerEdicao}
                    />
                }
                content={
                    <OrgaosList 
                    handlerEdicao={handlerEdicao} 
                    openDialog={openDialog}
                    valorRows={valorRows}/>
                }
                innerScroll
            />
            <OrgaoDialog 
                abrir={abrir}
                openDialog={openDialog}
                rows={rows}
                isEdicao={isEdicao}/>
        </React.Fragment>
    );
}

export default Orgao;


