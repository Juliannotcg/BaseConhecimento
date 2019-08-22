import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core/es';
import Button from '@material-ui/core/Button';
import API from '../../API/API';

export default class OrgaoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{onClose, item, onOrgaoAdicionado} = this.props;
        let obj = {
            nome: '',
            descricao: ''
        };

        if (this.props.isEdicao && this.props.item) {
            obj.nome = item.nome;
            obj.descricao = item.descricao;
        }

        return (
            <React.Fragment>
                <Formik
                    initialValues={obj}
                    validationSchema={Yup.object().shape({
                        nome: Yup.string()
                            .required('O campo nome é obrigatório.'),
                        descricao: Yup.string()
                            .required('O campo descrição é obrigatório.')
                    })}
                    onSubmit={fields => {

                        if (!this.props.isEdicao) {
                            registrar(fields, onOrgaoAdicionado, onClose, this.props.item);
                        }else{
                            alterar(fields, onOrgaoAdicionado, onClose, this.props.item);
                        }
                        
                    }}
                    render={({ errors, status, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <Field
                                    fullWidth
                                    name="nome"
                                    type="text"
                                    className={'form-control' + (errors.nome && touched.nome ? ' is-invalid' : '')}
                                    render={({ field }) => (
                                        <div>
                                            <TextField fullWidth {...field} />
                                        </div>)}
                                />
                                <ErrorMessage name="nome" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição</label>
                                <Field
                                    fullWidth
                                    name="descricao"
                                    type="text"
                                    className={'form-control' + (errors.descricao && touched.descricao ? ' is-invalid' : '')}
                                    render={({ field }) => (
                                        <div>
                                            <TextField fullWidth {...field} />
                                        </div>)}
                                />
                                <ErrorMessage name="descricao" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <Button type="submit" >Register</Button>
                                <Button 
                                type="reset"
                                className="btn btn-secondary"
                                onClick={onClose}>Cancelar</Button>
                            </div>
                        </Form>
        )}/>
             </React.Fragment>
        )
    }
}

function registrar(values, onOrgaoAdicionado, onClose) {

    API.BaseConhecimento.post('/Orgao', values).then((response) => {
        var objRetorno = {
            success: true,
            mensagemSucesso: "Dados bancários do prestador cadastrado com sucesso."
        };
   
    }, reject => {
        console.log(reject);
    });
    onOrgaoAdicionado();
    onClose();
    window.scrollTo(0, 0);
}


function alterar(values, onOrgaoAdicionado, onClose, item) {

    item.nome = values.nome;
    item.descricao = values.descricao;
    console.log("Alterar", item)
    API.BaseConhecimento.put('/Orgao', item).then((response) => {
        var objRetorno = {
            success: true,
            mensagemSucesso: "Dados bancários do prestador cadastrado com sucesso."
        };
        onOrgaoAdicionado();
        onClose();
    }, reject => {
        console.log(reject);
    });
    onClose();
    window.scrollTo(0, 0);
}