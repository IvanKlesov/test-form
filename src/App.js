import React, { useState } from 'react';
import { SpanTag } from './UI/SpanTag/SpanTag';
import styles from './index.module.css';
import { HTag } from './UI/HTag/HTag';
import { Link } from './UI/Link/Link';
import { Label } from 'UI/Label/Label';
import { Input } from 'UI/Input/Input';
import { Select } from 'UI/Select/Select';
import { Button } from 'UI/Button/Button';
import { Warning } from 'UI/Warning/Warning';

function App() {
  const users = [];
  const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    rules: false
  });

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validLanguage, setValidLanguage] = useState(false);
  const [validRules, setValidRules] = useState(false);
  const [checkForm, setCheckForm] = useState(false);

  const changeName = (e) => {
    e.preventDefault();

    const reg = /^[A-Za-z]+$/;
    if (reg.test(e.target.value)) {
      setData({...data, name: e.target.value});
      setValidName(true);
    } else {
      setValidName(false);
    }
  }

  const changeEmail = (e) => {
    e.preventDefault();

    const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    if (reg.test(e.target.value)) {
      setData({...data, email: e.target.value})
      setValidEmail(true);
    } else {
      setValidEmail(false);
    };    
  }

  const changePhone = (e) => {
    e.preventDefault();

    const reg = /^\d[\d\(\)\ -]{4,14}\d$/;
    if (reg.test(e.target.value)) {
      setData({...data, phone: e.target.value})
      setValidPhone(true);
    } else {
      setValidPhone(false);
    };    
  }

  const changeLanguage = (e) => {
    if (e.target.value) {
      setData({...data, language: e.target.value})
      setValidLanguage(true);
    } else {
      setValidLanguage(false);
    };    
  }

  const acceptRules = (e) => {
    if (e.target.checked) {
      setData({...data, rules: true})
      setValidRules(true);
    } else {
      setValidRules(false);
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (validName && validEmail && validPhone && validLanguage && validRules) {
      users.push(data);
      document.forms[0].reset();
    }
    setCheckForm(true);    

  }

  return (
    <form>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <HTag tag='h1' children='Регистрация' />
          <SpanTag children='Уже есть аккаунт?' />
          <Link href='#' children='Войти' />
        </div>
        <div  className={styles.main}>
          <div className={styles.inputBlock}>
            <Label name='text' children='Имя' />
            <Input type='text' id='text' placeholder='Введите имя' onChange={changeName} />
            {(!validName && checkForm) && <Warning name='text' children='Введите корректное имя' />}
          </div>
          <div className={styles.inputBlock}>
            <Label name='email' children='Email' />
            <Input type='text' id='email' placeholder='Введите email' onChange={changeEmail} />
            {(!validEmail && checkForm) && <Warning name='text' children='Введите корректный email' />}
          </div>
          <div className={styles.inputBlock}>
            <Label name='phone' children='Номер телефона' />
            <Input type='text' id='phone' placeholder='Введите номер телефона' onChange={changePhone} />
            {(!validPhone && checkForm) && <Warning name='text' children='Введите корректный номер телефона' />}
          </div>
          <div className={styles.inputBlock}>
            <Label name='language' children='Язык' />
            <Select options={languages}  id='language'  defaultValue='Язык' onChange={changeLanguage}  />
            {(!validLanguage && checkForm) && <Warning name='select' children='Выберите язык' />}
          </div>
        </div>
        <div className={styles.checkboxDiv}>
          <Input type='checkbox' id='rules' onChange={acceptRules} />
          <Label name='rules'>
            Принимаю
            <Link href='#' children='условия ' />
            использования
          </Label> 
          {(!validRules && checkForm) && <Warning name='checkbox' children='Необходимо принять условия использования' />}
        </div>
        <Button children='Зарегистрироваться' onClick={submitForm} />
      </div>
    </form>
  );
}

export default App;
