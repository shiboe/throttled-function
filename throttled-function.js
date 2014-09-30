// https://github.com/shiboe/throttled-function

var throttledFunction = function( fn, delay ) {
  var lastCall = 0,
      pending = false;
      
  function execute() {
    // lets update our last call
    lastCall = new Date().getTime();
    // and execute our throttled function with our pending arguments
    fn.apply( pending.thisValue, pending.args );
    // and finally free our function up for further calls
    pending = false;
  }
      
  return function() {
    var now = new Date().getTime(),
        timeSinceLastCall = now - lastCall,
        alreadyPending = !! pending;
        
    // regardless of our action taken, we need to update the pending request
    // so that when the request fires, it is using the latest arguments
    pending = { 
      args: arguments,
      thisValue: this
    };
    
    // if we already have a request pending, we will let that happen
    if( alreadyPending ){
      return;
    }
    // if we aren't pending but it's too soon to call, lets queue a request
    else if( timeSinceLastCall < delay ) {
      var remainingDelay = delay - timeSinceLastCall;
      // queue our function with correct "this" value, set to fire with remaining time
      setTimeout( function(){ execute(); }, remainingDelay );
    }
    // otherwise, we simply execute our throttled function
    else {
      execute();
    }
  }
}
