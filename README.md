# Throttled Function

### About
 - *version:* 1.0.1
 - *last touched:* 2014.9.30
 - *author:* [Stephen Cave](sccave@gmail.com)

### Description
  Use this function as a middleman to add to a normal event triggered 
  function a delay buffer that prevents spam calling. The provided function "fn"
  will be called only so often as defined by "delay" in ms. Each attempt
  will assure a call is made after the buffer delay. The call will be made with
  the set of arguments from the last recieved request call. This assures that
  a request is always made after a request, and the request is always using the
  latest data provided.

### Example
    // binding via jQuery with a 1 second buffer delay between calls
    $('input[name="test"]').on('keyup', throttledFunction( function(e) {
        var inputValue = this.value;
    
        // ... do something with value here, like make an ajax request...
    
    }, 1000 ));

### License
(The MIT License)

Copyright (c) 2014 [Stephen Cave](sccave@gmail.com) @ [shiboe.com](http://shiboe.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
