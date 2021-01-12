import React from 'react';
import { InputField, TextField } from "../../components/Index";


const Form = ({ handleSubmit, handleChange, store }) => {
    return (
      <div>
        <form className="uk-width-1-1" onSubmit={handleSubmit}>
          <InputField
            name="store_name"
            type="text"
            value={store.store_name}
            placeholder="Nombre de la Tienda"
            onChange={handleChange}
          />
          <TextField
            name="store_picture"
            value={store.store_picture}
            onChange={handleChange}
            hint="solo una imagen para la tienda"
          />
          <InputField
            name="street"
            type="text"
            value={store.street}
            placeholder="calle"
            onChange={handleChange}
          />
          <InputField
            name="ext_number"
            type="text"
            value={store.ext_number}
            placeholder="número exterior"
            onChange={handleChange}
          />
          <InputField
            name="int_number"
            type="text"
            value={store.int_number}
            placeholder="número interior"
            onChange={handleChange}
          />
          <InputField
            name="neighborhood"
            type="text"
            value={store.neighborhood}
            placeholder="colonia o asentamiento"
            onChange={handleChange}
          />
          <InputField
            name="municipality"
            type="text"
            value={store.municipality}
            placeholder="municipio"
            onChange={handleChange}
          />
          <InputField
            name="state"
            type="text"
            value={store.state}
            placeholder="estado"
            onChange={handleChange}
          />
          <InputField
            name="country"
            type="text"
            value={store.country}
            placeholder="país"
            onChange={handleChange}
          />
          <InputField
            name="zipcode"
            type="text"
            value={store.zipcode}
            placeholder="código postal"
            onChange={handleChange}
          />
          <InputField
            name="clabe"
            type="number"
            value={store.clabe}
            placeholder="cuenta clabe"
            onChange={handleChange}
          />
          <InputField
            name="bank"
            type="text"
            value={store.bank}
            placeholder="banco"
            onChange={handleChange}
          />
          <InputField
            name="account_holder_name"
            type="text"
            value={store.account_holder_name}
            placeholder="Nombre del titular de la cuenta"
            onChange={handleChange}
          />
          <InputField
            name="phone"
            type="number"
            value={store.phone}
            placeholder="Teléfono"
            onChange={handleChange}
          />
          <InputField
            name="mobile"
            type="number"
            value={store.mobile}
            placeholder="celular"
            onChange={handleChange}
          />
          <InputField
            name="email"
            type="email"
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