const perceptron = function(inputs){
  const perceptronObject = {
    sum: 0,
    min: -1,
    max: 1,
    weights: new Array(2),
    inputs: inputs,
    calculateWeights(){
      for(let i = 0; i < this.weights.length; i++){
        this.weights[i] = Math.random() * (this.max - this.min) + this.min;
      }
      // console.log(this.weights)
    },
    guess(){
      for(let i = 0; i < this.weights.length; i++){
        this.sum = this.weights[i] * this.inputs[i];
      }
      // console.log(this.sum);
    },
    activation(){
      return this.sum >= 0 ? 1 : 0;
    },
    run(){
      this.calculateWeights();
      this.guess();
    }
  }
  perceptronObject.run();
  return perceptronObject.activation();
}

console.log(perceptron([1, 2]));