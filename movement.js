AFRAME.registerComponent('MovementOfFreedom', {
    init: function () {
        window.addEventListener("keydown",(e) => {
            R_R = this.el.getAttribute('rotation')
            if (e.key === "ArrowRight") {
                this.el.setAttribute("rotation",{
                    y:90,
                });
            }
            if (e.key === "ArrowUp") {
                this.el.setAttribute("rotation",{
                    y:180
                });
            }
            if (e.key === "ArrowLeft") {
                this.el.setAttribute("rotation",{
                    y:270,
                });
            }
            if (e.key === "ArrowDown") {
                this.el.setAttribute("rotation",{
                    y:0,
                });
            }
        });
    },
    tick: function () {
        Cam = document.getElementById('CamDon');
        CamPos = Cam.getAttribute('position');
    }
 })