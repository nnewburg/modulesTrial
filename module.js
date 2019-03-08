arr = []

function sortNumber(a,b) {
        return a - b;
    }

module.exports = {

  getList: function(){
    return arr.sort(sortNumber)
  },

  addToList: function(x) {
    arr.push(x)
  }
};


