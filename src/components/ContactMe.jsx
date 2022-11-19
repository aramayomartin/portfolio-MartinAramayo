import React from "react";
import { Formik } from "formik";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import style from "../style.module.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function ContactMe() {
  const theme = useSelector((s) => s.currentTheme);
  const { t } = useTranslation();
  return (
    <div id="contact-section">
      <Container className={`p-5`}>
        <h1>{t("contact.title")}</h1>
        <Card>
          <CardBody
            className={theme ? style.contactMeDark : style.contactMeLight}
          >
            <Formik
              initialValues={{
                name: "",
                email: "",
                mensaje: "",
              }}
              validate={(values) => {
                const errors = {};

                // We need a name
                if (!values.name) errors.name = t("contact.requiredField");

                // We need a valid e-mail
                if (!values.email) errors.email = t("contact.requiredField");
                else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                )
                  errors.email = t("contact.invalidEmail");

                // We need a message
                if (!values.mensaje)
                  errors.mensaje = t("contact.requiredField");
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
                        placeholder={t("contact.placeholders.name")}
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
                        placeholder={t("contact.placeholders.email")}
                        invalid={errors.email && touched.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for="mensaje">{t("contact.message")}</Label>
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

                    <Button color="info" type="submit" disabled={isSubmitting}>
                      {isSubmitting
                        ? t("contact.loading")
                        : t("contact.submit")}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
