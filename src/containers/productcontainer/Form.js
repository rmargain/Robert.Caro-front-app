import React from 'react';
import { InputField, TextField } from "../../components/";


const Form = ({ handleSubmit, handleChange, handleImagesChange, product }) => {
    const descriptionLength =
      (product.description && product.description.length) || 0;
    return (
      <div>
        <form className="uk-width-1-1" onSubmit={handleSubmit}>
          <InputField
            name="title"
            type="text"
            value={product.title}
            placeholder="Nombre de producto"
            handleChange={handleChange}
          />
          <InputField
            name="price"
            type="number"
            value={product.price}
            placeholder="precio"
            handleChange={handleChange}
          />
          <TextField
            name="description"
            type="text"
            value={product.description}
            hint={`${descriptionLength}/50`}
            handleChange={handleChange}
          />
          <TextField
            name="images"
            value={product.images?.join(",")}
            handleChange={handleImagesChange}
            hint="separar imágenes por comas"
          />
          <InputField
            name="inventory"
            type="number"
            value={product.inventory}
            placeholder="inventario"
            handleChange={handleChange}
          />
          <button 
          onClick= {handleSubmit}
          type="submit" className="uk-button uk-button-primary">
          Crear producto
          </button>
        </form>
      </div>
    );
  };
  export default Form;