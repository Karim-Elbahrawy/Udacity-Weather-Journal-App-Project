# Weather-Journal App Project

Weather app for Udacity that uses asynchronous functions, openWeatherMap API and user data to dynamically update the UI.

## Table of Contents


First you need to have node.js, express, cors, body-parser installed .

* To install node you can download form the wesite [nodeJs](https://nodejs.org/en/) or install from your package manger [nodeJs Package Manger](https://nodejs.org/en/download/package-manager/) npm included

* Then you have to download dependencies with npm from the command line (installs system wide) :

```bash
npm install express
npm install cors
npm install body-parser
```

## Getting Started

server.js file is where you can start the server with node.js

navigate to server.js directory in your pc then in the terminal use:

```bash
node server.js
```

you should get a response like this

```text
runnning on local host: 5000
```

then in your browser navigate to

```link
http://localhost:5000/
```



## Development

* server is built locally with node and express.

* all files are available in the /website folder with the exception of server.js (available in root directory) .

* weather data is fetched from [OpenWeatherMap](https://openweathermap.org) API .

* server includes an asynchronous get route to fetch data and an asynchronous post route to save data to the server from client side .

* server logs data fetched to the console .

* UI updates dynamically when the data is received from the server .

* custom style added in style.css .

## Helping Resources

* Maryna Dymovich [project](https://github.com/MarynaDymovich/Weather-API)

* [project](https://www.youtube.com/watch?v=hdYXCiZkp0w&ab_channel=AhmedNageebMahmoud)



