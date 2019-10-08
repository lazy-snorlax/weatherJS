class Weather{
  constructor(city){
    this.apiKey = "57adbb0609a609f34fb43126b89c6d2a";
    this.city = city;
    // this.country = country;
  }

  // Fetch weather from API
  async getWeather() {    
    // const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=2078025&APPID=${this.apiKey}`);
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
    // this.country = country;
  }
}