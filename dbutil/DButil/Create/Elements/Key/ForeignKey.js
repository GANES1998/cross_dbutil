class ForeignKey {
  constructor(name,colslist,referanceTableName,referColumn){
    this.name = name;
    this.colslist = colslist ;
    this.referanceTableName = name;
    this.referColumn = referColumn ;
  }
  toString(){
    return `CONSTRAINT FOREIGN KEY ${this.name} (${this.colslist.join(',')}) REFERENCES ${this.referanceTableName} (${this.referColumn.join(',')}) `;
  }
}

module.exports = ForeignKey ;
