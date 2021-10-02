import React from "react"
import { useHistory } from "react-router-dom";
import { useState } from "react";


let count = 3
const Forma = ({
    setClients,
    clients,
    dateProps
 })=>{
    const [tel, setTel] = useState('')
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [patronymic, setPatronymic] = useState('')
        const [city, setCity] = useState('')
        const [street, setStreet] = useState('')
        const [home, setHome] = useState('')
        const [housing, setHousing] = useState('')
        const [apartment, setApartment] = useState('')
        const [statusClient, setStatusClient] = useState('')

        // let dateClient = dateProps
        let pushInfo = (e) => {
            e.preventDefault()
            const newObj = {
              id: count,
              tel: tel,
              date: new Date(), 
              marked: false,
              clientName: {
                firstName: firstName,
                lastName: lastName,
                patronymic: patronymic
              },
              address: {
                city: city,
                street: street,
                home: home,
                housing: housing,
                apartment: apartment,
              },
              statusClient:statusClient
            }
            count++
            setClients([newObj, ...clients])
            setTel('')
            setFirstName('')
            setLastName('')
            setPatronymic('')
            setCity('')
            setStreet('')
            setHome('')
            setHousing('')
            setApartment('')
            setStatusClient('Выберите...')
      
            // console.log('newObj', newObj)
          }

// console.log('фамилия',firstName)
    return(
        <div>
            <form className="row g-3 mt-3 text-light bg-secondary shadow">
                <div className="col-md-3">
                <label for="inputEmail4" className="form-label" >Моб. телефон</label>
                <input type="text" 
                className="form-control" 
                id="inputEmail4" 
                placeholder="+375"
                value = {tel}
                onChange ={
                (event)=>setTel(event.target.value)}/>
                </div>
                <div className="col-md-3">
                <label for="inputPassword4" className="form-label">Имя</label>
                <input type="text"  
                className="form-control" 
                id="inputPassword4"
                value = {firstName}
                onChange ={
                (event)=>setFirstName(event.target.value)}/>
                </div>
                <div className="col-md-3">
                <label for="inputPassword4" className="form-label">Фамилия</label>
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
                <select 
                    id="inputState" 
                    className="form-select"
                    value={statusClient}
                    onChange ={
                        (event)=>setStatusClient(event.target.value)}>
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
        </div>
    )
}
export default Forma


