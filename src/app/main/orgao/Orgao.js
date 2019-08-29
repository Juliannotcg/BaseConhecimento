import React,  {useState, useEffect} from 'react';
import { FusePageCarded } from '@fuse';
import OrgaoHeader from './OrgaoHeader';
import OrgaoDialog from './OrgaoDialog';
import OrgaosList from './OrgaosList';

function Orgao() {

    const [abrir, setAbrir] = useState(false);
    const [isEdicao, setIsEdicao] = useState(false);

    useEffect(() => {
        setAbrir(false);
      }, []);

    function openDialog(event){
        setAbrir(event);
    }

    const handlerEdicao = (event) => {
        setIsEdicao(event);
    }

    return (
        <React.Fragment>
            <FusePageCarded
                header={
                    <OrgaoHeader openDialog={openDialog}/>
                }
                content={
                    <OrgaosList 
                    handlerEdicao={handlerEdicao} 
                    openDialog={openDialog}/>
                }
                innerScroll
            />
        
        </React.Fragment>
    );
}

export default Orgao;


