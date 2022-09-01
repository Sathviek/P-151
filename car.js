AFRAME.registerComponent("car-model",{
    schema:{
        moveRef:{type:"string",default:""},
        
    },
    tick : function(){
        this.data.moveRef=this.data.moveRef+0.01;
        var pos=this.el.getAttribute("position");
        pos.x=this.data.moveX;
        this.el.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z})
    }
    
})