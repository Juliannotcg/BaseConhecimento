import React, { Component } from 'react';
import { FuseAnimate, FusePageCarded } from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import OrgaoHeader from './OrgaoHeader';


class Orgao extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <FusePageCarded
                header={
                  <OrgaoHeader/>
                }
                // contentToolbar={}
                // content={}
                innerScroll
            />
        );
    }
}

export default Orgao;


