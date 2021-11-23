import React from 'react';
import { SpanTag } from './UI/SpanTag/SpanTag';
import styles from './index.module.css';
import { HTag } from './UI/HTag/HTag';
import { ATag } from './UI/ATag/ATag';
import { Label } from 'UI/Label/Label';
import { Input } from 'UI/Input/Input';

function App() {
  return (
    <form className="App">
      <div>
        <HTag tag='h1' children='Регистрация' />
        <SpanTag children='Уже есть аккаунт?' />
        <ATag children='Войти' />
      </div>
      <div>
        <div>
          <Label name='text' children='Имя' />
          <Input type='text' id='text' placeholder='Введите имя' />
        </div>
        <div>
          <Label name='email' children='Email' />
          <Input type='text' id='email' placeholder='Введите email' />
        </div>
        <div>
          <Label name='phone' children='Номер телефона' />
          <Input type='text' id='phone' placeholder='Введите номер телефона' />
        </div>
      </div>
    </form>
  );
}

export default App;
