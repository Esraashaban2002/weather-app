import React from 'react';
import './weather.css'
function Forecast({ data }) {
    return (
     <div className="current-weather container my-5 p-3  rounded">
        <div className="row mb-3 border-bottom text-start">
        <h2>5-Day Forecast</h2>
        </div>

        {data.list.slice(0, 5).map((item, index) => (
          <div key={index} className="row align-items-center border-bottom" >   
            <div className="col-md-3 col-12 border-end p-3">
                 <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
                 <p>{new Date(item.dt_txt).toLocaleTimeString()}</p>
                 
            </div>
            <div className="col-md-3 col-12 border-end p-3">
                <p><strong>Temp:</strong> <span>{item.main.temp}</span></p>
            </div>
            <div className="col-md-3 col-12 border-end p-3">
            <p>{item.weather[0].description}</p>
            </div>
            <div className="col-md-3 col-12 p-0">
            <img
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0].description}
                    className="img-fluid" />
            </div>
        </div>
    ))}
    
        </div>
    );
}

export default Forecast;
