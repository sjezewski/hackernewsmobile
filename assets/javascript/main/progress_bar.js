/* 
 * Mobile Progress Bar 
*/


function progressBar(selector, options) {
  this.wrapper = x$(selector)[0];  
  this.options = options;

  this.setupElements();

  this.value = 0;  
  this.min = 0;
  this.max = 100;
  this.ticks = 1;
  
  if (options && options['ticks']) {
    this.ticks = options['ticks'];
  }

}

progressBar.prototype = {
  
  setupElements: function() {
    if (this.wrapper.children.length == 0) {
      this.bar = document.createElement("div");
      x$(this.bar).attr("class", "bar");
      this.wrapper.appendChild(this.bar);

      if (this.options && this.options['number']) {
	this.number = document.createElement("span");
	x$(this.number).addClass('number');
	this.wrapper.appendChild(this.number);      
      }

    }
    
  },

  setValue: function(newValue) {

    if (newValue < 0) {
      this.value = 0;
    }
    else if (newValue > 100) {
      this.value = 100;
    }
    else {
      this.value = newValue;
    }

    return this.value;
  },

  bump: function() {
    console.log('bumpin');

    if (this.ticks) {
      var chunk = (this.max - this.min)/this.ticks;
      console.log("chunk:" + chunk);
      this.update(this.value + chunk);
    } else {
      this.update(this.value + 1);
    }
  },

  update: function(percentage) {
    console.log("updating:" + percentage);
    this.setValue(percentage);

    x$(this.bar).setStyle("width", this.value + "%");
    if (this.options && this.options['number']) {
      x$(this.number).inner(this.value + "%");
    }
  }
  
  
};


function gogogo(p) {
  if (p.value < 100) {
    p.update(p.value + 3);
    setTimeout(function(){gogogo(p)}, 100);
  }
}

