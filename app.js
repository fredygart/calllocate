var validar = Number(document.getElementById("validator").title);
var jsonDatas = (function(){return (validar == 1)?"https://cdn.jsdelivr.net/gh/fredygart/calllocatedata/i000-001.json":"https://cdn.jsdelivr.net/gh/fredygart/calllocatedata/e000-000.json";})();
var demo = document.getElementById("demo");
var cnt = document.getElementById("cnt");
var ms = (function(){return (validar == 1)?["January","February","March","April","May","June","July","August","September","October","November","December"]:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];})();
var d = new Date();
var monthx = d.getMonth()+1;
var fechaActual = Number(String(d.getFullYear()) + (function(){ return (monthx<10) ? String("0"+monthx):String(monthx); })() + (function(){return (d.getDate()<10)?String("0"+d.getDate()):String(d.getDate())})());
var fechaUpdate = 20210217;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    buildData();
    showbgb();
  }
};
xmlhttp.open("GET", jsonDatas, true);
xmlhttp.send();


function buildData(){
for(x in data){
demo.innerHTML += (function(){return (Number(this.data[x].fecha)<fechaActual)?"<li class='convx'>":"<li class='conv'>"})()+(function(){return (validar == 1)?"Title: ":"Título: ";})()+data[x].name+"<br>"+(function(){return (validar == 1)?"Details: ":"Información: ";})()+data[x].des+"<br>---<br>"+(function(){return (validar == 1)?"Subject: ":"Tema: ";})()+data[x].sub+"<br>"+(function(){return (validar == 1)?"Amount: <ins>":"Cantidad: <ins>";})()+data[x].amount+"</ins><br>"+(function(){return (validar == 1)?"Type: ":"Tipo: ";})()+data[x].typ+"<br>"+(function(){return (validar == 1)?"Origin: ":"Origen: ";})()+data[x].cty+"<br>"+"<a href='"+data[x].lnk+(function(){return (validar == 1)?"'>More information</a>":"'>Más información</a>";})()+"<br>"+(function(){return (validar == 1)?" Deadline: ":" Fecha límite: ";})()+(function(){return (Number(this.data[x].fecha)<fechaActual)?"<span class='del'>"+fFecha(this.data[x].fecha)+(function(){return (validar == 1)?" [expired]</span>":" [vencida]</span>";})():fFecha(this.data[x].fecha);})()+"</li>";
}
setTimeout(function() {
var openC = document.getElementsByClassName("conv").length;
var exprC = document.getElementsByClassName("convx").length;
cnt.innerHTML = "<span style='color: orange;'>["+(function(){return (validar == 1)?"Total Calls":"Total";})()+": "+(openC+exprC)+"]</span> <span style='color: lightgreen;'>["+(function(){return (validar == 1)?"Open":"Abiertas";})()+": "+openC+"]</span> <span style='color: red;'>["+(function(){return (validar == 1)?"Expired":"Vencidas";})()+": "+exprC+"]</span>";
}, 3000);
demo.setAttribute("class","w3-animate-top");
}

//modal script
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("modalContent");
function openModal(){ modal.style.display = "block"; }
function spanClick(){ modal.style.display = "none"; }

//topBar
document.getElementById("topmssg").innerHTML = "<p onclick='modalAbout()'>"+(function(){return (validar == 1)?"About this website!":"Acerca del sitio";})()+"</p><p onclick='modalSocial()'><img src='"+(function(){return (validar == 1)?"sc.png":"../sc.png";})()+"' style='vertical-align:middle;'>SocialMedia!</p>";

//modalFunctions
function modalAbout(){
modalContent.innerHTML = (function(){return (validar == 1)?"<h2>About this website:</h2><p>Coming soon...</p>":"<h2>Acerca del sitio:</h2><p>Proximamente...</p>";})();
openModal();
}
function modalSocial(){
modalContent.innerHTML = (function(){return (validar == 1)?"<h2>Social Media: Coming soon...</h2><p>Stay up to day and receive notifications about new open calls every day.</p><p>Please follow us:</p>":"<h2>Redes sociales: Próximamente...</h2><p>Mantente informado y recibe notificaciones sobre nuevas convocatorias todos los días.</p><p>Síguenos en:</p>";})()+"<p><a href='#'><img class='sImg' src='https://i.imgur.com/qe6PJLJ.png'></a><a href='#'><img class='sImg' src='https://i.imgur.com/lJPVqp2.png'></a></p>";
openModal();
}

function fFecha(ff){
return String(ff).slice(0,4)+"|"+ms[Number(String(ff).slice(4,6)-1)]+"|"+String(ff).slice(6,8);
}

document.getElementById("ttle").innerHTML = (function(){return (validar == 1)?"In the middle of <ins>dificulty</ins> lies <b style='color:#222;'>opportunity.</b>":"En medio de la <ins>dificultad</ins> yace la <b style='color:#222;'>oportunidad.</b>";})()+" <span style='background: #81fbb8; color: #222;'>["+(function(){return (validar == 1)?"PageUpdatedOn":"Actualización";})()+":"+fFecha(fechaUpdate)+"]</span>";

var hiderN = true;
var expH = document.getElementsByClassName("convx");
document.getElementById("hExp").onclick = function(){
if (hiderN){
for (var ii=0;ii<expH.length;ii++){
expH[ii].style.display = "none";
}
} else {
for (var ii=0;ii<expH.length;ii++){
expH[ii].style.display = "block";
}
}
hiderN = !hiderN;
}

document.getElementById("inpt1").onclick = function(){
this.value = "";
w3.filterHTML('#id01', 'li', this.value);
}
document.getElementById("topIcon").onclick = function(){
window.scroll(0,0);
};

var bgb = document.getElementById("bgb");
function showbgb(){
bgb.setAttribute("src","https://i.imgur.com/3D0UbPu.jpg");
setTimeout(function(){
bgb.style.display = "block";
bgb.setAttribute("class","w3-animate-opacity");    
},2000);
}

//(function(){return (validar == 1)?"ingles":"espanol";})()
