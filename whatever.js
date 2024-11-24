AFRAME.registerComponent('whateveroffreedom', {
    init: function () {
       TurtlE = 5
       this.el.addEventListener('collide', function (e){
          TurtlE-=1
          e.detail.target.el.remove();
          pur=document.getElementById("Purpl")
          pur.setAttribute('text', {value: String(TurtlE)});
          if (TurtlE == 0){
            uGg=document.getElementById("VAl0")
          uGg.setAttribute('text', {value: "Victory!"});
          }
       });
    
    },
});