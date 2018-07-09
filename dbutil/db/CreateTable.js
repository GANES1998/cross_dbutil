const mysql = require('mysql');
const _ = require('lodash');
var properties = require('../properties.js');

class Table{
  constructor(name,listOfColumn){
    this.name = name ;
    this.columns = [];
    this.primarykey = -1;
    this.foreignkeys = [];
    if(listOfColumn!=undefined){
      this.addColumns(listOfColumn);
    }
  }
  addColumns(var listOfColumn){
    listOfColumn.forEach((param)=>{
      for(key in param){
        if(typeof param[key] == Object){
          var param_required = _.pick('datatype','primarykey','foreignkeys');
          this.columns.push({name:key,datatype:param_required.datatype});
          if(param_required.primarykey){this.primarykey = param_required.primarykey;}
          if(param_required.foreignkeys){
            for(name_fk in param_required.foreignkeys){
              this.foreignkeys.push(name_fk);
          }}
        }else{
          this.columns.push({name:key,datatype:param});
        }
      }
    })
  }
  createTableSql=()=>{
    return `CREATE TABLE IF NOT EXIST ${name} VALUES ()`
  }
  createColumnPart=()=>{

  }
}
