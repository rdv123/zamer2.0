import React from "react"
import { useHistory } from "react-router-dom";

const Forma = ({
    pushInfoProps,
    setTelProps, 
    setFirstNameProps,
    setLastNameProps,
    setPatronymicProps,
    setCityProps,
    setStreetProps,
    setHomeProps,
    setHousingProps,
    setApartmentProps,
    telProps,firstName,lastName,patronymic,city,street,home,housing,apartment
    
 })=>{
    

    return(
        <div>
            <form className="row g-3 mt-3 text-light bg-secondary shadow">
                <div className="col-md-3">
                <label for="inputEmail4" className="form-label" >Моб. телефон</label>
                <input type="text" 
                className="form-control" 
                id="inputEmail4" 
                placeholder="+375"
                value = {telProps}
                onChange ={
                (event)=>setTelProps(event.target.value)}/>
                </div>
                <div className="col-md-3">
                <label for="inputPassword4" className="form-label">Фамилия</label>
                <input type="text"  
                className="form-control" 
                id="inputPassword4"
                value = {firstName}
                onChange ={
                (event)=>setFirstNameProps(event.target.value)}/>
                </div>
                <div className="col-md-3">
                <label for="inputPassword4" className="form-label">Имя</label>
                <input type="text"  
                className="form-control" 
                id="inputPassword4"
                value = {lastName}
                onChange ={
                (event)=>setLastNameProps(event.target.value)}/>
                </div>
                <div className="col-md-3">
                <label for="inputPassword4" className="form-label">Отчество</label>
                <input type="text" 
                className="form-control" 
                id="inputPassword4"
                value = {patronymic}
                onChange ={
                (event)=>setPatronymicProps(event.target.value)}/>
                </div>
                <div className="col-md-2">
                <label for="inputCity" className="form-label">Город/поселок</label>
                <input type="text" 
                className="form-control" 
                id="inputCity" 
                placeholder=""
                value = {city}
                onChange ={
                (event)=>setCityProps(event.target.value)}/>
                </div>
                <div className="col-md-2">
                <label for="inputAddress" className="form-label">Улица</label>
                <input type="text"
                className="form-control" 
                id="inputAddress" 
                placeholder=""
                value = {street}
                onChange ={
                (event)=>setStreetProps(event.target.value)}/>
                </div>
                <div className="col-md-1">
                <label for="inputState" className="form-label">Дом</label>
                <input type="text" 
                className="form-control"
                id="inputCity" 
                placeholder=""
                value = {home}
                onChange ={
                (event)=>setHomeProps(event.target.value)}/>
                </div>
                <div className="col-md-1">
                <label for="inputState" className="form-label">Корпус</label>
                <input type="text" 
                className="form-control" 
                id="inputCity" 
                placeholder=""
                value = {housing}
                onChange ={
                (event)=>setHousingProps(event.target.value)}/>
                </div>
                <div className="col-md-1">
                <label for="inputState" className="form-label">Квартира</label>
                <input type="text" 
                className="form-control" 
                id="inputCity" 
                placeholder=""
                value = {apartment}
                onChange ={
                (event)=>setApartmentProps(event.target.value)}/>
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
                    onClick={(e)=>pushInfoProps(e)}>Добавить</button>
                </div>
              
            </form>
        </div>
    )
}
export default Forma


