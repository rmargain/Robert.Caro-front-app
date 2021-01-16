import React from 'react';
import { InputField, TextField } from "../../components/Index";

const Form = ({ handleSubmit, handleChange, store }) => {
    return (
      <div>
        <form className="uk-width-1-1" onSubmit={handleSubmit}>
          <InputField
            name="store_name"
            type="text"
            nombre="Nombre de la Tienda"
            value={store.store_name}
            placeholder="Nombre de la tienda"
            onChange={handleChange}
          />
          <TextField
            name="store_picture"
            value={store.store_picture}
            nombre="Imagen de la tienda"
            onChange={handleChange}
            hint="solo una imagen para la tienda"
          />
          <InputField
            name="street"
            type="text"
            nombre="Calle"
            value={store.street}
            placeholder="calle"
            onChange={handleChange}
          />
          <InputField
            name="ext_number"
            type="text"
            nombre="Número exterior"
            value={store.ext_number}
            placeholder="número exterior"
            onChange={handleChange}
          />
          <InputField
            name="int_number"
            type="text"
            nombre="Número interior"
            value={store.int_number}
            placeholder="número interior"
            onChange={handleChange}
          />
          <InputField
            name="neighborhood"
            type="text"
            nombre="Colonia o asentamiento"
            value={store.neighborhood}
            placeholder="colonia o asentamiento"
            onChange={handleChange}
          />
          <InputField
            name="municipality"
            type="text"
            nombre="Municipio"
            value={store.municipality}
            placeholder="municipio"
            onChange={handleChange}
          />
          <InputField
            name="state"
            type="text"
            nombre="Estado"
            value={store.state}
            placeholder="estado"
            onChange={handleChange}
          />
          <InputField
            name="country"
            type="text"
            nombre="Paìs"
            value={store.country}
            placeholder="país"
            onChange={handleChange}
          />
          <InputField
            name="zipcode"
            type="text"
            nombre="Codigo Postal"
            value={store.zipcode}
            placeholder="código postal"
            onChange={handleChange}
          />
          <InputField
            name="clabe"
            type="number"
            nombre="Cuenta Clabe"
            value={store.clabe}
            placeholder="cuenta clabe"
            onChange={handleChange}
          />
          <InputField
            name="bank"
            type="text"
            nombre="banco"
            value={store.bank}
            placeholder="banco"
            onChange={handleChange}
          />
          <InputField
            name="account_holder_name"
            type="text"
            nombre="Nombre del titular de la cuenta"
            value={store.account_holder_name}
            placeholder="Nombre del titular de la cuenta"
            onChange={handleChange}
          />
          <InputField
            name="phone"
            type="number"
            nombre="Teléfono"
            value={store.phone}
            placeholder="Teléfono"
            onChange={handleChange}
          />
          <InputField
            name="mobile"
            type="number"
            nombre="Celular"
            value={store.mobile}
            placeholder="celular"
            onChange={handleChange}
          />
          <InputField
            name="email"
            type="email"
            nombre="Email"
            value={store.email}
            placeholder="correo electrónico"
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