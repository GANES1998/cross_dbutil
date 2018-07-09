const Criteria = require('./../Criteria/Criteria');

class Groupby{
  constructor(col_name,Criteria){
    this.columns = [];
    if(Array.isArray(col_name)){
      col_name.for_each((col_name_each)=>{this.columns.push(col_name_each)});
    }else {
      this.columns.push(col_name);
    }
    if(Criteria){
      if(Criteria instanceof Criteria)
    }
  }
  addGroupbyColumn(col){
    this.columns.push(col);
  }
  addGroupbyColumnList(col_list){
    col_list.forEach((col)=>this.columns.push(col));
  }
  setCriteria(Criteria){
    this.Criteria = Criteria ;
  }
  getGroupbyPart(){
    return ` GROUPBY ${this.columns.map((col)=>col.toString()).join(',')} `;
  }
  getHavingPart(){
    if(this.Criteria){
      return ` HAVING ${this.Criteria.toString()} ` ;
    }else{
      return "";
    }
  }
  toString(){
    return `${this.getGroupbyPart()} ${this.getHavingPart()} ` ;
  }
}
