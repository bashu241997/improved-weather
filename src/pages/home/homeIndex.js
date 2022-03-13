import Head from "next/head";
import React, { useState, useEffect } from "react";
import Display from "./components/Display";
import gettdetails from "../../utilities/Service";
import { api } from "../../utilities/Url";
import * as styles from "./home.module.css";
export default function Homeindex() {
  const [Data, setData] = useState({});
  const [State, setState] = useState("");
  const title =
    State && State.name ? `${State.name}'s Weather` : "Weather :: Now";
  const [latlong, setLatlong] = useState([]);

  useEffect(() => {
    let dat = {
      lat: 51.5072,
      lon: 0.1276,
      name: "London",
      state: "England",
    };
    getdatadetails(dat);
  }, []);
  const states = (e) => {
    if (e.target.value.length > 0) {
      gettdetails(api.location(e.target.value)).then((lat) => setLatlong(lat));
    } else if (e.target.value.length < 1) {
      setLatlong([]);
    }
  };

  const getdatadetails = (e) => {
    if (e) {
      gettdetails(api.daily_city(e.lat, e.lon)).then((lat) => {
        setData(lat);
        setState(e);
        setLatlong([]);
      });
    } else {
      console.log("");
      setLatlong([]);
    }
  };
  console.log(State);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
       </Head>
      <div
        className={`md:container md:mx-auto mx-auto px-4 py-4 `}
        style={{ minHeight: "90vh" }}
      >
        <div className="p-4 sm:flex items-start">
          <div className="items-center justify-center flex">
            <img src={"/4.png"} width={50} height={50} />
            <p className="px-4 text-sm font-semibold uppercase">Weather Now</p>
          </div>

          <div className="w-full relative ">
            <form className="px-6 w-full capitalize rounded-md border border-t-0 border-r-0 border-l-0 flex">
              <input
                type="text"
                className="bg-transparent uppercase text-sm outline-0 rounded-lg w-full px-2 py-1.5"
                placeholder="Search Wether in Your City | Enter Your City Name"
                onChange={(e) => states(e)}
              />
              <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" style={{ width: "20px !important", height: "20px !important" }}/>
            </form>
            <div
              className={`px-2 w-full shadow-md shadow-blue-200/50 absolute ${styles.glass1} overflow-auto`}
            >
              {latlong &&
                latlong.length > 0 &&
                latlong.map((e, i) => {
                  return (
                    <div
                      className="m-2 hover:bg-blue-400/50 py-2 px-4  cursor-pointer"
                      key={i}
                      onClick={() => getdatadetails(e)}
                    >
                      {`${e.name} - ${e.state ? e.state : ""}`}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <Display data={Data} name={State} />
      </div>
      <div className="text-sm text-center py-4 bottom-8 w-full">
        {new Date().getFullYear()} | &#9400; Baswanth | All Rights Reserved
      </div>
    </>
  );
}
