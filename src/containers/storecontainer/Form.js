import React from 'react';
import { InputField, TextField } from "../../components/index";


const Form = ({ handleSubmit, handleChange, store }) => {
    return (
      <div>
        <form className="uk-width-1-1" onSubmit={handleSubmit}>
          <InputField
            name="Nombre de tienda"
            type="text"
            value={store.store_name}
            placeholder="Nombre de la Tienda"
            onChange={handleChange}
          />
          <TextField
            name="Imagen de tu negocio"
            value={store.store_picture}
            onChange={handleChange}
            hint="solo una imagen para la tienda"
          />
          <InputField
            name="Calle"
            type="text"
            value={store.street}
            placeholder="Calle"
            onChange={handleChange}
          />
          <InputField
            name="Número exterior"
            type="text"
            value={store.ext_number}
            placeholder="Número exterior"
            onChange={handleChange}
          />
          <InputField
            name="Número interior"
            type="text"
            value={store.int_number}
            placeholder="Número interior"
            onChange={handleChange}
          />
          <InputField
            name="Colonia"
            type="text"
            value={store.neighborhood}
            placeholder="Colonia o asentamiento"
            onChange={handleChange}
          />
          <InputField
            name="Municipio"
            type="text"
            value={store.municipality}
            placeholder="Municipio"
            onChange={handleChange}
          />
          <InputField
            name="Estado"
            type="text"
            value={store.state}
            placeholder="Estado"
            onChange={handleChange}
          />
          <InputField
            name="País"
            type="text"
            value={store.country}
            placeholder="País"
            onChange={handleChange}
          />
          <InputField
            name="C.P."
            type="text"
            value={store.zipcode}
            placeholder="Código postal"
            onChange={handleChange}
          />
          <InputField
            name="Cuenta Clabe"
            type="number"
            value={store.clabe}
            placeholder="Cuenta clabe"
            onChange={handleChange}
          />
          <InputField
            name="Banco"
            type="text"
            value={store.bank}
            placeholder="Banco"
            onChange={handleChange}
          />
          <InputField
            name="Titular de la cuenta"
            type="text"
            value={store.account_holder_name}
            placeholder="Nombre del titular de la cuenta"
            onChange={handleChange}
          />
          <InputField
            name="Teléfono"
            type="number"
            value={store.phone}
            placeholder="Teléfono"
            onChange={handleChange}
          />
          <InputField
            name="Celular"
            type="number"
            value={store.mobile}
            placeholder="Celular"
            onChange={handleChange}
          />
          <InputField
            name="e-mail"
            type="email"
            value={store.email}
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
          <button type="submit" className="uk-button uk-button-primary">
            Crear Tienda
          </button>
        </form>
      </div>
    );
  };
  export default Form;