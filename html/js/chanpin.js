var c1 = document.querySelector('.linkc1');
var c2 = document.querySelector('.linkc2');
var c3 = document.querySelector('.linkc3');
var c4 = document.querySelector('.linkc4');
var c5 = document.querySelector('.linkc5');
var c6 = document.querySelector('.linkc6');
var c1bg = document.querySelector('.c1bg');
var c2bg = document.querySelector('.c2bg');
var c3bg = document.querySelector('.c3bg');
var c4bg = document.querySelector('.c4bg');
var c5bg = document.querySelector('.c5bg');
var c6bg = document.querySelector('.c6bg');
var c1t = document.querySelector('.c1t');
var c2t = document.querySelector('.c2t');
var c3t = document.querySelector('.c3t');
var c4t = document.querySelector('.c4t');
var c5t = document.querySelector('.c5t');
var c6t = document.querySelector('.c6t');
 function getvl(name) {
  var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
  if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
	return "";
};
var a = getvl('c');
console.log(a);
if(a == 1){
	c1bg.style.display = 'block';
	c1t.style.background = 'red';
	c1.style.background = 'url(../img/chanpin/pro_e_hov.png) no-repeat center #32c8d6';
}
if(a == 2){
	c2bg.style.display = 'block';
	c1bg.style.display = 'none';
	c2t.style.background = 'red';
	c1t.style.background = '#49494e';
	c2.style.background = 'url(../img/chanpin/pro_f.png) no-repeat center #32c8d6';
	c1.style.background = 'url(../img/chanpin/pro_e_hov.png) no-repeat center #e2e2e2';
}
if(a == 3){
	c3bg.style.display = 'block';
	c1bg.style.display = 'none';
	c3t.style.background = 'red';
	c1t.style.background = '#49494e';
	c3.style.background = 'url(../img/chanpin/pro_f.png) no-repeat center #32c8d6';
	c1.style.background = 'url(../img/chanpin/pro_e_hov.png) no-repeat center #e2e2e2';
}
if(a == 4){
	c4bg.style.display = 'block';
	c1bg.style.display = 'none';
	c4t.style.background = 'red';
	c1t.style.background = '#49494e';
	c4.style.background = 'url(../img/chanpin/pro_f.png) no-repeat center #32c8d6';
	c1.style.background = 'url(../img/chanpin/pro_e_hov.png) no-repeat center #e2e2e2';
}
if(a == 5){
	c5bg.style.display = 'block';
	c1bg.style.display = 'none';
	c5t.style.background = 'red';
	c1t.style.background = '#49494e';
	c5.style.background = 'url(../img/chanpin/pro_f.png) no-repeat center #32c8d6';
	c1.style.background = 'url(../img/chanpin/pro_e_hov.png) no-repeat center #e2e2e2';
}
if(a == 6){
	c6bg.style.display = 'block';
	c1bg.style.display = 'none';
	c6t.style.background = 'red';
	c1t.style.background = '#49494e';
	c6.style.background = 'url(../img/chanpin/pro_f.png) no-repeat center #32c8d6';
	c1.style.background = 'url(../img/chanpin/pro_e_hov.png) no-repeat center #e2e2e2';
}