class CreateTableQuery{
  constructor(name){
    this.name = name;
    this.columns = [];
    this.foreignKeys = [];
    this.indexes = [];
  }
  addColumn(column){
    this.columns.push(column);
  }
  addColumnList(list){
    list.forEach((column)=>this.columns.push(column))
  }
  setPrimaryKey(pk){
    this.primarykey = pk ;
  }
  addForeignKey(fk){
    this.foreignKeys.push(fk);
  }
  addForeignKeyList(fks){
    fks.forEach((fk)=>this.addForeignKey(fk));
  }
  addIndex(indx){
    this.indexes.push(indx);
  }
  addIndexList(index){
    index.forEach((indx)=>this.addIndex(indx));
  }
  getColumnsSqlPart(){
    return `${this.columns.map((column)=>column.toString()).join(' ,\n ')}`;
  }
  getPrimartKeyPart(){
    if(this.primarykey){
      return this.primarykey.toString() ;
    }
  }
  getForeignKeyPart(){
    return this.foreignKeys.map((fk)=>fk.toString()).join(' ,\n ') ;
  }
  toString(){
    var retVar = `CREATE TABLE IF NOT EXIST ${this.name} (${this.getColumnsSqlPart()} \n ${this.getPrimartKeyPart()} \n ${this.getForeignKeyPart()})`;
    return retVar;
  }
}

module.exports = CreateTableQuery ;
