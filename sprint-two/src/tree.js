var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	var child = Tree(value);
	this.children.push(child);
};

treeMethods.contains = function(target){
	var found = false;
	var subroutine = function(node) {
		if (node.value === target) {
		  found = true;
		  return;
	  }
	  for (var i=0; i<node.children.length; i++) {
	  	var child = node.children[i];
		  subroutine(child);
	  }
	}
	subroutine(this);
	return found;
};

treeMethods.traverse = function(callback){
  callback(this.value);

  if (!this.children){ return; }
  for (var i = 0; i < this.children.length; i++){
    var child = this.children[i];
    debugger;
    child.traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 
Previous work:

treeMethods.contains = function(target){
	var found = false;
	var targetFinder = function(node) {
		if (this.value === target) {
		    found = true;
		}
		for (var i=0; i<node.children.length; i++) {
			found = targetFinder(node);
		}
		return found;
	}
	targetFinder(this.children);
};

 */