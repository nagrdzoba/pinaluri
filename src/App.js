import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import About from "./about";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const handleSelect = (e) => {
    setValue(e);
    fetch(`http://universities.hipolabs.com/search?country=${e}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTitle(data);
      });
  };

  const [value, setValue] = useState("");
  const [title, setTitle] = useState([]);

  const citrus = title.slice(0, 5);

  const dispatch = useDispatch();
  const weatherInKelvin = useSelector((e) => e);

  useEffect(() => {
    const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=tbilisi&appid=${api_key}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({type:'SET_WEATHER', payload:data.main.temp});
      });
  }, []);

  return (
    <div>
      <Head>
        <div>
          <CostumLink to="/">home page </CostumLink>
        </div>

        <Weather>current weather is:{weatherInKelvin} K</Weather>
        <div>
          <CostumLink to="/about">about </CostumLink>
        </div>
      </Head>

      <Switch>
        <Route exact path="/">
          <Lower>
            <DropdownButton
              title={value || "choose the university"}
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="Georgia">Georgia</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Ukraine">Ukraine</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Italy">Italy</Dropdown.Item>
            </DropdownButton>
            <h4>
              {value ? `You selected ${value}` : "you have not selected country"}
            </h4>
            {citrus.map((L, index) => (
              <List key={index}> {L.name}</List>
            ))}
          </Lower>
        </Route>

        <Route exact path="/about">
          <Lower1>
            <About />
          </Lower1>
        </Route>
        <Route exact path="*">
          <Lower2></Lower2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

const CostumLink = styled(Link)`
  color: white;
  font-weight: bolder;
  background: #4d84c4;
  border: 2px solid #0659ba;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 15vh;
`;

const List = styled.div`
  border-radius: 10px;
  padding: 5px;
  background-color: rgb(98, 165, 224);
  color: blue;
  box-shadow: 13px 14px 12px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 13px 14px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 13px 14px 12px 0px rgba(0, 0, 0, 0.75);
`;

const Lower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  gap: 30px;
  font-size: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-image: url("https://www.american.edu/images/homepage-1920.jpg");

  background-position: center;
`;
const Lower1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  gap: 30px;
  font-size: 30px;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background-image: url("https://i.ytimg.com/vi/kFIeBd0W4wM/maxresdefault.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Lower2 = styled.div`
  height: 90vh;
  background-image: url("https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/Error-404-on-Opera.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Weather = styled.div`
  background: white;
  padding: 5px;
  border-radius: 10px;
  background-color: yellow;
  font-weight: bolder;
`;
