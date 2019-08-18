import React, {Component} from 'react';
import ReactTable from "react-table";
import {withStyles} from '@material-ui/core/styles';
import axios from "axios";

const styles = theme => ({
    layoutRoot: {}
});
 
export class OrgaoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forms: {},
        };
    }

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        axios.get('https://valued-mediator-138113.firebaseio.com/forms.json')
            .then((response)=>{
                this.setState({forms: response.data, loaded: true});
            }).catch((error)=>{
            this.setState({loaded:true});
                console.log(error);
        });
    };

    render() {

        let data = [];
        let ids = [];
    
        data = Object.keys(this.state.forms).map((key)=>{
            ids.push(key);
            return this.state.forms[key]
        });

        return (
            <div>
                <ReactTable  data={data}
                autoGenerateColumns={ true }
                defaultPageSize={10}
                columns={[

                    {
                        Header  : "Nome",
                        Cell: row => row.original.schema.title
                    },
                    {
                        Header  : "Descrição",
                        id      : "description",
                        Cell: row => row.original.schema.description
                    }

                ]} />
            </div>
        );
    }
}