'use client';   
import React, { useState } from 'react';

function Basico() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'El nombre es requerido';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'El email es requerido';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'El teléfono es requerido';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'El mensaje es requerido';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Procesar el formulario
      console.log('Formulario enviado', formData);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
          </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input 
            type="text" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Telefono:
          </label>
          <input 
            type="text" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mensaje:
          </label>
          <input 
            type="text" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
          {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <input 
            type="submit" 
            value="Submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          />
        </div>
      </form>
    </div>
  );
}

export default Basico;