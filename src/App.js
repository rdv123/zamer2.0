import logoA from './logoA.png';
import { useState } from 'react';
import './App.css';
import Client from './components/client';



let count = 3
function App() {
const [tel, setTel] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [patronymic, setPatronymic] = useState('')
const [city, setCity] = useState('')
const [street, setStreet] = useState('')
const [home, setHome] = useState('')
const [housing, setHousing] = useState('')
const [apartment, setApartment] = useState('')

const [clients,setClients] = useState( 
  [
    {
      id:'1',
      tel:'333333333',
      date:'13.09.21', 
      marked: false, 
      clientName: {
                  firstName:'Вася',
                  lastName:'Пупкин', 
                  patronymic:'Иванович'
                }, 
      address:{
                city:'Гродно',
                street:'Советская',
                home:'1',
                housing:'2',
                apartment:'33', 
              },
      statusClient:'Замер'
    },
    {
      id:'2',
      tel:'4444444444',
      date:'13.09.21', 
      marked: false, 
      clientName: {
                  firstName:'Петя',
                  lastName:'Иванов', 
                  patronymic:'Иванович'
                }, 
      address:{
                city:'Гродно',
                street:'Клецкова',
                home:'33',
                housing:'2',
                apartment:'44', 
              },
      statusClient:'Думает'
    },
  ]
)
let d = new Date()

let pushInfo = (e)=>{
  e.preventDefault()
  const newObj = {
    id:count,
    tel:tel,
    // date:'13.09.21', 
    marked: false, 
    clientName: {
                firstName:firstName,
                lastName:lastName, 
                patronymic:patronymic
              }, 
    address:{
              city:city,
              street:street,
              home:home,
              housing:housing,
              apartment:apartment, 
            },
    //statusClient:statusClient
  }
  count++
  setClients([newObj,...clients])
  setTel('')
  setFirstName('')
  setLastName('')
  setPatronymic('')
  setCity('')
  setStreet('')
  setHome('')
  setHousing('')
  setApartment('')


console.log('tel',tel)
 
}
  return (
    <div className="container mt-3">
     
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-6 text-light" href="#"> 
           <img src={logoA} width="55" height="50"/>
          </a>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <a className="nav-link text-light" >Текущая дата: {"11.11.11"}</a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Замеры
                  <span class="badge bg-secondary">4</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Думает
                  <span class="badge bg-secondary">5</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Монтаж
                  <span class="badge bg-secondary">3</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Всего
                  <span class="badge bg-secondary">12</span>
                </a>
              </li>
            </ul>
            <form className="d-flex ms-auto">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Найти</button>
            </form>

          </div>
        </div>
      </nav>
      <form className="row g-3 mt-3 text-light bg-secondary shadow">
        <div className="col-md-3">
          <label for="inputEmail4" className="form-label" >Моб. телефон</label>
          <input type="text" 
          className="form-control" 
          id="inputEmail4" 
          placeholder="+375"
          value = {tel}
          onChange ={
          (event)=>setTel(event.target.value)
          
          }/>
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">Фамилия</label>
          <input type="text"  
          className="form-control" 
          id="inputPassword4"
          value = {firstName}
          onChange ={
          (event)=>setFirstName(event.target.value)}/>
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">Имя</label>
          <input type="text"  
          className="form-control" 
          id="inputPassword4"
          value = {lastName}
          onChange ={
          (event)=>setLastName(event.target.value)}/>
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">Отчество</label>
          <input type="text" 
          className="form-control" 
          id="inputPassword4"
          value = {patronymic}
          onChange ={
          (event)=>setPatronymic(event.target.value)}/>
        </div>
        <div className="col-md-2">
          <label for="inputCity" className="form-label">Город/поселок</label>
          <input type="text" 
          className="form-control" 
          id="inputCity" 
          placeholder=""
          value = {city}
          onChange ={
          (event)=>setCity(event.target.value)}/>
        </div>
        <div className="col-md-2">
          <label for="inputAddress" className="form-label">Улица</label>
          <input type="text"
          className="form-control" 
          id="inputAddress" 
          placeholder=""
          value = {street}
          onChange ={
          (event)=>setStreet(event.target.value)}/>
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">Дом</label>
          <input type="text" 
          className="form-control"
          id="inputCity" 
          placeholder=""
          value = {home}
          onChange ={
          (event)=>setHome(event.target.value)}/>
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">Корпус</label>
          <input type="text" 
          className="form-control" 
          id="inputCity" 
          placeholder=""
          value = {housing}
          onChange ={
          (event)=>setHousing(event.target.value)}/>
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">Квартира</label>
          <input type="text" 
          className="form-control" 
          id="inputCity" 
          placeholder=""
          value = {apartment}
          onChange ={
          (event)=>setApartment(event.target.value)}/>
        </div>
        <div className="col-md-2">
          <label for="inputState" className="form-label">Статус</label>
          <select id="inputState" className="form-select">
            <option selected>Выберите...</option>
            <option>Замер</option>
            <option>Думает</option>
            <option>Монтаж</option>
            <option>Установлен</option>
          </select>
        </div>
        <div className="col-md-3">
          <label for="inputAddress" className="form-label">Комментарий</label>
          <input type="text" className="form-control" id="inputAddress" placeholder=""/>
        </div>
        
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
              Проверить 
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" 
          className="btn btn-primary mb-2"
          onClick={(e)=>pushInfo(e)}>Добавить</button>
        </div>
      </form>

      <div> 
        <Client />
      </div>
    </div>
  );
}

export default App;
