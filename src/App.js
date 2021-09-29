
import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Design from './pages/Design';
import { useState } from 'react';

import Home from './pages/Home';



let count = 3
function App() {
  const [clients, setClients] = useState(
    [
      {
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
        statusClient: 'Замер'
      },
      {
        id: '2',
        tel: '4444444444',
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
        statusClient: 'Думает'
      },
    ]
  )
  
  return (
    <Switch>
     <>
     <Route path="/" exact component={()=><Home setClients={setClients} clients={clients}/>} />
     <Route path='/about' component={About}/>
     <Route path='/design/:id' component={()=><Design clients={clients}/>}/>
     </>
    </Switch>
 
  );
}

export default App;
