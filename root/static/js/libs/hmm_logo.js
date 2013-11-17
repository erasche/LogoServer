/*

 HMM logo
 http://github.com/url/here
 Copyright 2013, Jody Clements.
 Licensed under the MIT License.
 http://url/to/license
*/
(function(c){function k(){if(!b){var a=document.createElement("canvas");b=!(!a.getContext||!a.getContext("2d"))}return b}function f(a,b){b=b||{};this.value=a;this.width=parseInt(b.width,10)||100;"W"===this.value&&(this.width+=30*this.width/100);this.height=parseInt(b.height,10)||100;this.color=b.color||"#000000";this.fontSize=b.fontSize||138;this.scaled=function(){};this.draw=function(a,b,h,x,u){var c=a.font;a.transform(h/this.width,0,0,b/this.height,x,u);a.fillStyle=this.color;a.textAlign="center";
a.font="bold "+this.fontSize+"px Arial";a.fillText(this.value,0,0);a.setTransform(1,0,0,1,0,0);a.fillStyle="#000000";a.font=c}}function m(a){function b(h,a,u){h.beginPath();h.moveTo(0,a);h.lineTo(u,a);h.lineWidth=1;h.strokeStyle="#999999";h.stroke()}function e(h,a,b,u,e){e=e||"#999999";h.beginPath();h.moveTo(a,b);h.lineTo(a,b+u);h.lineWidth=1;h.strokeStyle=e;h.stroke()}function d(h,a,b,u,e,c,d,l){h.font=e+"px Arial";h.fillStyle=d;h.fillRect(a,b-10,c,14);h.textAlign="center";h.fillStyle=l;h.fillText(u,
a+c/2,b)}a=a||{};this.column_width=a.column_width||34;this.height=a.height||300;this.data=a.data||null;this.debug=a.debug||null;this.scale_height_enabled=a.height_toggle||null;this.zoom_enabled=a.zoom_buttons&&"disabled"===a.zoom_buttons?null:!0;this.alphabet=a.data.alphabet||"dna";this.dom_element=a.dom_element||c("body");this.called_on=a.called_on||null;this.start=a.start||1;this.end=a.end||this.data.height_arr.length;this.default_zoom=this.zoom=parseFloat(a.zoom)||0.4;this.data.max_height=a.scaled_max?
a.data.max_height_obs||this.data.max_height||2:a.data.max_height_theory||this.data.max_height||2;this.dna_colors={A:"#cbf751",C:"#5ec0cc",G:"#ffdf59",T:"#b51f16",U:"#b51f16"};this.aa_colors={A:"#FF9966",C:"#009999",D:"#FF0000",E:"#CC0033",F:"#00FF00",G:"#f2f20c",H:"#660033",I:"#CC9933",K:"#663300",L:"#FF9933",M:"#CC99CC",N:"#336666",P:"#0099FF",Q:"#6666CC",R:"#990000",S:"#0000FF",T:"#00FFFF",V:"#FFCC33",W:"#66CC66",Y:"#006600"};this.colors=this.dna_colors;"aa"===this.alphabet&&(this.colors=this.aa_colors);
this.canvas_width=5E3;this.letters={};a=null;for(a in this.colors)this.letters[a]=new f(a,{color:this.colors[a]});this.scrollme=null;this.previous_target=0;this.rendered=[];this.previous_zoom=0;this.render=function(h){if(this.data){h=h||{};var a=h.zoom||this.zoom,b=h.target||1,u=c(this.dom_element).parent().width(),e=1,d=0;if(b!==this.previous_target){this.previous_target=b;h.start&&(this.start=h.start);h.end&&(this.end=h.end);0.1>=a?a=0.1:1<=a&&(a=1);this.zoom=a;h=this.end||this.data.height_arr.length;
var g=this.start||1;h=h>this.data.height_arr.length?this.data.height_arr.length:h;h=h<g?g:h;g=g>h?h:g;g=1<g?g:1;this.y=this.height-20;this.max_width=this.column_width*(h-g+1);u>this.max_width&&(a=1,this.zoom_enabled=!1);this.zoom=a;this.zoomed_column=this.column_width*a;this.total_width=this.zoomed_column*(h-g+1);if(1>a)for(;this.total_width<u&&!(this.zoom+=0.1,this.zoomed_column=this.column_width*this.zoom,this.total_width=this.zoomed_column*(h-g+1),this.zoom_enabled=!1,1<=a););b>this.total_width&&
(b=this.total_width);c(this.dom_element).attr({width:this.total_width+"px"}).css({width:this.total_width+"px"});u=Math.ceil(this.total_width/this.canvas_width);this.columns_per_canvas=Math.ceil(this.canvas_width/this.zoomed_column);this.previous_zoom!==this.zoom&&(c(this.dom_element).find("canvas").remove(),this.previous_zoom=this.zoom,this.rendered=[]);this.canvases=[];this.contexts=[];for(d=0;d<u;d++){var l=this.columns_per_canvas*d+g,n=l+this.columns_per_canvas-1;n>h&&(n=h);var f=(n-l+1)*this.zoomed_column;
f>e&&(e=f);var q=e*d,v=q+f;if(b<v+v/2&&b>q-q/2&&1!==this.rendered[d]){var q=this.canvases,B=d,w=this.dom_element,t=this.height,m=f,C=d,D=e,z=c(w).find("#canv_"+C);z.length||(c(w).append('<canvas class="canvas_logo" id="canv_'+C+'"  height="'+t+'" width="'+m+'" style="left:'+D*C+'px"></canvas>'),z=c(w).find("#canv_"+C));c(z).attr("width",m).attr("height",t);k()||(z[0]=G_vmlCanvasManager.initElement(z[0]));q[B]=z[0];this.contexts[d]=this.canvases[d].getContext("2d");this.contexts[d].setTransform(1,
0,0,1,0,0);this.contexts[d].clearRect(0,0,f,this.height);this.contexts[d].fillStyle="#ffffff";this.contexts[d].fillRect(0,0,v,this.height);12<this.zoomed_column?(f=parseInt(10*a,10),f=10<f?10:f,this.debug&&this.render_with_rects(l,n,d,1),this.render_with_text(l,n,d,f)):this.render_with_rects(l,n,d);this.rendered[d]=1}}!this.scrollme&&k()&&(this.scrollme=new EasyScroller(c(this.dom_element)[0],{scrollingX:1,scrollingY:0,eventTarget:this.called_on}));1!==b&&k()&&this.scrollme.reflow()}}};this.render_x_axis_label=
function(){c(this.dom_element).parent().before('<div class="logo_xaxis" class="centered" style="margin-left:40px"><p class="xaxis_text" style="width:10em;margin:1em auto">Model Position</p></div>')};this.render_y_axis_label=function(){c(this.dom_element).parent().before('<canvas class="logo_yaxis" height="300" width="55"></canvas>');var a=c(this.called_on).find(".logo_yaxis");Math.abs(this.data.max_height);isNaN(this.data.min_height_obs)||parseInt(this.data.min_height_obs,10);k()||(a[0]=G_vmlCanvasManager.initElement(a[0]));
var a=a[0].getContext("2d"),b="Information Content (bits)";a.beginPath();a.moveTo(55,1);a.lineTo(40,1);a.moveTo(55,256);a.lineTo(40,256);a.moveTo(55,128);a.lineTo(40,128);a.lineWidth=1;a.strokeStyle="#666666";a.stroke();a.fillStyle="#666666";a.textAlign="right";a.font="bold 10px Arial";a.textBaseline="top";a.fillText(parseFloat(this.data.max_height).toFixed(1),38,0);a.textBaseline="middle";a.fillText(parseFloat(this.data.max_height/2).toFixed(1),38,128);a.fillText("0",38,256);"score"===this.data.height_calc&&
(b="Score (bits)");a.save();a.translate(5,this.height/2-20);a.rotate(-Math.PI/2);a.textAlign="center";a.font="normal 12px Arial";a.fillText(b,1,0);a.restore();a.fillText("occupancy",55,263);a.fillText("ins. prob.",50,280);a.fillText("ins. len.",46,296)};this.render_x_axis_label();this.render_y_axis_label();this.render_with_text=function(a,x,c,f){var p=0,s=a,g=0,g=Math.abs(this.data.max_height),l=isNaN(this.data.min_height_obs)?0:parseInt(this.data.min_height_obs,10),g=g+Math.abs(l),g=Math.round(100*
Math.abs(this.data.max_height)/g);Math.round(256*g/100);x+3<=this.end&&(x+=3);for(g=a;g<=x;g++){if(this.data.mmline&&1===this.data.mmline[g-1])this.contexts[c].fillStyle="#cccccc",this.contexts[c].fillRect(p,10,this.zoomed_column,this.height-40);else if(a=this.data.height_arr[g-1],l=[],a){for(var n=0,y=a.length,q=0,q=0;q<y;q++){var v=a[q].split(":",2),m=p+this.zoomed_column/2,w=null;if(0.01<v[1]){var w=parseFloat(v[1])/this.data.max_height,v=255-n,t=255*w;k()||(v+=t*(w/2));l[q]=[t,this.zoomed_column,
m,v];n+=t}}for(q=y;0<=q;q--)l[q]&&this.letters[a[q][0]]&&this.letters[a[q][0]].draw(this.contexts[c],l[q][0],l[q][1],l[q][2],l[q][3])}e(this.contexts[c],p,this.height-15,5);e(this.contexts[c],p,this.height-30,5);e(this.contexts[c],p,this.height-45,5);0.7>this.zoom?0===g%5&&this.draw_column_divider({context_num:c,x:p,fontsize:10,column_num:s,ralign:!0}):this.draw_column_divider({context_num:c,x:p,fontsize:f,column_num:s});a=this.data.delete_probs[g-1];l=this.height-35;n="#ffffff";y="#555555";0.75>
a?(n="#2171b5",y="#ffffff"):0.85>a?n="#6baed6":0.95>a&&(n="#bdd7e7");d(this.contexts[c],p,l,a,f,this.zoomed_column,n,y);a=this.contexts[c];l=p;n=this.height;y=this.zoomed_column;q=this.data.insert_probs[g-1];m=n-20;w="#ffffff";v="#555555";0.1<q?(w="#d7301f",v="#ffffff"):0.05<q?w="#fc8d59":0.03<q&&(w="#fdcc8a");d(a,l,m,q,f,y,w,v);0.03<q&&e(a,l+y,n-30,-30-n,w);a=this.data.insert_lengths[g-1];l="#ffffff";n="#555555";9<a?(l="#d7301f",n="#ffffff"):7<a?l="#fc8d59":4<a&&(l="#fdcc8a");d(this.contexts[c],
p,this.height-5,a,f,this.zoomed_column,l,n);p+=this.zoomed_column;s++}b(this.contexts[c],this.height-15,this.total_width);b(this.contexts[c],this.height-30,this.total_width);b(this.contexts[c],this.height-45,this.total_width);b(this.contexts[c],0,this.total_width)};this.draw_column_divider=function(a){var b=a.ralign?a.x+this.zoomed_column:a.x,u=a.ralign?a.x+2:a.x;e(this.contexts[a.context_num],b,this.height-30,-30-this.height,"#dddddd");e(this.contexts[a.context_num],b,0,5);var b=this.contexts[a.context_num],
c=this.zoomed_column,d=a.column_num,f=a.ralign;b.font=a.fontsize+"px Arial";b.textAlign=f?"right":"center";b.fillStyle="#666666";b.fillText(d,u+c/2,10)};this.render_with_rects=function(a,c,d,f){var p=0,s=a,g=0,g=Math.abs(this.data.max_height),l=Math.abs(this.data.min_height_obs),g=g+l,g=Math.round(100*Math.abs(this.data.max_height)/g);Math.round(256*g/100);l=10;for(g=a;g<=c;g++){if(this.data.mmline&&1===this.data.mmline[g-1])this.contexts[d].fillStyle="#cccccc",this.contexts[d].fillRect(p,10,this.zoomed_column,
this.height-40);else{a=this.data.height_arr[g-1];for(var n=0,k=a.length,q=0,q=0;q<k;q++){var v=a[q].split(":",2);if(0.01<v[1]){var m=parseFloat(v[1])/this.data.max_height,w=p,m=256*m,t=256-n-m;f?(this.contexts[d].strokeStyle=this.colors[v[0]],this.contexts[d].strokeRect(w,t,this.zoomed_column,m)):(this.contexts[d].fillStyle=this.colors[v[0]],this.contexts[d].fillRect(w,t,this.zoomed_column,m));n+=m}}}0.2>this.zoom?l=20:0.3>this.zoom&&(l=10);0===g%l&&(e(this.contexts[d],p+this.zoomed_column,this.height-
30,parseFloat(this.height),"#dddddd"),e(this.contexts[d],p+this.zoomed_column,0,5),a=this.contexts[d],n=p-2,k=this.zoomed_column,q=s,a.font="10px Arial",a.textAlign="right",a.fillStyle="#666666",a.fillText(q,n+k/2,10));a=this.contexts[d];n=p;k=this.height-42;q=this.zoomed_column;v=this.data.insert_probs[g-1]/100;w=this.data.insert_lengths[g-1];m=this.data.delete_probs[g-1]/100;t="#ffffff";0.1<v?t="#d7301f":0.05<v?t="#fc8d59":0.03<v&&(t="#fdcc8a");a.fillStyle=t;a.fillRect(n,k+12,q,10);t="#ffffff";
9<w?t="#d7301f":7<w?t="#fc8d59":4<w&&(t="#fdcc8a");a.fillStyle=t;a.fillRect(n,k+24,q,10);t="#ffffff";0.25<m?t="#2171b5":0.15<m?t="#6baed6":0.05<m&&(t="#bdd7e7");a.fillStyle=t;a.fillRect(n,k,q,10);b(this.contexts[d],this.height-45,this.total_width);b(this.contexts[d],0,this.total_width);p+=this.zoomed_column;s++}};this.toggle_scale=function(){var a=this.current_column();this.data.max_height=this.data.max_height===this.data.max_height_obs?this.data.max_height_theory:this.data.max_height_obs;this.rendered=
[];c(this.called_on).find(".logo_yaxis").remove();this.render_y_axis_label();this.scrollme.reflow();this.scrollToColumn(a+1);this.scrollToColumn(a)};this.current_column=function(){var a=this.scrollme.scroller.getValues().left,b=this.column_width*this.zoom,a=a/b,b=c(this.called_on).find(".logo_container").width()/b/2;return Math.ceil(a+b)};this.change_zoom=function(a){var b=0.3;a.target?b=a.target:a.distance&&(b=(parseFloat(this.zoom)-parseFloat(a.distance)).toFixed(1),"+"===a.direction&&(b=(parseFloat(this.zoom)+
parseFloat(a.distance)).toFixed(1)));1<b?b=1:0.1>b&&(b=0.1);c(this.called_on).find(".logo_graphic").width()*b/this.zoom>c(this.called_on).find(".logo_container").width()&&(a.column?(this.zoom=b,this.render({zoom:this.zoom}),this.scrollme.reflow(),b=this.coordinatesFromColumn(a.column),this.scrollme.scroller.scrollTo(b-a.offset)):(a=this.current_column(),this.zoom=b,this.render({zoom:this.zoom}),this.scrollme.reflow(),this.scrollToColumn(a)));return this.zoom};this.columnFromCoordinates=function(a){return Math.ceil(a/
(this.column_width*this.zoom))};this.coordinatesFromColumn=function(a){return(a-1)*this.column_width*this.zoom+this.column_width*this.zoom/2};this.scrollToColumn=function(a,b){var d=c(this.called_on).find(".logo_container").width()/2,u=this.coordinatesFromColumn(a);this.scrollme.scroller.scrollTo(u-d,0,b)}}var b=null;c.fn.hmm_logo=function(a){var b=null,e=c('<div class="logo_graphic">');if(k()){a=a||{};c(this).append(c('<div class="logo_container">').append(e).append('<div class="logo_divider">'));
a.data=c(this).data("logo");if(null===a.data)return;a.dom_element=e;a.called_on=this;var d=c('<form class="logo_form"><fieldset><label for="position">Column number</label><input type="text" name="position" class="logo_position"></input><button class="button logo_change">Go</button></fieldset></form>'),h=c('<div class="logo_controls">'),b=new m(a);b.render(a);b.scale_height_enabled&&b.data.max_height_obs<b.data.max_height_theory&&h.append('<button class="logo_scale button">Toggle Scale</button>');
b.zoom_enabled&&h.append('<button class="logo_zoomout button">-</button><button class="logo_zoomin button">+</button>');d.append(h);c(this).append(d);c(this).find(".logo_reset").bind("click",function(a){a.preventDefault();a=b;a.change_zoom({target:a.default_zoom})});c(this).find(".logo_change").bind("click",function(a){a.preventDefault()});c(this).find(".logo_zoomin").bind("click",function(a){a.preventDefault();b.change_zoom({distance:0.1,direction:"+"})});c(this).find(".logo_zoomout").bind("click",
function(a){a.preventDefault();b.change_zoom({distance:0.1,direction:"-"})});c(this).find(".logo_scale").bind("click",function(a){a.preventDefault();b.toggle_scale()});c(this).find(".logo_position").bind("change",function(){var a=b;this.value.match(/^\d+$/m)&&a.scrollToColumn(this.value,1)});e.bind("dblclick",function(a){var d=b,e=c(this).offset(),e=parseInt(a.pageX-e.left,10);a=a.pageX-c(this).parent().offset().left;e=d.columnFromCoordinates(e);1>d.zoom?d.change_zoom({target:1,offset:a,column:e}):
d.change_zoom({target:0.3,offset:a,column:e})});a.column_info&&e.bind("click",function(d){var e=b,h=c('<table class="logo_col_info"></table>'),f="<tr>",k="",g=c(this).offset();d=parseInt(d.pageX-g.left,10);c(this).parent().offset();e=e.columnFromCoordinates(d);d=[];var l=g=0,n=0,n="Probability";b.data.height_calc&&"score"===b.data.height_calc?(n="Score",d=b.data.height_arr[e-1].slice(0).reverse()):d=b.data.probs_arr[e-1].slice(0).reverse();g=Math.ceil(d.length/5);for(l=0;l<g;l++)f=1<g&&l<g-1?f+('<th>Residue</th><th class="odd">'+
n+"</th>"):f+("<th>Residue</th><th>"+n+"</th>");h.append(c(f+"</tr>"));for(l=0;5>l;l++){k+="<tr>";for(n=l;d[n];)f=d[n].split(":",2),k=1<g&&15>n?k+('<td class="'+b.alphabet+"_"+f[0]+'"><div></div>'+f[0]+'</td><td class="odd">'+f[1]+"</td>"):k+('<td class="'+b.alphabet+"_"+f[0]+'"><div></div>'+f[0]+"</td><td>"+f[1]+"</td>"),n+=5;k+="</tr>"}h.append(c(k));c(a.column_info).empty().append(c("<p> Column:"+e+"</p><div><p>Occupancy: "+b.data.delete_probs[e-1]+"</p><p>Insert Probability: "+b.data.insert_probs[e-
1]+"</p><p>Insert Length: "+b.data.insert_lengths[e-1]+"</p></div>")).append(h).show()});c(document).bind(this.attr("id")+".scrolledTo",function(a,d,e,c){b.render({target:d})});c(document).keydown(function(a){a.ctrlKey||(61!==a.which&&107!==a.which||b.change_zoom({distance:0.1,direction:"+"}),109!==a.which&&0!==a.which||b.change_zoom({distance:0.1,direction:"-"}))})}else c("#logo").replaceWith(c("#no_canvas").html());return b}})(jQuery);/*

 Scroller
 http://github.com/zynga/scroller

 Copyright 2011, Zynga Inc.
 Licensed under the MIT License.
 https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt

 Based on the work of: Unify Project (unify-project.org)
 http://unify-project.org
 Copyright 2011, Deutsche Telekom AG
 License: MIT + Apache (V2)

 Inspired by: https://github.com/inexorabletash/raf-shim/blob/master/raf.js
*/
(function(c){if(!c.requestAnimationFrame){var k=Date.now||function(){return+new Date},f=Object.keys||function(a){var b={},e;for(e in a)b[e]=!0;return b},m=Object.empty||function(a){for(var b in a)return!1;return!0},b=function(){for(var a=["webkit","moz","o","ms"],b=0;4>b;b++)if(null!=c[a[b]+"RequestAnimationFrame"])return a[b]}();if(b)c.requestAnimationFrame=c[b+"RequestAnimationFrame"],c.cancelRequestAnimationFrame=c[b+"CancelRequestAnimationFrame"];else{var a={},u=1,e=null;c.requestAnimationFrame=
function(b,c){var m=u++;a[m]=b;null===e&&(e=setTimeout(function(){var b=k(),d=a,c=f(d);a={};e=null;for(var u=0,h=c.length;u<h;u++)d[c[u]](b)},1E3/60));return m};c.cancelRequestAnimationFrame=function(b){delete a[b];m(a)&&(clearTimeout(e),e=null)}}}})(this);
(function(c){var k=Date.now||function(){return+new Date},f={},m=1;c.core?core.effect||(core.effect={}):c.core={effect:{}};core.effect.Animate={stop:function(b){var a=null!=f[b];a&&(f[b]=null);return a},isRunning:function(b){return null!=f[b]},start:function(b,a,c,e,d,h){var x=k(),A=x,r=0,p=0,s=m++;h||(h=document.body);if(0===s%20){var g={},l;for(l in f)g[l]=!0;f=g}var n=function(g){g=!0!==g;var l=k();if(!f[s]||a&&!a(s))f[s]=null,c&&c(60-p/((l-x)/1E3),s,!1);else{if(g)for(var m=Math.round((l-A)/(1E3/
60))-1,B=0;B<Math.min(m,4);B++)n(!0),p++;e&&(r=(l-x)/e,1<r&&(r=1));m=d?d(r):r;!1!==b(m,l,g)&&1!==r||!g?g&&(A=l,requestAnimationFrame(n,h)):(f[s]=null,c&&c(60-p/((l-x)/1E3),s,1===r||null==e))}};f[s]=!0;requestAnimationFrame(n,h);return s}}})(this);
var EasyScroller=function(c,k){this.content=c;this.container=c.parentNode;this.options=k||{};var f=this;this.scroller=new Scroller(function(c,b,a){f.render(c,b,a)},k);this.bindEvents();this.content.style[EasyScroller.vendorPrefix+"TransformOrigin"]="left top";this.reflow()};
EasyScroller.prototype.render=function(){var c=document.documentElement.style,k;window.opera&&"[object Opera]"===Object.prototype.toString.call(opera)?k="presto":"MozAppearance"in c?k="gecko":"WebkitAppearance"in c?k="webkit":"string"===typeof navigator.cpuClass&&(k="trident");c=EasyScroller.vendorPrefix={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[k];k=document.createElement("div");var f=c+"Transform";return void 0!==k.style[c+"Perspective"]?function(c,b,a){this.content.style[f]="translate3d("+
-c+"px,"+-b+"px,0) scale("+a+")"}:void 0!==k.style[f]?function(c,b,a){this.content.style[f]="translate("+-c+"px,"+-b+"px) scale("+a+")"}:function(c,b,a){this.content.style.marginLeft=c?-c/a+"px":"";this.content.style.marginTop=b?-b/a+"px":"";this.content.style.zoom=a||""}}();
EasyScroller.prototype.reflow=function(){this.scroller.setDimensions(this.container.clientWidth,this.container.clientHeight,this.content.offsetWidth,this.content.offsetHeight);var c=this.container.getBoundingClientRect();this.scroller.setPosition(c.left+this.container.clientLeft,c.top+this.container.clientTop)};
EasyScroller.prototype.bindEvents=function(){var c=this;$(window).bind("resize",function(){c.reflow()});$("#modelTab").bind("click",function(){c.reflow()});if("ontouchstart"in window)this.container.addEventListener("touchstart",function(f){f.touches[0]&&f.touches[0].target&&f.touches[0].target.tagName.match(/input|textarea|select/i)||(c.scroller.doTouchStart(f.touches,(new Date).getTime()),f.preventDefault())},!1),document.addEventListener("touchmove",function(f){c.scroller.doTouchMove(f.touches,
(new Date).getTime(),f.scale)},!1),document.addEventListener("touchend",function(f){c.scroller.doTouchEnd((new Date).getTime())},!1),document.addEventListener("touchcancel",function(f){c.scroller.doTouchEnd((new Date).getTime())},!1);else{var k=!1;$(this.container).bind("mousedown",function(f){f.target.tagName.match(/input|textarea|select/i)||(c.scroller.doTouchStart([{pageX:f.pageX,pageY:f.pageY}],(new Date).getTime()),k=!0,f.preventDefault())});$(document).bind("mousemove",function(f){k&&(c.scroller.doTouchMove([{pageX:f.pageX,
pageY:f.pageY}],(new Date).getTime()),k=!0)});$(document).bind("mouseup",function(f){k&&(c.scroller.doTouchEnd((new Date).getTime()),k=!1)});$(this.container).bind("mousewheel",function(f){c.options.zooming&&(c.scroller.doMouseZoom(f.wheelDelta,(new Date).getTime(),f.pageX,f.pageY),f.preventDefault())})}};var Scroller;
(function(){Scroller=function(b,a){this.__callback=b;this.options={scrollingX:!0,scrollingY:!0,animating:!0,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:0.5,maxZoom:3,eventTarget:null};for(var c in a)this.options[c]=a[c]};var c=function(b){return Math.pow(b-1,3)+1},k=function(b){return 1>(b/=0.5)?0.5*Math.pow(b,3):0.5*(Math.pow(b-2,3)+2)},f={__isSingleTouch:!1,__isTracking:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,
__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,
__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(b,a,c,e){b&&(this.__clientWidth=b);a&&(this.__clientHeight=a);c&&(this.__contentWidth=c);e&&(this.__contentHeight=e);this.__computeScrollMax();this.scrollTo(this.__scrollLeft,this.__scrollTop,!0)},setPosition:function(b,a){this.__clientLeft=b||0;this.__clientTop=a||0},setSnapSize:function(b,a){this.__snapWidth=b;this.__snapHeight=a},activatePullToRefresh:function(b,a,c,e){this.__refreshHeight=
b;this.__refreshActivate=a;this.__refreshDeactivate=c;this.__refreshStart=e},finishPullToRefresh:function(){this.__refreshActive=!1;this.__refreshDeactivate&&this.__refreshDeactivate();this.scrollTo(this.__scrollLeft,this.__scrollTop,!0)},getValues:function(){return{left:this.__scrollLeft,top:this.__scrollTop,zoom:this.__zoomLevel}},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},zoomTo:function(b,a,c,e){if(!this.options.zooming)throw Error("Zooming is not enabled!");
this.__isDecelerating&&(core.effect.Animate.stop(this.__isDecelerating),this.__isDecelerating=!1);var d=this.__zoomLevel;null==c&&(c=this.__clientWidth/2);null==e&&(e=this.__clientHeight/2);b=Math.max(Math.min(b,this.options.maxZoom),this.options.minZoom);this.__computeScrollMax(b);c=(c+this.__scrollLeft)*b/d-c;e=(e+this.__scrollTop)*b/d-e;c>this.__maxScrollLeft?c=this.__maxScrollLeft:0>c&&(c=0);e>this.__maxScrollTop?e=this.__maxScrollTop:0>e&&(e=0);this.__publish(c,e,b,a)},zoomBy:function(b,a,c,
e){this.zoomTo(this.__zoomLevel*b,a,c,e)},scrollTo:function(b,a,c,e){$(document).trigger(this.options.eventTarget.attr("id")+".scrolledTo",[b,a,e]);this.__isDecelerating&&(core.effect.Animate.stop(this.__isDecelerating),this.__isDecelerating=!1);if(null!=e&&e!==this.__zoomLevel){if(!this.options.zooming)throw Error("Zooming is not enabled!");b*=e;a*=e;this.__computeScrollMax(e)}else e=this.__zoomLevel;this.options.scrollingX?this.options.paging?b=Math.round(b/this.__clientWidth)*this.__clientWidth:
this.options.snapping&&(b=Math.round(b/this.__snapWidth)*this.__snapWidth):b=this.__scrollLeft;this.options.scrollingY?this.options.paging?a=Math.round(a/this.__clientHeight)*this.__clientHeight:this.options.snapping&&(a=Math.round(a/this.__snapHeight)*this.__snapHeight):a=this.__scrollTop;b=Math.max(Math.min(this.__maxScrollLeft,b),0);a=Math.max(Math.min(this.__maxScrollTop,a),0);b===this.__scrollLeft&&a===this.__scrollTop&&(c=!1);this.__publish(b,a,e,c)},scrollBy:function(b,a,c){this.scrollTo((this.__isAnimating?
this.__scheduledLeft:this.__scrollLeft)+(b||0),(this.__isAnimating?this.__scheduledTop:this.__scrollTop)+(a||0),c)},doMouseZoom:function(b,a,c,e){return this.zoomTo(this.__zoomLevel*(0<b?0.97:1.03),!1,c-this.__clientLeft,e-this.__clientTop)},doTouchStart:function(b,a){if(null==b.length)throw Error("Invalid touch list: "+b);a instanceof Date&&(a=a.valueOf());if("number"!==typeof a)throw Error("Invalid timestamp value: "+a);this.__isDecelerating&&(core.effect.Animate.stop(this.__isDecelerating),this.__isDecelerating=
!1);this.__isAnimating&&(core.effect.Animate.stop(this.__isAnimating),this.__isAnimating=!1);var c,e,d=1===b.length;d?(c=b[0].pageX,e=b[0].pageY):(c=Math.abs(b[0].pageX+b[1].pageX)/2,e=Math.abs(b[0].pageY+b[1].pageY)/2);this.__initialTouchLeft=c;this.__initialTouchTop=e;this.__zoomLevelStart=this.__zoomLevel;this.__lastTouchLeft=c;this.__lastTouchTop=e;this.__lastTouchMove=a;this.__lastScale=1;this.__enableScrollX=!d&&this.options.scrollingX;this.__enableScrollY=!d&&this.options.scrollingY;this.__isTracking=
!0;this.__isDragging=!d;this.__isSingleTouch=d;this.__positions=[]},doTouchMove:function(b,a,c){if(null==b.length)throw Error("Invalid touch list: "+b);a instanceof Date&&(a=a.valueOf());if("number"!==typeof a)throw Error("Invalid timestamp value: "+a);if(this.__isTracking){var e;2===b.length?(e=Math.abs(b[0].pageX+b[1].pageX)/2,b=Math.abs(b[0].pageY+b[1].pageY)/2):(e=b[0].pageX,b=b[0].pageY);var d=this.__positions;if(this.__isDragging){var f=e-this.__lastTouchLeft,k=b-this.__lastTouchTop,m=this.__scrollLeft,
r=this.__scrollTop,p=this.__zoomLevel;if(null!=c&&this.options.zooming){var s=p,p=p/this.__lastScale*c,p=Math.max(Math.min(p,this.options.maxZoom),this.options.minZoom);if(s!==p){var g=e-this.__clientLeft,l=b-this.__clientTop,m=(g+m)*p/s-g,r=(l+r)*p/s-l;this.__computeScrollMax(p)}}this.__enableScrollX&&(m-=f,s=this.__maxScrollLeft,m>s||0>m)&&(m=this.options.bouncing?m+f/2:m>s?s:0);this.__enableScrollY&&(r-=k,f=this.__maxScrollTop,r>f||0>r)&&(this.options.bouncing?(r+=k/2,this.__enableScrollX||null==
this.__refreshHeight||(!this.__refreshActive&&r<=-this.__refreshHeight?(this.__refreshActive=!0,this.__refreshActivate&&this.__refreshActivate()):this.__refreshActive&&r>-this.__refreshHeight&&(this.__refreshActive=!1,this.__refreshDeactivate&&this.__refreshDeactivate()))):r=r>f?f:0);60<d.length&&d.splice(0,30);d.push(m,r,a);this.__publish(m,r,p)}else k=this.options.locking?3:0,m=Math.abs(e-this.__initialTouchLeft),r=Math.abs(b-this.__initialTouchTop),this.__enableScrollX=this.options.scrollingX&&
m>=k,this.__enableScrollY=this.options.scrollingY&&r>=k,d.push(this.__scrollLeft,this.__scrollTop,a),this.__isDragging=(this.__enableScrollX||this.__enableScrollY)&&(5<=m||5<=r);this.__lastTouchLeft=e;this.__lastTouchTop=b;this.__lastTouchMove=a;this.__lastScale=c}},doTouchEnd:function(b){b instanceof Date&&(b=b.valueOf());if("number"!==typeof b)throw Error("Invalid timestamp value: "+b);if(this.__isTracking){this.__isTracking=!1;if(this.__isDragging&&(this.__isDragging=!1,this.__isSingleTouch&&this.options.animating&&
100>=b-this.__lastTouchMove)){for(var a=this.__positions,c=a.length-1,e=c,d=c;0<d&&a[d]>this.__lastTouchMove-100;d-=3)e=d;e!==c&&(c=a[c]-a[e],d=this.__scrollTop-a[e-1],this.__decelerationVelocityX=(this.__scrollLeft-a[e-2])/c*(1E3/60),this.__decelerationVelocityY=d/c*(1E3/60),a=this.options.paging||this.options.snapping?4:1,Math.abs(this.__decelerationVelocityX)>a||Math.abs(this.__decelerationVelocityY)>a)&&(this.__refreshActive||this.__startDeceleration(b))}this.__isDecelerating||(this.__refreshActive&&
this.__refreshStart?(this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0),this.__refreshStart&&this.__refreshStart()):(this.scrollTo(this.__scrollLeft,this.__scrollTop,!0,this.__zoomLevel),this.__refreshActive&&(this.__refreshActive=!1,this.__refreshDeactivate&&this.__refreshDeactivate())));this.__positions.length=0}},__publish:function(b,a,f,e){var d=this,h=d.__isAnimating;h&&(core.effect.Animate.stop(h),d.__isAnimating=!1);if(e&&d.options.animating){d.__scheduledLeft=b;d.__scheduledTop=
a;d.__scheduledZoom=f;var m=d.__scrollLeft,A=d.__scrollTop,r=d.__zoomLevel,p=b-m,s=a-A,g=f-r;d.__isAnimating=core.effect.Animate.start(function(a,b,c){c&&(d.__scrollLeft=m+p*a,d.__scrollTop=A+s*a,d.__zoomLevel=r+g*a,d.__callback&&d.__callback(d.__scrollLeft,d.__scrollTop,d.__zoomLevel))},function(a){return d.__isAnimating===a},function(a,b,c){b===d.__isAnimating&&(d.__isAnimating=!1);d.options.zooming&&d.__computeScrollMax()},250,h?c:k)}else d.__scheduledLeft=d.__scrollLeft=b,d.__scheduledTop=d.__scrollTop=
a,d.__scheduledZoom=d.__zoomLevel=f,d.__callback&&d.__callback(b,a,f),d.options.zooming&&d.__computeScrollMax()},__computeScrollMax:function(b){null==b&&(b=this.__zoomLevel);this.__maxScrollLeft=Math.max(this.__contentWidth*b-this.__clientWidth,0);this.__maxScrollTop=Math.max(this.__contentHeight*b-this.__clientHeight,0)},__startDeceleration:function(b){var a=this;if(a.options.paging){b=Math.max(Math.min(a.__scrollLeft,a.__maxScrollLeft),0);var c=Math.max(Math.min(a.__scrollTop,a.__maxScrollTop),
0),e=a.__clientWidth,d=a.__clientHeight;a.__minDecelerationScrollLeft=Math.floor(b/e)*e;a.__minDecelerationScrollTop=Math.floor(c/d)*d;a.__maxDecelerationScrollLeft=Math.ceil(b/e)*e;a.__maxDecelerationScrollTop=Math.ceil(c/d)*d}else a.__minDecelerationScrollLeft=0,a.__minDecelerationScrollTop=0,a.__maxDecelerationScrollLeft=a.__maxScrollLeft,a.__maxDecelerationScrollTop=a.__maxScrollTop;var f=a.options.snapping?4:0.1;a.__isDecelerating=core.effect.Animate.start(function(b,c,d){a.__stepThroughDeceleration(d)},
function(){return Math.abs(a.__decelerationVelocityX)>=f||Math.abs(a.__decelerationVelocityY)>=f},function(b,c,d){a.__isDecelerating=!1;a.scrollTo(a.__scrollLeft,a.__scrollTop,a.options.snapping)})},__stepThroughDeceleration:function(b){var a=this.__scrollLeft+this.__decelerationVelocityX,c=this.__scrollTop+this.__decelerationVelocityY;if(!this.options.bouncing){var e=Math.max(Math.min(this.__maxScrollLeft,a),0);e!==a&&(a=e,this.__decelerationVelocityX=0);e=Math.max(Math.min(this.__maxScrollTop,c),
0);e!==c&&(c=e,this.__decelerationVelocityY=0)}b?this.__publish(a,c,this.__zoomLevel):(this.__scrollLeft=a,this.__scrollTop=c);this.options.paging||(this.__decelerationVelocityX*=0.95,this.__decelerationVelocityY*=0.95);this.options.bouncing&&(e=b=0,a<this.__minDecelerationScrollLeft?b=this.__minDecelerationScrollLeft-a:a>this.__maxDecelerationScrollLeft&&(b=this.__maxDecelerationScrollLeft-a),c<this.__minDecelerationScrollTop?e=this.__minDecelerationScrollTop-c:c>this.__maxDecelerationScrollTop&&
(e=this.__maxDecelerationScrollTop-c),0!==b&&(this.__decelerationVelocityX=0>=b*this.__decelerationVelocityX?this.__decelerationVelocityX+0.03*b:0.08*b),0!==e&&(this.__decelerationVelocityY=0>=e*this.__decelerationVelocityY?this.__decelerationVelocityY+0.03*e:0.08*e))}},m;for(m in f)Scroller.prototype[m]=f[m]})();
