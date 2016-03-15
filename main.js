function clear(){
  cnt = document.getElementById("content");
  for(var i=0,n=cnt.childNodes.length;i<n;i+=1){
    cnt.childNodes[i].className="hide";
  }
}  

function show(id){
  clear();
  document.getElementById(id).className = "show";
}

clear();
show("home");


/*
var stage = new PIXI.Stage(0x66FF99);
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
document.getElementById("canvas").appendChild(renderer.view);

var ecoliTexture = PIXI.Texture.fromImage("images/ecoli.png");
var ecoli = new PIXI.Sprite(ecoliTexture);
ecoli.anchor.x = 0.5;
ecoli.anchor.y = 0.5;

ecoli.position.x = 200;
ecoli.position.y = 200;

stage.addChild(ecoli);



function render(){
  
  renderer.render(stage);
  requestAnimationFrame(render);
  
}


*/