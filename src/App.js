import { Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Design from "./pages/Design";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import axios from "axios";

let count = 3;
function App() {
  const [clients, setClients] = useState([
    {
      id: "1",
      tel: "333333333",
      date: "13.09.21",
      marked: false,
      clientName: {
        firstName: "Вася",
        lastName: "Пупкин",
        patronymic: "Иванович",
      },
      address: {
        city: "Гродно",
        street: "Советская",
        home: "1",
        housing: "2",
        apartment: "33",
      },
      statusClient: "Замер",
      comment: "fffffff",
    },
    {
      id: "2",
      tel: "222222",
      date: "13.09.21",
      marked: false,
      clientName: {
        firstName: "Петя",
        lastName: "Иванов",
        patronymic: "Иванович",
      },
      address: {
        city: "Гродно",
        street: "Клецкова",
        home: "33",
        housing: "2",
        apartment: "44",
      },
      statusClient: "Думает",
      comment: "ddddddd",
    },
  ]);
  const getClients = async () => {
    const res = await axios.get(
      "https://zamer-2-0-default-rtdb.firebaseio.com/clients.json"
    );

    console.log("response axios", res);
    console.log("response axios data", res.data);

    const keys = Object.keys(res.data);
    console.log("keys", keys);

    const clients = keys.map((key) => {
      return { ...res.data[key], id: key };
    });
    console.log("axios-clients", clients);
    setClients(clients);
  };

  const updateCom = (id, newClient) => {
    console.log("id", id);
    console.log("newClientApp", newClient);
    const index = clients.findIndex((zveno) => zveno.id == id);
    console.log("index", index);
    clients[index] = newClient;
    setClients(clients);
  };
  useEffect(() => {
    console.log("ccccccccccc", clients);
    // localStorage.setItem('clientsData',JSON.stringify(clients))
    // const raw = localStorage.getItem("clientsData");
    // console.log("raw", raw);
    // if (raw === null) {
    //   return;
    // }
    // const clientsLocale = JSON.parse(raw);
    // setClients(clientsLocale);
    // console.log("clientsLocale", clientsLocale);
    getClients();
  }, []);

  console.log("clients", clients);
  return (
    <Switch>
      <>
        <Route
          path="/"
          exact
          component={() => <Home setClients={setClients} clients={clients} />}
        />
        <Route path="/about" component={About} />
        <Route
          path="/design/:id"
          component={() => (
            <Design
              clients={clients}
              setClients={setClients}
              updateCom={updateCom}
              getClients={getClients}
            />
          )}
        />
      </>
    </Switch>
  );
}

export default App;
