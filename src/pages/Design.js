import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import axios from "axios";

const Design = ({ updateCom }) => {
  let history = useHistory();
  // const [client,setClient] = useState(null)
  //    const id ='2'
  const { id } = useParams();

  console.log("id", id);

  // const [client, setClient] = useState({});
  const [tel, setTel] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [home, setHome] = useState("");
  const [housing, setHousing] = useState("");
  const [apartment, setApartment] = useState("");
  const [statusClient, setStatusClient] = useState("");
  const [comment, setComment] = useState("");
  const [area, setArea] = useState("");
  const [perimeter, setPerimeter] = useState("");

  useEffect(() => {
    getClients();
  }, []);

  const commonUpdate = (e) => {
    // e.preventDefault();
    // const newClient = {
    //   ...client,
    //   tel,
    //   clientName: { firstName, lastName, patronymic },
    //   address: { city, street, home, housing, apartment },
    //   statusClient: statusClient,
    //   comment: comment,
    //   area: area,
    //   perimeter: perimeter,
    // };
    // console.log("Client", client);
    // // console.log('newClient',newClient)
    // updateCom(id, newClient);
  };
  const getClients = async () => {
    const res = await axios.get(
      "https://zamer-2-0-default-rtdb.firebaseio.com/clients.json"
    );
    if (res.data === null) {
      return;
    }
    console.log("response axios", res);
    console.log("response axios data", res.data);

    const keys = Object.keys(res.data);
    console.log("keys", keys);

    const clients = keys.map((key) => {
      return { ...res.data[key], id: key };
    });
    console.log("clients1111", clients);
    // setClients(clients);
    console.log("idDDDD", clients);
    let client = clients.find((client) => client.id == id);
    console.log("client", client);
    setTel(client.tel);
    setFirstName(client.clientName.firstName);
    setLastName(client.clientName.lastName);
    setPatronymic(client.clientName.patronymic);
    setCity(client.address.city);
    setStreet(client.address.street);
    setHome(client.address.home);
    setHousing(client.address.housing);
    setApartment(client.address.apartment);
    setStatusClient(client.statusClient);
    setComment(client.comment);
    setArea(client.area);
    setPerimeter(client.perimeter);
  };

  return (
    <div className="container">
      <form className="row g-3 mt-3 text-light bg-info shadow">
        <div className="col-md-3">
          <label for="inputEmail4" className="form-label">
            Моб. телефон
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="+375"
            value={tel}
            onChange={(event) => setTel(event.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">
            Имя
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">
            Фамилия
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">
            Отчество
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            value={patronymic}
            onChange={(event) => setPatronymic(event.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label for="inputCity" className="form-label">
            Город/поселок
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder=""
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label for="inputAddress" className="form-label">
            Улица
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder=""
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">
            Дом
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder=""
            value={home}
            onChange={(event) => setHome(event.target.value)}
          />
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">
            Корпус
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder=""
            value={housing}
            onChange={(event) => setHousing(event.target.value)}
          />
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">
            Квартира
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder=""
            value={apartment}
            onChange={(event) => setApartment(event.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label for="inputState" className="form-label">
            Статус
          </label>
          <select
            id="inputState"
            className="form-select"
            value={statusClient}
            onChange={(event) => setStatusClient(event.target.value)}
          >
            <option selected>Выберите...</option>
            <option>Замер</option>
            <option>Думает</option>
            <option>Договор</option>
            <option>Монтаж</option>
            <option>Установлен</option>
          </select>
        </div>
        <div className="col-md-3">
          <label for="inputAddress" className="form-label">
            Комментарий
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder=""
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label for="inputAddress" className="form-label">
            Площадь
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder=""
            value={area}
            onChange={(event) => setArea(event.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label for="inputAddress" className="form-label">
            Периметр
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder=""
            value={perimeter}
            onChange={(event) => setPerimeter(event.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Проверить
            </label>
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={(e) => commonUpdate(e)}
          >
            Сохранить
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-2 ms-2"
            onClick={() => history.push(`/`)}
          >
            На главную
          </button>
        </div>
      </form>
    </div>
  );
};

export default Design;
