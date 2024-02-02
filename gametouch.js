const joystick=document.cheiteElement("template"),cross=document.createElement("template");joystick.innerHTML=`
<style>
#btncontainer{position:fixed;background:rgba(255,255,255,.2);width:100px;height:100px;border-radius:50%;border:6px double gray}#btncontainer:before{content:'';position:absolute;background:rgba(0,255,0,.01);width:30px;height:30px;border-radius:50%;border:6px solid gray;left:26.7%;top:30px}#movable{position:absolute;background:rgba(0,0,0,.1);width:50px;height:50px;border-radius:50%;top:23.3%;left:20.3%;border:3px dotted gray}
</style>
`,cross.innerHTML=`
<style>
.cross-container{position:fixed;width:180px;height:180px;left:25%;top:5%;z-index:9999;border:none}.down,.right,.up{width:50px;height:50px;background:rgba(3,3,3,.08);position:relative}.left::before{content:'';width:0;height:0;border-style:solid;border-width:15px 25px 15px 0;border-color:transparent rgba(255,255,255,.5) transparent transparent;position:absolute;top:50%;right:30%;transform:translate(0,-50%)}.down::before,.right::before,.up::before{content:'';width:0;height:0;border-style:solid;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.right{top:35%;left:38%}.right::before{border-width:15px 0 15px 25px;border-color:transparent transparent transparent rgba(255,255,255,.5)}.up{right:25%}.up::before{border-width:0 15px 25px;border-color:transparent transparent rgba(255,255,255,.5)}.down{top:40%;left:35%}.down::before{border-width:25px 15px 0;border-color:rgba(255,255,255,.5) transparent transparent}
</style>
`;let moveLeft=!1,moveRight=!1,moveUp=!1,moveDown=!1,movable;function Swiper(){this.btncontainer=document.createElement("div"),this.movable=document.createElement("div"),movable=this.movable,this.btncontainer.setAttribute("id","btncontainer"),this.movable.setAttribute("id","movable"),this.addContainer=function(t){document.body.appendChild(t)},this.addMovable=function(t){this.btncontainer.appendChild(t)};let t=joystick.content.cloneNode(!0);document.body.appendChild(t),this.btncontainer.ontouchmove=move,this.btncontainer.ontouchstart=action,this.btncontainer.ontouchend=end}let startX,startY,moveX,moveY;function action(t){t.preventDefault(),startX=t.targetTouches[0].clientX,startY=t.targetTouches[0].clientY}function move(t){moveX=t.touches[0].clientX,moveY=t.touches[0].clientY,startX-20>moveX?(moveLeft=!0,moveRight=!1,moveUp=!1,moveDown=!1,movable.style.left="-1.5px"):startX+20<moveX&&(moveRight=!0,moveReft=!1,moveUp=!1,moveDown=!1,movable.style.left="40px"),startY-20>moveY?(moveUp=!0,moveLeft=!1,moveRight=!1,moveDown=!1,movable.style.top="-1.5px"):startY+20<moveY&&(moveUp=!1,moveLeft=!1,moveRight=!1,moveDown=!0,movable.style.top="40px")}function end(t){movable.style.left="20px",movable.style.top="23px",moveLeft=!1,moveRight=!1,moveUp=!1,moveDown=!1}let arrowL=!1,arrowR=!1,arrowU=!1,arrowD=!1;function crossButton(){this.container=document.createElement("div"),this.container.classList.add("cross-container"),document.body.appendChild(this.container),this.container.innerHTML=`
 <button id="left" class="left"></button>
 <button id="right" class="right"></button>
 <button id="up" class="up"></button>
 <button id="down" class="down"></button>
 
 `;let t=document.querySelector("#left"),o=document.querySelector("#right"),e=document.querySelector("#up"),r=document.querySelector("#down");t.ontouchstart=function(){arrowL=!0},t.ontouchend=function(){arrowL=!1},o.ontouchstart=function(){arrowR=!0},o.ontouchend=function(){arrowR=!1},e.ontouchstart=function(){arrowU=!0},e.ontouchend=function(){arrowU=!1},r.ontouchstart=function(){arrowD=!0},r.ontouchend=function(){arrowD=!1}}const cloneCross=cross.content.cloneNode(!0);document.body.appendChild(cloneCross);
