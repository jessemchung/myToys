/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(/*...*/  key, value ) {
    // TODO: implement `insert()`

    console.log(storage, 'storage');
    var index = getIndexBelowMaxForKey(key, storageLimit);
    console.log(index, 'index');
    //first iteration creates an index at this value
    storage[index] = storage[index] || [];
    console.log(storage[index], 'something');
    //i guess in case storage[index] is undefined
    var pairs = storage[index];
    var pair;
    console.log(pairs, pairs.length, 'pairs')

   //this part seems to handle collisions
    for (var i = 0; i < pairs.length; i++) {
      console.log('were you triggered');
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        console.log(pair[1], 'pari');
        return;
      }
    }
    console.log('when are you');
    pairs.push([key, value]);

      };

  result.retrieve = function(/*...*/  key ) {
    // TODO: implement `retrieve()`

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
      };

  result.remove = function(/*...*/  key ) {
    // TODO: implement `remove()`

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        pairs.splice(i, 1);
        return value;
      }
    }
      };

  return result;
};

var cheese = makeHashTable();
cheese.insert('fox', 'orange')
cheese.insert('fox', 'red')
// cheese.insert('fox', 'blue')

cheese.insert('lemur', 'white')

cheese.retrieve('fox')
