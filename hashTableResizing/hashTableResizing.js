/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
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
    var storageLimit = 4;
    var size = 0;
    var totalStorage = 0;

    result.insert = function(key,value) {
      console.log(key, value, 'what is going into insert');
      if(storage.length===0){
          console.log('hi');
          //should populate the storage array with empty arrays equal to the length
          for(var i= 0; i<storageLimit; i++) {
              storage.push([]);
          }

      }
      if(storage[getIndexBelowMaxForKey(key, storageLimit)].indexOf(key)>(-1)) {
          console.log('uhoh')
          var location = storage[getIndexBelowMaxForKey(key, storageLimit)].indexOf(key);
          storage[getIndexBelowMaxForKey(key, storageLimit)][location+1] = value;

      } else {
      storage[getIndexBelowMaxForKey(key, storageLimit)].push(key, value);
      console.log(storage, 'added storage');
      totalStorage++;
      console.log('totalstorage', totalStorage)
      }


      if (totalStorage >= (storageLimit*0.75)) {
          result.resize();
      }


    };

    result.retrieve = function(key) {
      var number = getIndexBelowMaxForKey(key, storageLimit);
      console.log(number, 'number in retrieve');
      for (var i = 0; i<storage[number].length; i+=2){
          console.log(i, 'is this i');
          if (storage[number][i] === key) {
  //             console.log(true);
  //             console.log(storage[number][i+1]);
              return storage[number][i+1];
          }
      }
      console.log('nothing here');
    };

    result.remove = function(key) {
      var number = getIndexBelowMaxForKey(key, storageLimit);
      console.log(number, 'number in retrieve');
      for (var i = 0; i<storage[number].length; i+=2){
          console.log(i, 'is this i');
          if (storage[number][i] === key) {
              console.log(storage[number][i], 'what is this');
              var spice = storage[number].splice(i,2);
              console.log(spice, 'spice');
              console.log(storage,'the storage')
          }
      }
      totalStorage--;
      console.log(totalStorage, 'totalStorage after removal');


      if (totalStorage<storageLimit*0.25) {
          result.resize();
      }
    };

      result.resize = function() {
          console.log('entering resize');
          var keys = [];
          var values = [];
          for (var i = 0; i<storage.length; i++) {
              console.log('resize', storage[i]);
              for (var j = 0; j<storage[i].length; j++) {
                  if(j%2===0) {
                      keys.push(storage[i][j])
                  } else if (j%2 === 1) {
                      values.push(storage[i][j]);
                  }
              }
          }
          console.log(keys, values, 'the stuff');
          storage = [];
          if (totalStorage >= (storageLimit*0.75)) {
              storageLimit = storageLimit*2;
              totalStorage = 0;
          }  else if (totalStorage<storageLimit*0.25) {
              storageLimit = storageLimit/2;
              totalStorage = 0;
          }
          for (var replace=0; replace<keys.length; replace++) {
            console.log(keys, values, 'the stuff');
              console.log(keys[replace], values[replace], 'something seems to be an array');
              result.insert(keys[replace], values[replace]);
          }
      }

    return result;
  };

  var zoo = makeHashTable();
  zoo.insert('fish', 'carp');
  zoo.insert('dog', 'peeka');
  zoo.insert('cat', 'purrloin');
  zoo.insert('bug', 'rhino');
  zoo.retrieve('fish');
  zoo.remove('fish');
  zoo.insert('fish', 'goldfish');

  console.log(zoo);