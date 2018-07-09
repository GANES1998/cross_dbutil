class PrimaryKey{
  constructor(name,columns){
    this.name = name;
    this.columns = columns ;
  }
  toString(){
    var ret_var = `CONSTRAINT PRIMARY KEY ${this.name} ` ;
    if(this.columns.length==1)
      ret_var += `${this.columns[0]} ` ;
    else {
      ret_var+=`(`+this.columns.join(',')+')' ;
    }
    return ret_var;
  }
}

module.exports = PrimaryKey ;
