import React from "react";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";

function Landing() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://strapi-store-server.onrender.com/api/products?featured=true"
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="align-elements">
      <Hero />
      <div className="pt-24">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            featured products
          </h2>
        </div>
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((data) => {
            return (
              <Card key={data.id}
              id={data.id}
              image={data.attributes.image}
              price={data.attributes.price}
              title={data.attributes.title}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
