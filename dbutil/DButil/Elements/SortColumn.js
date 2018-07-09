class SortColumn(){
  constructor(column,ascOrdes){
    this.column = column ;
    if(ascOrdes == undefined)
    this.order = "ASC" ;
    else if(ascOrdes)
    this.order = "ASC" ;
    else
    this.order = "DESC" ;
  }
  toString(){
    var ret_var ;
    if(typeof this.column == "String")
      ret_var = this.column;
    else {
      ret_var = this.column.toString(true);
    }
    ret_var = `${ret_var} ${this.order}`;
  }
}
