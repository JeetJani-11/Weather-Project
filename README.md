# WeatherProject

WeatherProject is a straightforward web application created using Node.js, Express, and Handlebars. It allows users to input a location, which is then geocoded using the Geocode ArcGIS API. The latitude and longitude obtained are used to fetch weather forecasts from the Tomorrow.io API, providing users with accurate weather information.

## How it Works

1. **User Input:** Users input a location into the website.

2. **Geocoding:** The application uses the Geocode ArcGIS API to convert the user's location input into latitude and longitude coordinates.

3. **Weather Forecast:** The latitude and longitude data are then sent to the Tomorrow.io API to fetch the weather forecast for the specified location.

4. **Display Results:** The weather forecast is displayed to the user, including information such as temperature, precipitation, and more.


