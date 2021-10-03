
import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Design from './pages/Design';
import { useState } from 'react';

import Home from './pages/Home';



let count = 3
function App() {
  const [clients, setClients] = useState(
    [ {
        id: '1',
        tel: '333333333',
        date: '13.09.21',
        marked: false,
        clientName: {
          firstName: 'Вася',
          lastName: 'Пупкин',
          patronymic: 'Иванович'
        },
        address: {
          city: 'Гродно',
          street: 'Советская',
          home: '1',
          housing: '2',
          apartment: '33',
        },
        statusClient: 'Замер',
        comment:'fffffff'
      },
      {
        id: '2',
        tel: '222222',
        date: '13.09.21',
        marked: false,
        clientName: {
          firstName: 'Петя',
          lastName: 'Иванов',
          patronymic: 'Иванович'
        },
        address: {
          city: 'Гродно',
          street: 'Клецкова',
          home: '33',
          housing: '2',
          apartment: '44',
        },
        statusClient: 'Думает',
        comment: 'ddddddd'
      },
    ]
  )
  
  const updateCom=(id,newClient)=>{
    console.log('id',id)
    console.log('newClientApp',newClient)
    const index = clients.findIndex((zveno)=>zveno.id ==id)
    console.log('index', index)
    clients[index] = newClient
    setClients(clients)
  }


  console.log('clients',clients)
  return (
    <Switch>
     <>
     <Route path="/" exact component={()=><Home setClients={setClients} clients={clients}/>} />
     <Route path='/about' component={About}/>
     <Route path='/design/:id' component={()=><Design clients={clients} setClients={setClients} updateCom={updateCom} />}/>
     </>
    </Switch>
 
  );
}

export default App;
