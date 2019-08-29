import React,  {useState, useEffect} from 'react';
import { FusePageCarded } from '@fuse';
import OrgaoHeader from './OrgaoHeader';
import OrgaoDialog from './OrgaoDialog';

function Orgao(props) {

    const [abrir, setAbrir] = useState();

    useEffect(() => {
        setAbrir(false)
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
                innerScroll
            />
            <OrgaoDialog abrir={abrir}/>
        </React.Fragment>
    );
}

export default Orgao;


