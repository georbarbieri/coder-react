import { React } from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const Login = () => {
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Esto no me parece que sea un  email")
        .required("Este campo es requerido")
        .min(5, "El minimo es de 5 caracteres")
        .max(15, "El máximo son 15 caracteres"),
      password: Yup.string()
        .required("Este campo es requerido")
        .min(5, "El minimo es de 5 caracteres")
        .max(15, "El máximo son 15 caracteres"),
    }),
    validateOnChange: false,
  });

  return (
    <div className="formulario-login" style={{ marginTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          label="Ingresa tu email"
          variant="outlined"
          value={values.email}
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Ingresa tu password"
          variant="outlined"
          value={values.password}
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />

        <Button variant="contained" type="submit">
          Ingresar
        </Button>
      </form>
      <h1>No tienes cuenta?</h1>
      <Link to="/sign-up">Registrate</Link>
    </div>
  );
};

export default Login;
