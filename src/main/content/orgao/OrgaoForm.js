import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core/es';

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
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="nome">First Name</label>
                            <TextField name="nome" type="text" className={'form-control' + (errors.nome && touched.nome ? ' is-invalid' : '')} />
                            <ErrorMessage name="nome" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Last Name</label>
                            <TextField name="descricao" type="text" className={'form-control' + (errors.descricao && touched.descricao ? ' is-invalid' : '')} />
                            <ErrorMessage name="descricao" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

// function registrar(values, setStatus, setSubmitting, setErrors, setError, props) {
//     var dados = obterValoresDoValues(values, props);

//     API.Prestador.post('/DadosFinanceiros', dados).then((response) => {
//         var objRetorno = {
//             success: true,
//             mensagemSucesso: "Dados bancários do prestador cadastrado com sucesso."
//         };

//         setStatus(objRetorno);
//         setSubmitting(false);
//         PubSub.publish("withLoading", false);
//     }, reject => {
//         if (Array.isArray(reject))
//             setErrors(reject);
//         if (typeof (reject) === "string")
//             setError(reject);
//         PubSub.publish("withLoading", false);
//         setSubmitting(false);
//     });

//     window.scrollTo(0, 0);
// }


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