(()=>{var t,e={978:t=>{t.exports={orange:"#ED6737",orange2:"#76c68f",orange3:"#a6d75b",orange4:"#c9e52f",cyan:"#0094BF",blue:"#0077D4",navy:"#263278",gray:"#4D4D4D",black:"#000000"}},76:t=>{t.exports=function(t){var e=function(t){return Math.abs(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")};this.options.scales[t].ticks.callback=e,this.options.plugins.tooltip.callbacks.label=function(n){var r=n.dataset.label||"";return r&&(r+=": "),null!==n.parsed[t]&&(r+=e(n.parsed[t])),r}}},133:t=>{t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.options.scales[t].ticks.callback=function(t){return t*e+"%"},this.options.plugins.tooltip.callbacks.label=function(n){var r=n.dataset.label||"";return r&&(r+=": "),null!==n.parsed[t]&&(r+=parseFloat(n.parsed[t]*e).toFixed(1)+"%"),r}}},983:t=>{t.exports=function(t){this.options.scales.y.max=t?void 0:1}},511:t=>{t.exports=function(t){var e=function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")};this.options.scales[t].ticks.callback=e,this.options.plugins.tooltip.callbacks.label=function(n){var r=n.dataset.label||"";return r&&(r+=": "),null!==n.parsed[t]&&(r+=e(n.parsed[t])),r}}},320:t=>{t.exports=function(t,e,n){this.options.plugins.title.text=t,this.options.plugins.legend.title.text=e,this.options.plugins.subtitle.text=n}},735:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n,r=0,o=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){s=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw i}}}}(this.data.datasets);try{for(o.s();!(n=o.n()).done;){var a=n.value;a.label=t[r].label,a.data=t[r].cells.map(Number),r++}}catch(t){o.e(t)}finally{o.f()}this.update()}},503:t=>{t.exports=function(t){t.options.plugins.legend.labels={boxWidth:0,boxHeight:0,font:{size:0}}}},783:t=>{t.exports=function(t,e){if(navigator.msSaveBlob)e.toBlob((function(e){return navigator.msSaveBlob(e,t)}));else{var n=document.createElement("a");n.download=t,n.href=e.toDataURL(),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},223:t=>{t.exports=function(t){if(navigator.msSaveBlob)fetch(t).then((function(t){return t.blob()})).then((function(t){return navigator.msSaveBlob(t,"datos.xlsx")}));else{var e=document.createElement("a");e.href=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}}},73:(t,e,n)=>{var r=n(782),o=n(399),a=n(641),i=n(735),l=n(133),s=n(76),c=n(511),u=n(320),f=n(503),d=n(783),p=n(223),b=n(983);t.exports=function(t,e){var n=t.name,h=void 0===n?"none":n,g=t.colors,v=t.type,y=t.options,m=t.ticks,x=t.labels,w=void 0===x||x,k=e.getRows,j=e.getFilename,O=e.setFills,C=e.onFetch,S=document.getElementsByName(h+"-sheet-url")[0].content,B=document.getElementById(h+"-chart"),D=document.getElementById(h+"-select"),E=document.getElementById(h+"-img-button"),P=document.getElementById(h+"-file-button"),R=o(new Array(m).fill(""),g),_=a(v,R,y);O&&O(R),w||f(_);var F=new Chart(B,_);r.fetch(S,(function(t){var e=k(t);R.labels=e.etiquetas,C(e,D,{update:i.bind(F),absolute:s.bind(F),percentage:l.bind(F),normal:c.bind(F),title:u.bind(F),zero:b.bind(F)}),E.onclick=function(){var t=j(D);d(t,B)},P.onclick=function(){p(S)}}))}},641:(t,e,n)=>{function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(978),l=n(980);t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Chart.defaults.font.family="'Open Sans', sans-serif",Chart.defaults.font.size=11,Chart.defaults.font.weight=300,Chart.defaults.font.color=i.gray,{type:t,data:e,options:o({maintainAspectRatio:!0,aspectRatio:1.2,elements:{point:{radius:0,hitRadius:5}},layout:{padding:15},plugins:{title:{display:!0,text:"Cargando...",color:i.cyan,position:"top",align:"start",padding:10,font:{size:15,family:"'Josefin Sans', sans-serif"}},subtitle:{display:!0,padding:10,text:"Cargando...",position:"bottom",align:"start",font:{size:10,color:i.black}},legend:{labels:{font:{weight:400}},title:{display:!0,text:"Cargando...",align:"start",font:{size:13,color:i.black}}},tooltip:{backgroundColor:i.gray}}},n),plugins:[l]}}},399:(t,e,n)=>{var r=n(148);t.exports=function(t,e){return{labels:t,datasets:e.map(r)}}},148:t=>{t.exports=function(t){return{label:"Cargando…",fill:!0,borderWidth:1,borderColor:t,backgroundColor:t+"10",data:[]}}},980:t=>{t.exports={id:"custom_canvas_background_color",beforeDraw:function(t){var e=t.canvas.getContext("2d");e.save(),e.fillStyle="white",e.globalCompositeOperation="destination-over",e.fillRect(0,0,t.width,t.height),e.restore()}}},782:t=>{function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sheets=XLSX.read(new Uint8Array(e),{type:"array"}).Sheets}var n,r,o;return n=t,r=[{key:"readValue",value:function(t,e){try{return this.sheets[e][t].v}catch(t){return}}},{key:"createValues",value:function(t,e){return{label:t,cells:e,shift:function(){return this.cells.shift(),this},invert:function(){return this.cells=this.cells.map((function(t){return-t})),this},nullify:function(){return this.cells=this.cells.map((function(t){return void 0===t?-1e4:t})),this}}}},{key:"readRow",value:function(t,e,n){for(var r,o=[],a=0;a<t;a++){var i=String.fromCharCode(a+65)+e,l=this.readValue(i,n);0===a?r=l:o.push(l)}return this.createValues(r,o)}},{key:"readColumn",value:function(t,e,n,r){for(var o,a=[],i=t;i<e;i++){var l=n+i,s=this.readValue(l,r);i===t?o=s:a.push(s)}return this.createValues(o,a)}}],o=[{key:"fetch",value:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(e,n){fetch(e).then((function(t){return t.arrayBuffer()})).then((function(e){var r=new t(e);n(r)}))}))}],r&&e(n.prototype,r),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();t.exports=n}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,r),a.exports}t=r(978),r(73)({name:"graf2",colors:[t.orange],type:"line",options:{scales:{y:{min:0,max:100}}},ticks:11},{getRows:function(t){return{etiquetas:t.readRow(12,"3","Hoja1").cells,hoja1:{edades15oMas:t.readRow(12,"4","Hoja1").nullify()},hoja2:{edades15a24:t.readRow(12,"4","Hoja2").nullify()}}},getFilename:function(t){return 1==t.value?"alfabetizacion_15_años_o_mas.png":"alfabetizacion_15_a_24_años.png"},onFetch:function(t,e,n){e.onchange=function(){var r,o;1==e.value?(r=t.hoja1,o=" (15 años o más)"):(r=t.hoja2,o=" (15 a 24 años)"),n.title("Ecuador - Tasa de alfabetización","Porcentaje de personas por año."+o,["Fuente: World Development Indicators v.4, The World Bank.","https://datacatalog.worldbank.org/search/dataset/0037712/World-Development-Indicators.","Fecha de descarga: 6 Diciembre, 2021"]),n.update(Object.values(r))},n.percentage("y"),e.onchange()}})})();