
/*
  Utility: Throttled Function
  ***************************
  author: Stephen Cave
  email:  sccave@gmail.com
  last:   2014.9.30
  ver:    1.0.1
  
  Use this function as a middleman to add to a normal event triggered 
  function a delay buffer that prevents spam calling. The provided function "fn"
  will be called only so often as defined by "delay" in ms. Each attempt
  will assure a call is made after the buffer delay. The call will be made with
  the set of arguments from the last recieved request call. This assures that
  a request is always made after a request, and the request is always using the
  latest data provided.
  
  example:
  
  // binding via jQuery with a 1 second buffer delay between calls
  $('input[name="test"]').on('keyup', throttledFunction( function(e) {
    var inputValue = this.value;
    
    // ... do something with value here, like make an ajax request...
    
  }, 1000 ));
*/

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