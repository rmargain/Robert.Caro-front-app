import React from 'react';
import { InputField, TextField } from "../../components/Index";



const Form = ({ handleSubmit, handleChange, handleImagesChange, product }) => {
    const descriptionLength =
      (product.description && product.description.length) || 0;
    return (
    
      <div>
      {console.log(product._id)}
        <form className="uk-width-1-1" onSubmit={handleSubmit}>
          <InputField
            name="title"
            type="text"
            nombre="Título del Producto"
            value={product.title}
            placeholder="Nombre de producto"
            handleChange={handleChange}
          />
          <InputField
            name="price"
            type="number"
            nombre="Precio"
            value={product.price}
            placeholder="Precio"
            handleChange={handleChange}
          />
          <TextField
            name="description"
            type="text"
            nombre="Descripción"
            value={product.description}
            hint={`${descriptionLength}/50`}
            handleChange={handleChange}
          />
          <TextField
            name="images"
            value={product.images?.join(",")}
            nombre="Imágenes"
            handleChange={handleImagesChange}
            hint="Separar imágenes por comas"
          />
          <InputField
            name="inventory"
            type="number"
            nombre="Inventario"
            value={product.inventory}
            placeholder="Inventario"
            handleChange={handleChange}
          />
          
          { product._id !== undefined ? (
            <button 
          onClick= {handleSubmit}
          type="submit" className="uk-button uk-button-primary">
          Confirmar Cambios
          </button>
          ) : (
             <button 
          onClick= {handleSubmit}
          type="submit" className="uk-button uk-button-primary">
          Crear producto
          </button>
          )
          }
        </form>
      </div>
    );
  };
  export default Form;