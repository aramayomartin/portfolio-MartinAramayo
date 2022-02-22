import React from 'react';
import { Formik } from 'formik';
import { Button, Card, CardBody, Container, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import style from '../style.module.css';
import {useSelector} from 'react-redux';
export default function ContactMe() {
    const theme=useSelector(s=>s.currentTheme);
    return (
        <div id='contact-section'>
            <Container className={`p-5`}>
                <h1>Contacto</h1>
                <Card>
                    <CardBody className={theme ? style.contactMeDark:style.contactMeLight}>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                mensaje: "",
                            }}
                            validate={(values) => {
                                const errors = {};

                                // We need a name
                                if (!values.name) errors.name = "Campo requerido";

                                // We need a valid e-mail
                                if (!values.email) errors.email = "Campo requerido";
                                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                                    errors.email = "Email invalido";

                                // We need a message
                                if (!values.mensaje) errors.mensaje = "Campo requerido";

                                console.log({ values, errors });

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 0);
                            }}
                        >
                            {(props) => {
                                const {
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* y otras más */
                                } = props;
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Nombre"
                                                invalid={errors.name && touched.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                            <FormFeedback>{errors.name}</FormFeedback>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                invalid={errors.email && touched.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <FormFeedback>{errors.email}</FormFeedback>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="mensaje">Mensaje</Label>
                                            <Input
                                                type="textarea"
                                                name="mensaje"
                                                invalid={errors.mensaje && touched.mensaje}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.mensaje}
                                            />
                                            <FormFeedback>{errors.mensaje}</FormFeedback>
                                        </FormGroup>

                                        <Button color='info' type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? `Loading` : `Submit`}
                                        </Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}