class Criteria(){
  constructor(leftColumn,rightColumn,rightAsColumn,columnType){
    this.leftColumn = leftColumn;
    this.rightColumn = rightColumn;
    this.rightAsColumn = typeof rightColumn == 'object' ;
    this.columnType = columnType ;
  }
  getCriteriaSql(){
    
  }
}
