class Index{
  constructor(name,table,columslist){
    this.name = name ;
    this.table = table ;
    this.columns = columslist ;
  }
  toString(){
    return `CREATE INDEX ${this.name} ON ${this.table} (${this.columns.join(',')})` ;
  }
}
