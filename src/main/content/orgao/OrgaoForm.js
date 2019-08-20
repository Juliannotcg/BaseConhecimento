import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core/es';
import Button from '@material-ui/core/Button';
import API from '../../API/API';

export default class OrgaoForm extends React.Component {
   
    render() {
        return (
            <Formik
                initialValues={{
                    nome: '',
                    descricao: ''
                }}
                validationSchema={Yup.object().shape({
                    nome: Yup.string()
                        .required('O campo nome é obrigatório.'),
                    descricao: Yup.string()
                        .required('O campo descrição é obrigatório.')
                })}
                onSubmit={fields => {
                    registrar(fields);
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
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
                            render={({field}) => (
                                <div>
                                  <TextField {...field} />
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
                            render={({field}) => (
                                <div>
                                  <TextField {...field} />
                                </div>)} 
                            />
                            <ErrorMessage name="descricao" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button 
                            type="submit" 
                            className="btn btn-primary mr-2">Register</button>
                            <button 
                            type="reset"
                            className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

function registrar(values) {


    API.TipoPrestador.post('/Orgao', values).then((response) => {
        var objRetorno = {
            success: true,
            mensagemSucesso: "Dados bancários do prestador cadastrado com sucesso."
        };

        // setStatus(objRetorno);
        // setSubmitting(false);
        // PubSub.publish("withLoading", false);
    }, reject => {
        console.log(reject);
    });

    window.scrollTo(0, 0);
}


// const obterValoresDoValues = (values = {}, props) => {
//     const { prestador } = props;

//     const resultado = {
//         "idPrestador": prestador.id,
//         "dadoBancario": {
//             "idDadoBncro": values["idDadoBncro"],
//             "idAgencia": values["agencia"],
//             "idTipoConta": values["tipodeconta"],
//             "idPessoa": prestador.id,
//             "cdOprco": values[""],
//             "nrCnta": values["nºdaconta"],
//             "nrDvCnta": values["dv"]
//         },
//         impostos: values["impostos"]
//     };

//     return resultado;
// }