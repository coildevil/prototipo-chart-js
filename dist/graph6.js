(()=>{var t,e={978:t=>{t.exports={orange:"#ED6737",orange2:"#76c68f",orange3:"#a6d75b",orange4:"#c9e52f",cyan:"#0094BF",blue:"#0077D4",navy:"#263278",gray:"#4D4D4D",black:"#000000"}},76:t=>{t.exports=function(t){this.options.scales[t].ticks.callback=function(t){return Math.abs(t)},this.options.plugins.tooltip.callbacks.label=function(e){var n=e.dataset.label||"";return n&&(n+=": "),null!==e.parsed[t]&&(n+=Math.abs(e.parsed[t])),n}}},133:t=>{t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.options.scales[t].ticks.callback=function(t){return t*e+"%"},this.options.plugins.tooltip.callbacks.label=function(n){var o=n.dataset.label||"";return o&&(o+=": "),null!==n.parsed[t]&&(o+=parseFloat(n.parsed[t]*e).toFixed(1)+"%"),o}}},983:t=>{t.exports=function(t){this.options.scales.y.max=t?void 0:1}},511:t=>{t.exports=function(t){this.options.scales[t].ticks.callback=void 0,this.options.plugins.tooltip.callbacks.label=void 0}},320:t=>{t.exports=function(t,e,n){this.options.plugins.title.text=t,this.options.plugins.legend.title.text=e,this.options.plugins.subtitle.text=n}},735:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}t.exports=function(t){var n,o=0,r=function(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return l=t.done,t},e:function(t){s=!0,i=t},f:function(){try{l||null==o.return||o.return()}finally{if(s)throw i}}}}(this.data.datasets);try{for(r.s();!(n=r.n()).done;){var a=n.value;a.label=t[o].label,a.data=t[o].cells.map(Number),o++}}catch(t){r.e(t)}finally{r.f()}this.update()}},503:t=>{t.exports=function(t){t.options.plugins.legend.labels={boxWidth:0,boxHeight:0,font:{size:0}}}},783:t=>{t.exports=function(t,e){if(navigator.msSaveBlob)e.toBlob((function(e){return navigator.msSaveBlob(e,t)}));else{var n=document.createElement("a");n.download=t,n.href=e.toDataURL(),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},223:t=>{t.exports=function(t){if(navigator.msSaveBlob)fetch(t).then((function(t){return t.blob()})).then((function(t){return navigator.msSaveBlob(t,"datos.xlsx")}));else{var e=document.createElement("a");e.href=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}}},73:(t,e,n)=>{var o=n(782),r=n(399),a=n(641),i=n(735),l=n(133),s=n(76),c=n(511),u=n(320),f=n(503),p=n(783),d=n(223),b=n(983);t.exports=function(t,e){var n=t.name,h=void 0===n?"none":n,g=t.colors,v=t.type,y=t.options,m=t.ticks,x=t.labels,w=void 0===x||x,k=e.getRows,j=e.getFilename,O=e.setFills,C=e.onFetch,S=document.getElementsByName(h+"-sheet-url")[0].content,D=document.getElementById(h+"-chart"),E=document.getElementById(h+"-select"),P=document.getElementById(h+"-img-button"),B=document.getElementById(h+"-file-button"),A=r(new Array(m).fill(""),g),R=a(v,A,y);O&&O(A),w||f(R);var F=new Chart(D,R);o.fetch(S,(function(t){var e=k(t);A.labels=e.etiquetas,C(e,E,{update:i.bind(F),absolute:s.bind(F),percentage:l.bind(F),normal:c.bind(F),title:u.bind(F),zero:b.bind(F)}),P.onclick=function(){var t=j(E);p(t,D)},B.onclick=function(){d(S)}}))}},641:(t,e,n)=>{function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(978),l=n(980);t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Chart.defaults.font.family="'Open Sans', sans-serif",Chart.defaults.font.size=11,Chart.defaults.font.weight=300,Chart.defaults.font.color=i.gray,{type:t,data:e,options:r({maintainAspectRatio:!0,aspectRatio:1.2,elements:{point:{radius:0,hitRadius:5}},layout:{padding:15},plugins:{title:{display:!0,text:"Cargando...",color:i.cyan,position:"top",align:"start",padding:10,font:{size:15,family:"'Josefin Sans', sans-serif"}},subtitle:{display:!0,padding:10,text:"Cargando...",position:"bottom",align:"start",font:{size:10,color:i.black}},legend:{labels:{font:{weight:400}},title:{display:!0,text:"Cargando...",align:"start",font:{size:13,color:i.black}}},tooltip:{backgroundColor:i.gray}}},n),plugins:[l]}}},399:(t,e,n)=>{var o=n(148);t.exports=function(t,e){return{labels:t,datasets:e.map(o)}}},148:t=>{t.exports=function(t){return{label:"Cargando…",fill:!0,borderWidth:1,borderColor:t,backgroundColor:t+"10",data:[]}}},980:t=>{t.exports={id:"custom_canvas_background_color",beforeDraw:function(t){var e=t.canvas.getContext("2d");e.save(),e.fillStyle="white",e.globalCompositeOperation="destination-over",e.fillRect(0,0,t.width,t.height),e.restore()}}},782:t=>{function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sheets=XLSX.read(new Uint8Array(e),{type:"array"}).Sheets}var n,o,r;return n=t,o=[{key:"readValue",value:function(t,e){try{return this.sheets[e][t].v}catch(t){return}}},{key:"createValues",value:function(t,e){return{label:t,cells:e,shift:function(){return this.cells.shift(),this},invert:function(){return this.cells=this.cells.map((function(t){return-t})),this},nullify:function(){return this.cells=this.cells.map((function(t){return void 0===t?-1e4:t})),this}}}},{key:"readRow",value:function(t,e,n){for(var o,r=[],a=0;a<t;a++){var i=String.fromCharCode(a+65)+e,l=this.readValue(i,n);0===a?o=l:r.push(l)}return this.createValues(o,r)}},{key:"readColumn",value:function(t,e,n,o){for(var r,a=[],i=t;i<e;i++){var l=n+i,s=this.readValue(l,o);i===t?r=s:a.push(s)}return this.createValues(r,a)}}],r=[{key:"fetch",value:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(e,n){fetch(e).then((function(t){return t.arrayBuffer()})).then((function(e){var o=new t(e);n(o)}))}))}],o&&e(n.prototype,o),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();t.exports=n}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}t=o(978),o(73)({name:"graf6",colors:[t.orange],type:"line",options:{scales:{y:{min:0,max:10}}},ticks:7,labels:!1},{getRows:function(t){return{etiquetas:t.readRow(8,"3","Hoja1").cells,hoja1:{porcentaje:t.readRow(12,"4","Hoja1")}}},getFilename:function(){return"poblacion_migrante_como_porcentaje_del_total.png"},onFetch:function(t,e,n){n.title("Ecuador - Población migrante","Porcentaje de la población total por año.",["United Nations Department of Economic and Social Affairs, Population Division (2020).","International Migrant Stock 2020 https://www.un.org/development/desa/pd/content/international-migrant-stock.","Fecha de descarga: 6 Diciembre, 2021"]),n.percentage("y"),n.update(Object.values(t.hoja1))}})})();