module.exports = {
  LIKE = 0;
  LESS_THAN = 1 ,
  GREATER_THAN = 2 ,
  EQUAL = 3 ,
  NOT_EQUAL = 4,
  LESS_EQUAL = 5 ,
  GREATER_EQUAL = 6 ,
  getStmt(val){
    switch(val){
      case 0:return 'LIKE' ;
      case 1:return 'LESS THAN' ;
      case 2:return 'GREATER THAN' ;
      case 3:return 'EQUAL' ;
      case 4:return 'NOT EQUAL' ;
      case 5:return 'LESS EQUAL' ;
      case 6:return 'GREATER EQUAL' ;
    }
  }
};
