import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import * as axios from "axios";

let count = 0;
const Forma = ({ setClients, clients, dateProps }) => {
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

  const toket = "2093412190:AAFG75eqGC-rKvP17FRmhwHZJRXxxT44s1c";
  const idChat = -628332614;
  // const text = "прривет с сайта senbox";

  let pushInfo = async (e) => {
    // count++;
    e.preventDefault();

    const newObj = {
      id: count.toString(),
      tel: tel,
      date: new Date(),
      marked: false,
      clientName: {
        firstName: firstName,
        lastName: lastName,
        patronymic: patronymic,
      },
      address: {
        city: city,
        street: street,
        home: home,
        housing: housing,
        apartment: apartment,
      },
      statusClient: statusClient,
      comment: comment,
    };
    const res = await axios.post(
      "https://zamer-2-0-default-rtdb.firebaseio.com/clients.json",
      newObj

      // {
      //   Headers: { "Content-Type": "application/json" },
      // }
    );

    const text = `телефон ${newObj.tel},\n
                  ФИО: ${newObj.clientName.lastName} ${newObj.clientName.firstName} ${newObj.clientName.patronymic}`;

    const telega = await axios.get(
      `https://api.telegram.org/bot${toket}/sendMessage?chat_id=${idChat}&text=${text}`
    );
    console.log("res", res.data);
    // .then((res) => {
    //   console.log("res", res);
    //   console.log("res.data", res.data);
    // });
    // handleSubmit = async (event) => {
    //   event.preventDefault();
    //   await axios
    //     .post("https://zamer-2-0-default-rtdb.firebaseio.com/", { clients })
    //     .then((res) => {
    //       console.log("res", res);
    //       console.log("res.data", res.data);
    //     });
    // };
    setClients([newObj, ...clients]);

    // localStorage.setItem("clientsData", JSON.stringify([newObj, ...clients]));

    setTel("");
    setFirstName("");
    setLastName("");
    setPatronymic("");
    setCity("");
    setStreet("");
    setHome("");
    setHousing("");
    setApartment("");
    setStatusClient("Выберите...");

    // console.log('newObj', newObj)
  };
  console.log("dddddddddddddd");
  // console.log('фамилия',firstName)
  return (
    <div className="d-flex p-2 bd-highlight">
      <form className="row g-3 mt-3 text-light bg-secondary shadow">
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
            onClick={(e) => pushInfo(e)}
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
export default Forma;
