import React from 'react';
import { InputField, TextAreaField } from "../../components";


const Form = ({ handleSubmit, handleChange, handleImagesChange, product }) => {
    const descriptionLength =
      (product.description && product.description.length) || 0;
    return (
      <div>
        <form className="uk-width-1-1" onSubmit={handleSubmit}>
          <InputField
            name="title"
            value={product.title}
            placeholder="Nombre de producto"
            handleChange={handleChange}
          />
          <InputField
            name="price"
            value={product.price}
            placeholder="precio"
            handleChange={handleChange}
          />
          <TextAreaField
            name="description"
            value={product.description}
            hint={`${descriptionLength}/50`}
            handleChange={handleChange}
          />
          <TextAreaField
            name="images"
            value={product.images?.join(",")}
            handleChange={handleImagesChange}
            hint="separar imágenes por comas"
          />
          <button type="submit" className="uk-button uk-button-primary">
            Crear producto
          </button>
        </form>
      </div>
    );
  };
  export default Form;