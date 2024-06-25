import React from "react";

const FormComponent = () => {
  return (
    <div>
      <form action="" />
      <input type="text" placeholder="Введите ваше имя" />
      <input type="email" placeholder="Введите вашу почту" />
      <button type="submit">Отправить</button>
      <button type="reset">Стереть форму</button>
    </div>
  );
};

export default FormComponent;
