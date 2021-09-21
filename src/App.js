import logoA from './logoA.png';
import './App.css';

function App() {
  return (
    <div className="container mt-3">
     
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-6 text-light" href="#"> 
           <img src={logoA} width="55" height="50"/>Объектов в работе: {"10"} Из них: Замеры- {"3"}, Думает- {"2"}, Монтаж- {"4"}, Установлено- {"1"}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li classNameName="nav-item">
                <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link text-light" >Текущая дата: {"11.11.11"}</a>
              </li>
              {/* <li classNameName="nav-item dropdown">
                <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a classNameName="dropdown-item" href="#">Action</a></li>
                  <li><a classNameName="dropdown-item" href="#">Another action</a></li>
                  <li><hr classNameName="dropdown-divider"/></li>
                  <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <form className="d-flex ms-auto">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Найти</button>
            </form>
          </div>
        </div>
      </nav>
      <form className="row g-3 mt-3 text-light bg-dark">
        <div className="col-md-3">
          <label for="inputEmail4" className="form-label" >Моб. телефон</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="+375"/>
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">Фамилия</label>
          <input type="password" className="form-control" id="inputPassword4"/>
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">Имя</label>
          <input type="password" className="form-control" id="inputPassword4"/>
        </div>
        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">Отчество</label>
          <input type="password" className="form-control" id="inputPassword4"/>
        </div>
        <div className="col-md-3">
          <label for="inputCity" className="form-label">Населенный пункт (город/поселок)</label>
          <input type="text" className="form-control" id="inputCity" placeholder=""/>
        </div>
        <div className="col-md-3">
          <label for="inputAddress" className="form-label">Улица</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Проспект Ленина"/>
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">Дом</label>
          <input type="text" className="form-control" id="inputCity" placeholder=""/>
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">Корпус</label>
          <input type="text" className="form-control" id="inputCity" placeholder=""/>
        </div>
        <div className="col-md-1">
          <label for="inputState" className="form-label">Квартира</label>
          <input type="text" className="form-control" id="inputCity" placeholder=""/>
        </div>
       
        {/* <div className="col-12">
          <label for="inputAddress2" className="form-label">Адрес 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Квартира"/>
        </div> */}
        
        <div className="col-md-3">
          <label for="inputState" className="form-label">Статус</label>
          <select id="inputState" className="form-select">
            <option selected>Выберите...</option>
            <option>Замер</option>
            <option>Думает</option>
            <option>Монтаж</option>
            <option>Установлен</option>
          </select>
        </div>
        {/* <div className="col-md-2">
          <label for="inputZip" className="form-label">Индекс</label>
          <input type="text" className="form-control" id="inputZip"/>
        </div> */}
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
              Проверить 
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary mb-2">Добавить</button>
        </div>
      </form>


    </div>
  );
}

export default App;
