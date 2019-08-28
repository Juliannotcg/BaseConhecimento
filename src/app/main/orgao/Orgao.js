import React, { Component } from 'react';
import { FusePageCarded } from '@fuse';
import OrgaoHeader from './OrgaoHeader';
import { openDialog } from 'app/store/actions';
import OrgaoDialog from './OrgaoDialog';

class Orgao extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false
        }
    }

    openDialog = (event) => {
        this.setState({open: event});
    }

    render() {

        return (
            <React.Fragment>
                <FusePageCarded
                    header={
                    <OrgaoHeader
                     openDialog = {this.openDialog}/>
                    }
                    // contentToolbar={}
                    // content={}
                    innerScroll
                />
                <OrgaoDialog
                open = {this.state.open}/>
            </React.Fragment>
        );
    }
}

export default Orgao;


