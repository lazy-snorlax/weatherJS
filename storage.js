class LocalStorage{
  constructor(){
    this.city;
    this.default = 'Adelaide';
  }

  getLocationData(){
    if(localStorage.getItem('city') === null) {
      this.city = this.default;
    } else {
      this.city = localStorage.getItem('city');
    }

    return {
      city: this.city
    }
  }

  setLocationData(city){
    localStorage.setItem('city', city);
  }
}