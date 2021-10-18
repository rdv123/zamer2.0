import React from "react";
import logoA from "../../src/logoA.png";
import HomeButton from "./HomeBtn";
import { useHistory } from "react-router-dom";

const Client = ({ newClientsProps, dateProps, deleteClient }) => {
  let history = useHistory();
  // const handleClick=(id)=>{
  //   console.log(id,)
  //   // history.push('/design/')
  // }
  return (
    <div>
      <ul className="list-group">
        {newClientsProps.map((client) => {
          // console.log({},'client.date')
          // console.log('new Date()',new Date())
          return (
            <div className="d-flex mt-3 shadow  test" key={client.id}>
              <div className="row">
                <div className="col-md-3  mb-3 ms-3 mt-3">
                  <img src={logoA} width="100" height="100" />
                </div>
                <div className="col-md-6">
                  Телефон:{client.tel}, ФИО:{client.clientName.firstName},
                  {client.clientName.lastName},{client.clientName.patronymic},{" "}
                  <br />
                  Адрес:{client.address.city},{client.address.street},
                  {client.address.home},{client.address.housing},
                  {client.address.apartment}, <br />
                  Статус:
                  {client.statusClient}, <br />
                  Комментарий:{client.comment}
                </div>
                <div className="position-relative col-md-3">
                  <div className="position-absolute top-0 start-0">
                    {client.date.toLocaleString()}
                  </div>
                </div>
                <div className="col-sm mb-3 ms-3">
                  {/* <HomeButton/> */}
                  <button
                    onClick={() => history.push(`/design/${client.id}`)}
                    type="button"
                    className="btn btn-success"
                  >
                    Редактировать
                  </button>
                </div>
                <div className="col-sm ">
                  <button
                    onClick={() => deleteClient(client.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Client;
