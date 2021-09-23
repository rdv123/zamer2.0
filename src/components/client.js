import React from "react"

const Client = (clientProps, newClientsProps)=>{

    return (
        <div>
            <ul className="list-group">
          {newClientsProps.map(
            (clientProps)=>
              {
                return (
                          <div className='d-flex mt-3 shadow  test' key={clientProps.id}>
                            <div className="row">
                              <div className="col-sm">
                                <img src={logoA} width="100" height="100"/>
                              </div>
                              <div className="col-sm test">
                                Телефон:{clientProps.tel},
                                ФИО:{clientProps.clientName.firstName},
                                {clientProps.clientName.lastName},
                                {clientProps.clientName.patronymic},
                                Адрес:{clientProps.address.city},
                                {clientProps.address.street},
                                {clientProps.address.home},
                                {clientProps.address.housing},
                                {clientProps.address.apartment},
                                Статус:{clientProps.statusClient}
                              </div>
                              <div>
                                {d.toLocaleString()}
                              </div>
                              <div className="col-sm">
                                 <button 
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
