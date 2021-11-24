import React from 'react';
import { SpanTag } from './UI/SpanTag/SpanTag';
import styles from './index.module.css';
import { HTag } from './UI/HTag/HTag';
import { ATag } from './UI/ATag/ATag';
import { Label } from 'UI/Label/Label';
import { Input } from 'UI/Input/Input';
import { Select } from 'UI/Select/Select';
import { Button } from 'UI/Button/Button';

function App() {
  const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
  return (
    <form>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <HTag tag='h1' children='Регистрация' />
          <SpanTag children='Уже есть аккаунт?' />
          <ATag children='Войти' />
        </div>
        <div  className={styles.main}>
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
          <div>
            <Label name='language' children='Язык' />
            <Select options={languages}  id='language'  defaultValue='Язык'  />
          </div>
        </div>
        <div className={styles.checkboxDiv}>
          <Input type='checkbox' id='rules' />
          <Label name='rules' children='Принимаю условия использования' />
        </div>
        <Button children='Зарегистрироваться' />
      </div>
    </form>
  );
}

export default App;
