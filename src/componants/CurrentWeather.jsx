import React from 'react';
import './weather.css'
function CurrentWeather({ data , city}) {

    return (

        <div className="current-weather container my-5 p-3  rounded">
        <div className="row mb-3 border-bottom text-center">
                <h2>Current Weather for {city}</h2>
        </div>
        <div className="row align-items-center">
            <div className="col-md-4 col-12 border-end p-3">
                <p><strong>Temperature:</strong> <span>{data.main.temp}°C</span></p>
            </div>
            <div className="col-md-4 col-12 border-end p-3">
                <p><strong>Condition:</strong> <span>{data.weather[0].description}</span></p>
            </div>
            <div className="col-md-4 col-12 p-0">
                <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0].description}
                    className="img-fluid"
                />
            </div>
        </div>
    </div>
    
    );
}

export default CurrentWeather;
