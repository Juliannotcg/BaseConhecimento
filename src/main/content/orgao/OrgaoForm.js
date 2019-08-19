import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
                        .required('First Name is required'),
                    descricao: Yup.string()
                        .required('Last Name is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="nome">First Name</label>
                            <Field name="nome" type="text" className={'form-control' + (errors.nome && touched.nome ? ' is-invalid' : '')} />
                            <ErrorMessage name="nome" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Last Name</label>
                            <Field name="descricao" type="text" className={'form-control' + (errors.descricao && touched.descricao ? ' is-invalid' : '')} />
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
