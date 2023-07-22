function receivesAFunction(callback)
{
    return callback();
}

receivesAFunction(function(){ return "I am a callback function"});
 
function returnsANamedFunction(named)
{
    return function named(){return "I am a named function"};
}

function returnsAnAnonymousFunction()
{
  const AnonymousFn = function(){ console.log("I am an anonymous function")};
  return AnonymousFn;
}
returnsANamedFunction();