/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
  this.formermin = [];
  this.library = [];
  this.howbig = 0;
  this.mini = [];
// add an item to the top of the stack
  this.push = function(value) {
      console.log('hell');
      this.library.push(value);
      this.howbig++;
      if (this.mini.length === 0 || this.mini[0]>value) {
          console.log('new min value')
          console.log(Array.from(this.mini), 'is there an extra array');
          this.formermin.push(Array.from(this.mini));
          console.log(this.formermin, 'the formermin has been aded');
          this.mini = [value, 1]
      } else if (this.mini[0]===value) {
          this.mini[1]++
      }

  };

// remove an item from the top of the stack
  this.pop = function() {
      var tiny = this.library.pop();
      if (tiny === this.mini[0]) {
          this.mini[1]--;
      }
      if (this.mini[1]===0) {
          console.log('new min')
          console.log(this.formermin);
          this.mini = this.formermin.pop();
          console.log(this.mini, 'the new mini');
          if (this.formermin === undefined) {
              console.log('fixing formermin');
              this.formermin = [];
          }
      }
//         if (this.library === undefined)
      this.howbig--;
      return tiny;
  };

// return the number of items in the stack
  this.size = function() {
      return this.howbig;
  };

// return the minimum value in the stack
  this.min = function() {
      return this.mini[0];

  };

};