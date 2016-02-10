(function(){
  "use strict";


  var Moosipurk = function(){

    // SINGLETON PATTERN (4 rida)
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this; // this viitab moosipurgile

    console.log(this);
    //console.log('moosipurgi sees');

    // KĆ•IK MUUTUJAD, mis on Ć¼ldised ja muudetavad
    this.click_count = 0;



    //panen rakenduse tĆ¶Ć¶le
    this.init();
  };

  //kĆµik moosipurgi funktsioonid tulevad siia sisse
  Moosipurk.prototype = {
    init: function(){
      console.log('rakendus kĆ¤ivitus');
      // Siia tuleb esialgne loogika
      // hakka kuulama hiireklĆµpse
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
    },
    addNewClick: function(event){
      //console.log(event);
      this.click_count++;
      console.log(this.click_count);

    }
  };


  window.onload = function(){
    var app = new Moosipurk();
  };

})();
