import React from "react";
import { useForm } from "react-hook-form";

const Formulario = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log("====================================");
    console.log(" - - - ", data);
    e.target.reset();
    props.agregaUsuario(data);
    console.log("====================================");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ________________________________________________ */}
      <input
        type="text"
        name="nombre"
        className="form-control my-2"
        placeholder="Ingrese el Nombre"
        aria-invalid={errors.nombre ? "true" : "false"}
        {...register("nombre", {
          required: true,
        })}
      />
      {errors.nombre && errors.nombre.type === "required" && (
        <span
          className={"alert alert-danger alert-dismissible fade show"}
          role="alert"
        >
          El nombre es requerido
        </span>
      )}

      {/* ________________________________________________ */}
      <input
         type="email" 
        name="email"
        className="form-control my-2"
        placeholder="Ingrese el Email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", {
          required: true,
        })}
      />
      {errors.email && errors.email.type === "required" && (
        <span
          className={"alert alert-danger alert-dismissible fade show"}
          role="alert"
        >
          El email es requerido
        </span>
      )}

      {/* ________________________________________________ */}
      <input
        type="date"
        name="fecha"
        className="form-control my-2"
        placeholder="Ingrese la Fecha de Nacimiento"
        aria-invalid={errors.fecha ? "true" : "false"}
        {...register("fecha", {
          required: true,
        })}
      />
      {errors.fecha && errors.fecha.type === "required" && (
        <span
          className={"alert alert-danger alert-dismissible fade show"}
          role="alert"
        >
          El Fecha es requerido
        </span>
      )}

      {/* ________________________________________________ */}
      <input
        type="text"
        name="calle"
        className="form-control my-2"
        placeholder="Ingrese la Calle"
        aria-invalid={errors.calle ? "true" : "false"}
        {...register("calle", {
          required: true,
        })}
      />
      {errors.calle && errors.calle.type === "required" && (
        <span
          className={"alert alert-danger alert-dismissible fade show"}
          role="alert"
        >
          La calle es requerida
        </span>
      )}

      {/* ________________________________________________ */}
      <input
        type="number"
        name="numero"
        className="form-control my-2"
        placeholder="Ingresa el Número"
        aria-invalid={errors.numero ? "true" : "false"}
        {...register("numero", {
          required: true,
        })}
      />
      {errors.numero && errors.numero.type === "required" && (
        <span
          className={"alert alert-danger alert-dismissible fade show"}
          role="alert"
        >
          El Número es requerido
        </span>
      )}

      {/* ________________________________________________ */}
      <input
        type="text"
        name="colonia"
        className="form-control my-2"
        placeholder="Ingrese la Colonia"
        aria-invalid={errors.colonia ? "true" : "false"}
        {...register("colonia", {
          required: true,
        })}
      />
      {errors.colonia && errors.colonia.type === "required" && (
        <span
          className={"alert alert-danger alert-dismissible fade show"}
          role="alert"
        >
          La Colonia es requerida
        </span>
      )}

      <button className="btn btn-primary" type="submit">
        Add new user
      </button>
    </form>
  );
};

export default Formulario;
