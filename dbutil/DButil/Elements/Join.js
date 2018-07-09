class Join(){
  constructor(tablename,col1list,col2list,joinType){
    this.tablename = tablename ;
    this.col1column = col1list;
    this.col2column = col2list;
    this.joinType = joinType ;
  }
  getJoinSql(){
    if(this.col1column.length != this.col2column.length){
      return -1;
    }
    var join_name ;
    if(this.joinType == JoinConstants.INNER_JOIN){
      join_name = "INNER JOIN" ;
    }else if(this.joinType == JoinConstants.OUTER_JOIN){
      join_name = "OUTER JOIN" ;
    }else if(this.joinType == JoinConstants.LEFT_JOIN){
      join_name = "LEFT JOIN" ;
    }else{
      join_name = "RIGHT JOIN" ;
    }
    var ret_str = `${join_name} this.tablename ` ;
    for(var i=0;i<this.col1column.length;i+=1){
      ret_str += `${col1column[i].toString(true) == col2column[i].toString(true)} `;
      if(i==this.col1column.length-1)
        ret_str+=`AND `;
    }
    return ret_str ;
  }
}
