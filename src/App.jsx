import React, {useEffect, useState} from 'react';
import './App.css';


const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [select, setSelect] = useState('')
  const [checkbox, setCheckbox] = useState('unchecked')
  const [emailDirty, setEmailDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [selectDirty, setSelectDirty] = useState(false)
  const [checkboxDirty, setCheckboxDirty] = useState(false)
  const [emailError, setEmailError] = useState('Введено некорректное значение')
  const [nameError, setNameError] = useState('Введено некорректное значение')
  const [phoneError, setPhoneError] = useState('Введено некорректное значение')
  const [selectError, setSelectError] = useState('Введено некорректное значение')
  const [checkboxError, setCheckboxError] = useState('')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if(nameError || emailError || phoneError || selectError || checkboxError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, emailError, phoneError, selectError, checkboxError])

  const nameHandler = (e) => {
    setName(e.target.value)
    const re = /^[а-яА-ЯёЁa-zA-Z]+(?:(?: |, |-)[а-яА-ЯёЁa-zA-Z]+)*$/
    if(!re.test(e.target.value)) {
      setNameError('Введено некорректное значение')
    } else {
      setNameError('')
    }
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    if(!re.test(e.target.value)) {
      setEmailError('Введено некорректное значение')
    } else {
      setEmailError('')
    }
  }
  const phoneHandler = (e) => {
    setPhone(e.target.value)
    const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    if(!re.test(e.target.value)) {
      setPhoneError('Введено некорректное значение')
    } else {
      setPhoneError('')
    }
  }
  const selectHandler = (e) => {
    setSelect(e.target.value)
    if(!e.target.value) {
      setSelectError('Введено некорректное значение')
    } else {
      setSelectError('')
    }
  }
  const checkboxHandler = (e) => {
    
    setCheckbox(e.target.unchecked)
    if(!e.target.checked) {
      setCheckboxError('Введено некорректное значение')
    } else {
      setCheckboxError('')
    }
  }

  const blurHandler = (e) => {
    switch(e.target.name || e.target.checked) {
      case 'name': 
        setNameDirty(true)
        break
      case 'email': 
        setEmailDirty(true)
        break
      case 'phone': 
        setPhoneDirty(true)
        break
      case 'language': 
        setSelectDirty(true)
        break
      case 'checkbox': 
        setCheckboxDirty(true)
        break
    }
  }

  return (
    <div className="wrapper">
      <form>
        <div className="title">Регистрация</div>
        <div className="account">Уже есть аккаунт? <a href="#" className="enter">Войти</a></div>
        <label>Имя
          <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className="name" name="name" type="text" placeholder="Введите Ваше имя"/>
        </label>
        {(nameDirty && nameError) && <div className={"error"}>{nameError}</div>}
        <label>Email
          <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="email" name="email" type="email" placeholder="Введите Ваш email"/>
        </label>
        {(emailDirty && emailError) && <div className="error">{emailError}</div>}
        <label>Номер телефона
          <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} className="pnone" name="phone" type="phone" placeholder="Введите Ваш номер телефона"/>
        </label>
        {(phoneDirty && phoneError) && <div className="error">{phoneError}</div>}
        <div className="language">
          <label>Label
            <select onChange={e => selectHandler(e)} value={select} onBlur={e => blurHandler(e)} name="language">
              <option hidden>Язык</option>
              <option value="Русский">Русский</option>
              <option value="Английский">Английский</option>
              <option value="Китайский">Китайский</option>
              <option value="Испанский">Испанский</option>
            </select>
            {(selectDirty && selectError) && <div className="error">{selectError}</div>}
          </label>
        </div>
        <div className="checkbox">
          <input onChange={e => checkboxHandler(e)} value={checkbox} onClick={e => blurHandler(e)} className="input-checkbox" type="checkbox" name="checkbox"/>
          <span>Принимаю <a href="#" className="options">условия</a> использования</span>
        </div>
        {(checkboxDirty && checkboxError) && <div className="error-checkbox">{checkboxError}</div>}
        <button onClick={e => e.preventDefault()} disabled={!formValid} type="submit" className="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default App;
