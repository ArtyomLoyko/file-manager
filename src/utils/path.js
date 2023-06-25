export class Path {
  constructor(defaultPathname = '') {
    this._pathname = defaultPathname
  }

  get pathname() {
    return this._pathname
  } 

  set pathname(newPathname) {
    this._pathname = newPathname
  }

  log() {
    console.log(`You are currently in ${this._pathname}`)
  }
}