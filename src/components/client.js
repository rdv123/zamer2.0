import React from "react"

const Client = ()=>{

    return (
        <div>
            <ul className="list-group">
          {clients.map(
            (client)=>
              {
                return (
                          <div className='d-flex mt-3 shadow  test' key={client.id}>
                            <div className="row">
                              <div className="col-sm">
                                <img src={logoA} width="100" height="100"/>
                              </div>
                              <div className="col-sm test">
                                Телефон:{client.tel},
                                {client.date},
                                ФИО:{client.clientName.firstName},
                                {client.clientName.lastName},
                                {client.clientName.patronymic},
                                Адрес:{client.address.city},
                                {client.address.street},
                                {client.address.home},
                                {client.address.housing},
                                {client.address.apartment},
                                Статус:{client.statusClient}
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
