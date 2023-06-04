const API_KEY='353d0a5dfc7f28df9f1d2f0bfbc586e7';

const makeURL = (iconId) =>`https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormatWeatherData = async(city,units='metric')=>{
   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
   const data = await fetch(URL)
   .then((res)=>res.json())
   .then((data)=>data);

   const {
    weather,
    main:{temp,feels_like,temp_min,
        temp_max,pressure,humidity},
        wind:{speed},
        sys:{country},
        name,
    }=data;
   const{description,icon}=weather[0];

   return{
    description,
    iconId:makeURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
   };
};

export {getFormatWeatherData};