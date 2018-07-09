class SelectQuery(){
  constructor(tablename){
    this.tablename = tablename ;
    this.selctColumns = [];
    this.sortColumns = [];
    this.criterias = [];
    this.joins = [];
  }
  addSelectColumn(Column){
    this.selectColums.push(Column);
  }
  addSelectColumnList(ListOfColumn){
    ListOfColumn.forEach((Column)=>this.addSelectColumn(Column));
  }
  addSortColumn(Column){
    this.sortColumns.push(Column);
  }
  addSortColumnList(ListOfSortColumn){
    ListOfSortColumn.forEach((Column) => this.sortColumns.push(Column)) ;
  }
  addCriteria(Criteria){
    this.criterias.push(Criteria);
  }
  addCriteriaList(ListOfCriterias){
    ListOfCriterias.forEach((Criteria)=>this.criterias.push(Criteria));
  }
  addJoin(Join){
    this.joins.push(Join);
  }
  addJoinLis(ListOfJoin){
    ListOfJoin.forEach((Join)=>this.join.push(Join));
  }

  getSelectColumnPart(){
    var ret_str = `SELECT `;
    var withTableName = true ;
    if(this.joins.length == 0)
      withTableName = false ;
    this.selectColums.forEach((Column)=>ret_str+=`${Column.toString(withTableName)} `);
  }
  getJoinPart(){
    var ret_str = ``;
    if(this.join.length > 0){
      this.joins.forEach((Join)=> ret_str+=`${Join.getJoinSql();} `);
    }
  }
  getCriteriaPart(){
    
  }
  getSortColumnPart(){
    var ret_str = ``;
    this.
  }

  getSqlQuery(){

  }

}
