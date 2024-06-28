function add(a,b){
          return a+b;
}

function sub(c,d){
          return c - d;
}


// multi exports 
module.exports = {
        addFn :  add,
         subFn :  sub,
};

// exports.add = (a,b) => a+b;
// exports.sub = (c,d) => c-d;