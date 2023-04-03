import React from 'react';

import data from "../constants/data";

const Home = () => {
  return (
    <section>
        {data.homeContent.map((home) => (
            <div className="home-content" key={home}>
                <h1>{home.title}</h1>
                <img style={{ width: "300px"}} src={home.image} alt="image home" />
            </div>
        ))}
    </section>
  )
}

export default Home;