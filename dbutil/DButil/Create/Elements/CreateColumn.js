class CreateColumn{
  constructor(name,params){
    this.name = name ;
    this.params = params ;
  }
  toString(){
    var ret_var = `${this.name} `
    if(!this.params)
      return ret_var;
    if(this.params.nullable == false)
      ret_var += `NOT NULL ` ;
    if(this.params.unique)
      ret_var += `UNIQUE ` ;
    if(this.params.default)
      ret_var += `DEFAULT ${this.params.default} ` ;
    if(this.params.autoincrement)
      ret_var += `AUTO_INCREMENT`;
    if(this.params.autoincrement && this.params.autoincrement.start)
      ret_var+= `=${this.params.autoincrement.start} `

      return ret_var;
  }
}

module.exports = CreateColumn ;
