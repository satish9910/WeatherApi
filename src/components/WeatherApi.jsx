import React, { useEffect, useState } from "react";
import "./css/style.css";

const WeatherApi = () => {
  const [city, SetCiy] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d1ce8f0600065ec7eda4d5fae21bd5ce`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson)
      SetCiy(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(e) =>{ setSearch(e.target.value)}}
          ></input>
        </div>
        {!city ? (
          <p className="errorMsg">Data Not Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApi;
