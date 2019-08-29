import React,  {useState, useEffect} from 'react';
import { FusePageCarded } from '@fuse';
import OrgaoHeader from './OrgaoHeader';
import OrgaoDialog from './OrgaoDialog';
import OrgaosList from './OrgaosList';

function Orgao() {

    const [abrir, setAbrir] = useState(false);
    
    useEffect(() => {
        setAbrir(false);
      }, []);

    function openDialog(event){
        setAbrir(event);
    }

    return (
        <React.Fragment>
            <FusePageCarded
                header={
                    <OrgaoHeader openDialog={openDialog}/>
                }
                content={
                    <OrgaosList/>
                }
                innerScroll
            />
            <OrgaoDialog abrir={abrir}/>
        </React.Fragment>
    );
}

export default Orgao;


