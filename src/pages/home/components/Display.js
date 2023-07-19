import React, { useEffect, useState } from "react";
import * as styles from "../home.module.css";
export default function Display({ data, name }) {
  const [_weather, setWeather] = useState([]);
  const [district, setDistrict] = useState({});
  useEffect(() => {
    setWeather(data.daily?.slice(0, 7));
    setDistrict(name);
    return () => {};
  }, [data, name]);
  const Weekdata =
    _weather && _weather.length > 0
      ? _weather.map((e, i) => {
          let wethe = e.weather[0];
          let date = new Date(e.dt * 1000).toDateString().split(" ")[0];
          let date1 = new Date(e.dt * 1000).toDateString().split(" ")[2];
          let img = `http://openweathermap.org/img/w/${wethe.icon}.png`;
          const { description } = wethe;
          const { feels_like } = e;
          return (
            <div
              key={i}
              className={`min-w-[150px] min-h-[180px] text-center scale-100 border-slate-300 border-2 hover:mx-3 hover:scale-125 duration-300 m-3 p-3 rounded-md shadow-md hover:shadow-slate-500`}
            >
              <p className="text-lg text-center font-bold pb-2">
                {date} {date1}
              </p>
              <div className="flex items-center w-full justify-center"><img src={img} /></div>
              <div className="capitalize text-lg pb-2">
                {feels_like.day} &#8451;
              </div>
              <div className="text-sm">{description}</div>
            </div>
          );
        })
      : null;
  const timetoday = new Date().getHours();
  const { feels_like, pressure, humidity, temp, uvi, wind_speed, dew_point } =
    _weather && _weather.length > 0 ? _weather[0] : {};
  const { max, min } = temp ? temp : {};
  const { day } = feels_like ? feels_like : {};
  return (
    <>
      <div className="flex flex-col py-4 items-center">
        <div className="text-sm pb-4">
          {district.name}, {district.state}
        </div>
        <h4 className="text-6xl py-3 font-bold">
          {timetoday >= 6 && timetoday <= 18 ? <>&#9788;</> : <>&#9789;</>}{" "}
          {day ? day : ""} &#8451;
        </h4>
        <div className="flex font-bold pt-4">
          <p className="text-sm px-3 capitalize">
            min temp : {min ? min : ""} &#8451;
          </p>
          <p className="text-sm px-3 capitalize">
            max temp : {max ? max : ""} &#8451;
          </p>
        </div>
        <div className="flex py-4">
          <p className="text-sm px-3 capitalize">
            Feels Like : {day ? day : ""} &#8451;
          </p>
          <p className="text-sm px-3 capitalize">
            wind speed : {wind_speed ? wind_speed : ""} &#10147; mph
          </p>
          <p className="text-sm px-3 capitalize">
            Pressure : {pressure ? pressure : ""} hpa
          </p>
        </div>
      </div>
      <div className="sm:p-6 p-4 ">
        <div className="text-xl px-4 font-semibold pb-3 capitalize italic">weather Report for next 7 days </div>
        <div
          className={`w-full flex rounded px-2 capitalize overflow-x-scroll py-4`}
        >
          {Weekdata}
        </div>
      </div>
    </>
  );
}
