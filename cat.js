function Cat ( name ){
    this.name = name;
    console.log('test git diff');
    this.stomach = [];
}

Cat.prototype.eat = function(meo){
    this.stomach.push(meo);
}

module.export= Cat;