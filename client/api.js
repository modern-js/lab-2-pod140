// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

/* write your code here */
const getEverything = new Promise(
  function(resolve, reject) {
    resolve(global.fetch('/food').then(
      (x)=>{
        //return xxx;
        return global.fetch('/drink').then(
          (y)=>{
              return global.fetch('/tv').then(
                (z)=>{
                  return [x,y,z];
                }
              );
          }
        );
      }
    ));
  }
);


// define the api-client object to be exported
const api = {

};

api.get = function(something) {
  return fetch(something, {
    method: 'GET',
  });
};

api.get.me = function(something) {
  return fetch(something, {
    method: 'GET',
  });
};

api.get.me.a = function(something) {
  return fetch(something, {
    method: 'GET',
  });
};

api.get.me.everything = function(something) {
  return fetch(something, {
    method: 'GET',
  });
};

api.go = function(something) {
  return fetch(something, {
    method: 'GET',
  });
};

api.go.get = function(something) {
  return fetch(something, {
    method: 'GET',
  });
};

api.go.get.me = function(something) {
  return fetch(something, {
    method: 'GET',
  });
};

api.go.get.me.a = function(something) {
  return fetch(something, {
    method: 'GET',
  });
};

api.go.get.me.everything = () => getEverything;

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
