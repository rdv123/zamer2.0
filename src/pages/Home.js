import React from 'react'
import { useState } from 'react';
import logoA from '../logoA.png'
import Client from '../components/Client';
import Forma from '../components/Forma';
import { NavLink } from 'react-router-dom';

  function Home( {setClients,clients}) {
    const [tel, setTel] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [home, setHome] = useState('')
    const [housing, setHousing] = useState('')
    const [apartment, setApartment] = useState('')

   
    let d = new Date()
    let client

    // let pushInfo = (e) => {
    //   e.preventDefault()
    //   const newObj = {
    //     id: count,
    //     tel: tel,
    //     // date:'13.09.21', 
    //     marked: false,
    //     clientName: {
    //       firstName: firstName,
    //       lastName: lastName,
    //       patronymic: patronymic
    //     },
    //     address: {
    //       city: city,
    //       street: street,
    //       home: home,
    //       housing: housing,
    //       apartment: apartment,
    //     },
    //     //statusClient:statusClient
    //   }
    //   count++
    //   setClients([newObj, ...clients])
    //   setTel('')
    //   setFirstName('')
    //   setLastName('')
    //   setPatronymic('')
    //   setCity('')
    //   setStreet('')
    //   setHome('')
    //   setHousing('')
    //   setApartment('')

    //   console.log('newObj', newObj)

    // }
    return (
      <div className="container mt-3">

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand fs-6 text-light" href="#">
              <img src={logoA} width="55" height="50" />
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link text-light" >Текущая дата: {d.toLocaleString()}</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Замеры
                    <span className="badge bg-secondary">4</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Думает
                    <span className="badge bg-secondary">5</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-light" href="#" tabindex="-1" aria-disabled="true">Монтаж
                    <span className="badge bg-secondary">3</span>
                  </a>
                </li>
                <li className="nav-item">
                <NavLink to="/about"  className="nav-link text-light"  >About</NavLink>

        
                </li>
              </ul>
              <form className="d-flex ms-auto">
                <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Найти</button>
              </form>

            </div>
          </div>
        </nav>
        <div>
          <Forma
          setClients={setClients} clients={clients}
            // pushInfoProps={pushInfo}
          />

        </div>

        <div>
          <Client  clientProps={client}
            newClientsProps={clients}
            dateProps={d}
             />
        </div>
      </div>
    );
  }

export default Home;
