import React, { useState } from "react";

const initForm = {
  name: "",
  description: "",
  price: "",
};

const ProductForm = () => {
  const [form, setForm] = useState(initForm);

  const handleForm = async (e) => {
    e.preventDefault();

    console.log(form);

    setForm(initForm);
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="w-100" onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          name="name"
          value={form.name}
          onChange={cambio}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputDescription" className="form-label">
          Descripcion
        </label>
        <input
          type="text"
          name="description"
          className="form-control"
          id="inputDescription"
          value={form.description}
          onChange={cambio}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPrice" className="form-label">
          Precio
        </label>
        <input
          type="nomber"
          name="price"
          className="form-control"
          id="inputPrice"
          value={form.price}
          onChange={cambio}
        />
      </div>
      <div className="mb-3 text-end">
        <button type="submit" className="btn btn-success">
          Crear
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
