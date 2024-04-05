import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModelIcon from '@mui/icons-material/LightMode';
export default function InfoBox({info}){
    const INIT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVaGqxqoDtuzruyrbx_f2YzKZH27_kIMNKr0QGSsJTQ&s";
    
    const HOT_URL = "https://media.istockphoto.com/id/1337229800/photo/sunset-scene-behind-the-building.webp?b=1&s=170667a&w=0&k=20&c=RO1Nwg2cU2zQ4LXTgZ0FMY1biDjw-na-9oXUR3qZmq4=";
    const COLD_URL = "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?b=1&s=170667a&w=0&k=20&c=DHrXh8fFW_33CVy5603IOswob8aYeWWMLXlSEXKsomI=";

    return(
        <div className="InfoBox">
            <h3>WeatherInfo</h3>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80? <ThunderstormIcon/>:(info.temp>15?<LightModelIcon/>:<AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature : {info.temp}&deg;C</p>
         <p>Max_Temp : {info.temp_max}&deg;C</p>
         <p>Min_Temp : {info.temp_min}&deg;C</p>
         <p>Humidity : {info.humidity}</p>
         <p>Weather : {info.weather}</p>
         <p>Feels_Like : {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
}