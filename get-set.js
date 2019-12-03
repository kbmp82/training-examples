const data = {
  places: [],
  get location() {
    return this._location ? this._location : 'none!'
  },
  set location(value) {

    this.places.push(value.trim())
    this._location = value.trim()
  }
}

//code that uses data object
data.location = 'Phoenix'
data.location = 'Mesa'
data.location = 'Chandler'

console.log('last location: ' + data.location, '| all locations: ' + data.places)
