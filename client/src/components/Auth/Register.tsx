import React, { FormEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/ContextProvider";
import { Comm } from "../Comm/comm";

const Register = ({ closeModal }: any) => {

  const AppCtx = useContext(AppContext);
  if (AppCtx === null) { return; }
  const { user, setUser, modalVisible, setModalVisibility, modalName, setModalName, formError, setFormError } = {...AppCtx}
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let user = {
      nickname: e.target[0].value,
      password: e.target[1].value,
      mail: e?.target[2].value,
      birthday: e?.target[3].value,
      phone: e?.target[4].value,
    };

    let result = await Comm("COARD", "User", { user: user }, "/api/addUser");

    (result.error)
      ? setFormError({ ...result })
      : closeModal() && sessionStorage.setItem("userSession", JSON.stringify(formError, null, '\t'));

    console.log(sessionStorage.getItem("userSession"));
  };

  const printError = (flag: string) => {
    if (!formError) return;
    if (formError.error) {
      var error: { errorMessage: string; errorFlag?: string; result?: string; } = { errorMessage: "" };

      formError.result.map((err) => {
        if (err.errorFlag === flag) {
          error = err;
        }
      });
      if (error.errorMessage === "") {
        return
      }

      return (
        <>
          <div className="form-error">{error.errorMessage}</div>
        </>
      )
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} method="POST" className="register-form">
        <label htmlFor="nickname">
          <input
            name="nickname"
            placeholder="nickname"
            id="nickname"
            pattern="^\w[^\d]{2}[\w\d&_@#~\\\\-]{0,14}$"
            title="Votre nom doit commencer par une lettre, contenir au minimum 2 chiffres et un caractère spécial & _ @ # ~ \ -"
            required
          />
          {printError("Name")}
        </label>
        <br />
        <label htmlFor="pwd">
          <input
            type="password"
            name="pwd"
            placeholder="password"
            id="pwd"
            pattern="^\S*(?=\S{8,})(?=\S*\w)(?=\S*[\d])(?=\S*[&'\-_$\\%!@?])\S*$"
            required
          />
        </label>
        <br />
        <label htmlFor="email">
          <input type="email" name="email" placeholder="email" id="email" />*
        </label>
        <br />
        <label htmlFor="birthday">
          <input type="date" name="birthday" id="birthday" />*
        </label>
        <br />
        <label htmlFor="phone">
          <input
            type="tel"
            name="phone"
            placeholder="phone number"
            id="phone"
            pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          />
        </label>
        <br />
        <button type="submit">Valider</button>
      </form>
    </>
  );
};
export default Register
