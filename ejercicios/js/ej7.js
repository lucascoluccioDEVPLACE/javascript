class cont {
  constructor(value){
    this.value=0;
  }
  getValorActual(){
    return this.value;
  }
  setValorActual(newValue){
    this.value=newValue;
  }
  increaseValue(){
    this.value++;
  }
  decreaseValue(){
    this.value--;
  }
  resetValue(){
    this.value=0;
  }
}

var contador=new cont(0);

function increaseValue(){
  contador.increaseValue();
  document.getElementById("contador").innerHTML= contador.getValorActual();
}

function decreaseValue(){
  contador.decreaseValue();
  document.getElementById("contador").innerHTML= contador.getValorActual();
}

function resetValue(){
  contador.resetValue();
  document.getElementById("contador").innerHTML= contador.getValorActual();
}
