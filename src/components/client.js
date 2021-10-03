import React from "react"
import logoA from '../../src/logoA.png' ;
import HomeButton from "./HomeBtn";
import { useHistory } from "react-router-dom";

const Client = ({ newClientsProps, dateProps, })=>{
  
    let   history = useHistory()
    // const handleClick=(id)=>{
    //   console.log(id,)
    //   // history.push('/design/')
    // }
    return (
        <div>
            <ul className="list-group">
            {newClientsProps.map(
            (client)=>{
              console.log({},'client.date')
              console.log('new Date()',new Date())
                return (
                          <div className='d-flex mt-3 shadow  test' key={client.id}>
                            <div className="row">
                              <div className="col-sm">
                                <img src={logoA} width="100" height="100"/>
                              </div>
                              <div className="col-sm test">
                                Телефон:{client.tel},
                                ФИО:{client.clientName.firstName},
                                {client.clientName.lastName},
                                {client.clientName.patronymic},
                                Адрес:{client.address.city},
                                {client.address.street},
                                {client.address.home},
                                {client.address.housing},
                                {client.address.apartment},
                                Статус:{client.statusClient},
                                Комментарий:{client.comment}
                              </div>
                              <div>
                                {client.date.toLocaleString()}
                              </div>
                              <div className="col-sm">
                                {/* <HomeButton/> */}
                                 <button 
                                 onClick={()=> history.push(`/design/${client.id}`)}
                                  type="button" 
                                  className="btn btn-danger"> 
                                  Редактировать
                                </button>
                              </div>
                            </div>
                           
                          </div>
                        )
              }
            )
          }  
        </ul>
        </div>
    )
}
export default Client
