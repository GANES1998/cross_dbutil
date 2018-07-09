const QueryConstants = require('./../QueryConstants')

class Criteria{

  constructor(leftval,rightval,ComparisonType){
    this.leftval = leftval;
    this.rightval = rightval;
    this.previous_str = "";
    this.methodType = "";
    if(ComparisonType)
      this.ComparisonType = ComparisonType ;
    else {
      this.ComparisonType = QueryConstants.EQUAL ;
    }
  }
  getCriteriaStmt(val){
    if(val.toString().startsWith("SELECT"))
      return `(${val.toString()})`;
    else {
      return `${val.toString()}` ;
    }
  }

  getCurrentCriteria(){
    return ` ${getCriteriaStmt(this.leftval) ${QueryConstants.getStmt(this.ComparisonType)} ${this.getCriteriaStmt(this.rightval)}}` ;
  }
  toString(){
    return ` ${this.previous_str} ${this.methodType} ${this.getCurrentCriteria()} `
  }
}
