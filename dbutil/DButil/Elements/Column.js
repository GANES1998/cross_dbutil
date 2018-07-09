class Column(){
  constructor(tablename,columnname){
    this.tablename = tablename ;
    this.columnname = columnname ;
  }
  printColumn(var withTableName){
    if(withTableName){
      return `${this.tablename}.${this.columnname}`;
    }
    else {
      return `${this.columnname}`
    }
  }
  toString(var withTableName){
    return this.printColumn(withTableName);
  }
}
