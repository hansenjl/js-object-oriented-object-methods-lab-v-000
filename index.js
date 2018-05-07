function BoardMember (name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.sayHello = function(){
    console.log("Hello everybody!");
  }
}