(()=>{var t,e,n,a,o,r={978:t=>{t.exports={orange:"#ED6737",orange2:"#76c68f",orange3:"#a6d75b",orange4:"#c9e52f",cyan:"#0094BF",blue:"#0077D4",navy:"#263278",gray:"#4D4D4D",black:"#000000"}},895:t=>{t.exports={title1:"{c} - School enrollment",title2:"{c} - Literacy rate",title3:["{c} - Educational attainment","for population 25+ years"],title4:["{c} - International migrant stock","by age"],title5:["{c} - International migrant stock","by age and gender"],title6:"{c} - International migrant stock over time",title7:["{c} - Ratio of foreign students","enrolled in the educational system"],subtitle1:"% gross by year",subtitle2:"% of people by year",subtitle2a:" (People ages 15 and above)",subtitle2b:" (People ages 15-24)",subtitle3:"Cumulative total % by year",subtitle3a:" (At least completed primary)",subtitle3b:" (At least completed lower secondary)",subtitle3c:" (At least completed upper secondary)",subtitle4n5:"Mid-year total, 2020",subtitle6:"% of total population by year",subtitle7a:"Enrollment total",subtitle7b:"Enrollment distribution",source1:["Source: World Development Indicators v.4, The World Bank.","https://datacatalog.worldbank.org/search/dataset/0037712/World-Development-Indicators.","Download date: December 6, 2021"],source2:["Source: United Nations Department of Economic and Social Affairs, Population Division (2020).","International Migrant Stock 2020 https://www.un.org/development/desa/pd/content/international-migrant-stock.","Download date: December 6, 2021"],country:{cl:"Chile",co:"Colombia",ec:"Ecuador",uy:"Uruguay"}}},252:t=>{t.exports={title1:"{c} - Matriculación Escolar",title2:"{c} - Tasa de alfabetización",title3:["{c} - Logro educativo en población","de 25 años o más"],title4:["{c} - Distribución de población migrante","por grupo etario"],title5:["{c} - Distribución de población migrante","por grupo etario y sexo"],title6:"{c} - Población migrante",title7:["{c} - Estudiantes matriculados","en el sistema educativo"],subtitle1:"Porcentaje bruto por año.",subtitle2:"Porcentaje de personas por año.",subtitle2a:" (15 años o más)",subtitle2b:" (15 a 24 años)",subtitle3:"Porcentaje total acumulado por año.",subtitle3a:" (Al menos primaria completa)",subtitle3b:" (Al menos secundaria baja completa)",subtitle3c:" (Al menos secundaria alta completa)",subtitle4n5:"Total a mediados de 2020.",subtitle6:"Porcentaje de la población total por año.",subtitle7a:"Total de estudiantes matriculados.",subtitle7b:"Distribución de estudiantes matriculados.",source1:["Fuente: World Development Indicators v.4, The World Bank.","https://datacatalog.worldbank.org/search/dataset/0037712/World-Development-Indicators.","Fecha de descarga: 6 Diciembre, 2021"],source2:["Fuente: United Nations Department of Economic and Social Affairs, Population Division (2020).","International Migrant Stock 2020 https://www.un.org/development/desa/pd/content/international-migrant-stock.","Fecha de descarga: 6 Diciembre, 2021"],country:{cl:"Chile",co:"Colombia",ec:"Ecuador",uy:"Uruguay"}}},485:t=>{t.exports=function(t){if("es"===document.documentElement.lang)return t;switch(t){case"Preescolar":return"Preprimary";case"Primaria":return"Primary";case"Secundaria":return"Secondary";case"Terciaria":return"Terciary";case"Mujeres":return"Female";case"Hombres":return"Male";case"Perú":return"Peru";case"Otros Países de América":return"Other American Countries";case"Otros Continentes":return"Other Continents";default:return t}}},76:t=>{t.exports=function(t){var e=function(t){return Math.abs(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")};this.options.scales[t].ticks.callback=e,this.options.plugins.tooltip.callbacks.label=function(n){var a=n.dataset.label||"";return a&&(a+=": "),null!==n.parsed[t]&&(a+=e(n.parsed[t])),a}}},133:t=>{t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.options.scales[t].ticks.callback=function(t){return parseFloat(t*e).toFixed(n)+"%"},this.options.plugins.tooltip.callbacks.label=function(n){var a=n.dataset.label||"";return a&&(a+=": "),null!==n.parsed[t]&&(a+=parseFloat(n.parsed[t]*e).toFixed(1)+"%"),a}}},511:t=>{t.exports=function(t){var e=function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")};this.options.scales[t].ticks.callback=e,this.options.plugins.tooltip.callbacks.label=function(n){var a=n.dataset.label||"";return a&&(a+=": "),null!==n.parsed[t]&&(a+=e(n.parsed[t])),a}}},320:t=>{t.exports=function(t,e,n){this.options.plugins.title.text=t,this.options.plugins.legend.title.text=e,this.options.plugins.subtitle.text=n}},735:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}t.exports=function(t){var n,a=0,o=function(t,n){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,n){if(t){if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){a&&(t=a);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return l=t.done,t},e:function(t){s=!0,i=t},f:function(){try{l||null==a.return||a.return()}finally{if(s)throw i}}}}(this.data.datasets);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.label=t[a].label,r.data=t[a].cells.map(Number),a++}}catch(t){o.e(t)}finally{o.f()}this.update()}},496:(t,e,n)=>{var a=n(133);t.exports=function(t){var e=a.bind(this);t?(this.options.plugins.legend.onClick=void 0,this.options.scales.y.max=void 0):(this.options.plugins.legend.onClick=function(t,n,a){var o=n.datasetIndex,r=a.chart;r.isDatasetVisible(o)?(r.hide(o),0===o&&(r.options.scales.y.max=void 0,e("y",100,1)),n.hidden=!0):(r.show(o),0===o&&(r.options.scales.y.max=1,e("y",100)),n.hidden=!1),r.update()},this.isDatasetVisible(0)?(this.options.scales.y.max=1,e("y",100)):(this.options.scales.y.max=void 0,e("y",100,1)))}},121:t=>{t.exports=function(t,e){var n=Math.min(e.offsetWidth/600,1);Chart.defaults.font.size=12*n,t.options.plugins.title.font.size=21*n,t.options.plugins.legend.title.font.size=14*n,t.options.plugins.subtitle.font.size=12*n}},503:t=>{t.exports=function(t){t.options.plugins.legend.labels={boxWidth:0,boxHeight:0,font:{size:0}}}},783:t=>{t.exports=function(t,e){if(navigator.msSaveBlob)e.toBlob((function(e){return navigator.msSaveBlob(e,t)}));else{var n=document.createElement("a");n.download=t,n.href=e.toDataURL(),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},223:t=>{t.exports=function(t){if(navigator.msSaveBlob)fetch(t).then((function(t){return t.blob()})).then((function(t){return navigator.msSaveBlob(t,"datos.xlsx")}));else{var e=document.createElement("a");e.href=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}}},73:(t,e,n)=>{var a=n(782),o=n(399),r=n(641),i=n(735),l=n(133),s=n(76),c=n(511),u=n(320),d=n(503),p=n(783),f=n(223),b=n(496),m=n(121);t.exports=function(t,e){var n=t.name,g=void 0===n?"none":n,y=t.colors,h=t.type,v=t.options,w=t.ticks,j=t.labels,x=void 0===j||j,k=e.getData,D=e.getFilename,O=e.setFills,S=e.onFetch,A=document.getElementById(g+"-chart"),C=document.getElementById(g+"-select"),P=document.getElementById(g+"-img-button"),_=document.getElementById(g+"-file-button");if(!A)return console.log("Gráfico ".concat(g," no existe.")),!1;var E=A.getAttribute("data-url"),F=A.getAttribute("data-pais"),I=o(new Array(w).fill(""),y),R=r(h,I,v);O&&O(I),x||d(R);var B=new Chart(A,R);a.fetch(E,(function(t){var e,n=k(t,F);I.labels=n.etiquetas,S(n,F,C,{update:i.bind(B),absolute:s.bind(B),percentage:l.bind(B),normal:c.bind(B),title:u.bind(B),zero:b.bind(B)}),P.onclick=function(){var t=D(F,C);p(t+".png",A)},_.onclick=function(){f(E)};var a=function(){m(B.config,A),B.update()};window.addEventListener("resize",(function(){clearTimeout(e),e=setTimeout(a,100)})),a()}))}},641:(t,e,n)=>{function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(978),l=n(980);t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Chart.defaults.font.family="'Open Sans', sans-serif",Chart.defaults.font.weight=300,Chart.defaults.font.color=i.gray,{type:t,data:e,options:o({maintainAspectRatio:!0,aspectRatio:1.2,elements:{point:{radius:0,hitRadius:5}},layout:{padding:15},plugins:{title:{display:!0,text:"",position:"top",align:"start",color:i.cyan,padding:12,font:{family:"'Josefin Sans', sans-serif"}},subtitle:{display:!0,text:"",position:"bottom",align:"start",padding:12,font:{weight:400}},legend:{labels:{font:{weight:400}},title:{display:!0,text:"",font:{weight:400}}},tooltip:{backgroundColor:i.gray}}},n),plugins:[l]}}},399:(t,e,n)=>{var a=n(148);t.exports=function(t,e){return{labels:t,datasets:e.map(a)}}},148:t=>{t.exports=function(t){return{label:"",fill:!0,borderWidth:1,borderColor:t,backgroundColor:t+"AA",data:[]}}},980:t=>{t.exports={id:"custom_canvas_background_color",beforeDraw:function(t){var e=t.canvas.getContext("2d");e.save(),e.fillStyle="white",e.globalCompositeOperation="destination-over",e.fillRect(0,0,t.width,t.height),e.restore()}}},782:(t,e,n)=>{function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var o=n(485),r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=XLSX.read(new Uint8Array(e),{type:"array"}).Sheets["Hoja 1"];this.data=XLSX.utils.sheet_to_json(n),console.log(this.data,Object.keys(this.data[0]))}var e,n,r;return e=t,n=[{key:"createValues",value:function(t,e){return{label:o(t),cells:e,shift:function(){return this.cells.shift(),this},invert:function(){return this.cells=this.cells.map((function(t){return-t})),this},nullify:function(){return this.cells=this.cells.map((function(t){return void 0===t?-1e4:t})),this}}}},{key:"readRow",value:function(t,e,n){var a=this.data.find((function(n){return n.cod_pais===t&&n.parametro===e}));if(a){var o=n.map((function(t){return a[t]}));return this.createValues(e,o)}throw new Error("The country code/parameter is invalid - El código país/parametro es invalido.")}}],r=[{key:"fetch",value:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(e,n){fetch(e).then((function(t){return t.arrayBuffer()})).then((function(e){var a=new t(e);n(a)}))}))}],n&&a(e.prototype,n),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=r},49:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}t.exports=function(t,n,a){a({name:"graf1",colors:[t.navy,t.blue,t.cyan,t.orange],type:"line",options:{scales:{y:{min:0}}},ticks:11},{getData:function(t,e){var n=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];return{etiquetas:n,hoja1:{preescolar:t.readRow(e,"ed_preescolar",n),primaria:t.readRow(e,"ed_primaria",n),secundaria:t.readRow(e,"ed_secundaria",n),terciaria:t.readRow(e,"ed_terciaria",n)}}},getFilename:function(t){return n.title1.replace("{c}",n.country[t])},setFills:function(t){var n,a=function(t,n){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,n){if(t){if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){a&&(t=a);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return l=t.done,t},e:function(t){s=!0,i=t},f:function(){try{l||null==a.return||a.return()}finally{if(s)throw i}}}}(t.datasets);try{for(a.s();!(n=a.n()).done;){var o=n.value,r=o.backgroundColor.slice(0,7);o.backgroundColor=r+"50"}}catch(t){a.e(t)}finally{a.f()}},onFetch:function(t,e,a,o){o.title(n.title1.replace("{c}",n.country[e]),n.subtitle1,n.source1),o.percentage("y"),o.update(Object.values(t.hoja1))}})}},794:t=>{t.exports=function(t,e,n){n({name:"graf2",colors:[t.orange],type:"line",options:{scales:{y:{min:0,max:100}}},ticks:11},{getData:function(t,e){var n=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];return{etiquetas:n,hoja1:{edades15oMas:t.readRow(e,"15_anos_o_mas",n).nullify()},hoja2:{edades15a24:t.readRow(e,"15_a_24_anos",n).nullify()}}},getFilename:function(t,n){var a=e.title2.replace("{c}",e.country[t]);return 1==n.value?a+e.subtitle2a:a+e.subtitle2b},onFetch:function(t,n,a,o){a.onchange=function(){var r,i;1==a.value?(r=t.hoja1,i=e.subtitle2a):(r=t.hoja2,i=e.subtitle2b),o.title(e.title2.replace("{c}",e.country[n]),e.subtitle2+i,e.source1),o.update(Object.values(r))},o.percentage("y"),a.onchange()}})}},199:t=>{t.exports=function(t,e,n){n({name:"graf3",colors:[t.orange],type:"line",options:{scales:{y:{min:0,max:100}}},ticks:11},{getData:function(t,e){var n=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];return{etiquetas:n,hoja1:{logroPrimaria:t.readRow(e,"primaria",n).nullify()},hoja2:{logroSecundaria:t.readRow(e,"sec_baja",n).nullify()},hoja3:{logroSecundariaAlta:t.readRow(e,"sec_alta",n).nullify()}}},getFilename:function(t,n){return 1==n.value?e.title3.join(" ").replace("{c}",e.country[t])+e.subtitle3a:2==n.value?e.title3.join(" ").replace("{c}",e.country[t])+e.subtitle3b:e.title3.join(" ").replace("{c}",e.country[t])+e.subtitle3c},onFetch:function(t,n,a,o){a.onchange=function(){var r,i;1==a.value?(r=t.hoja1,i=e.subtitle3a):2==a.value?(r=t.hoja2,i=e.subtitle3b):(r=t.hoja3,i=e.subtitle3c),o.title(e.title3.map((function(t){return t.replace("{c}",e.country[n])})),e.subtitle3+i,e.source1),o.update(Object.values(r))},o.percentage("y"),a.onchange()}})}},146:t=>{t.exports=function(t,e,n){n({name:"graf4",colors:[t.orange],type:"bar",options:{scales:{y:{beginAtZero:!0}}},ticks:18,labels:!1},{getData:function(t,e){var n=["0a4","5a9","10a14","15a19","20a24","25a29","30a34","35a39","40a44","45a49","50a54","55a59","60a64","65a69","70a74","75_mas"];return{etiquetas:n,hoja1:{poblacionTotalMigrante:t.readRow(e,"pobl_migrante_cant",n)}}},getFilename:function(t){return e.title4.join(" ").replace("{c}",e.country[t])},onFetch:function(t,n,a,o){o.title(e.title4.map((function(t){return t.replace("{c}",e.country[n])})),e.subtitle4n5,e.source2),o.update(Object.values(t.hoja1))}})}},815:t=>{t.exports=function(t,e,n){n({name:"graf5",colors:[t.orange,t.cyan],type:"bar",options:{indexAxis:"y",scales:{x:{stacked:!0},y:{stacked:!0,reverse:!0}}},ticks:17},{getData:function(t,e){var n=["0a4","5a9","10a14","15a19","20a24","25a29","30a34","35a39","40a44","45a49","50a54","55a59","60a64","65a69","70a74","75_mas"];return{etiquetas:n,hoja1:{mujeres:t.readRow(e,"pobl_migrante_muj",n).invert(),hombres:t.readRow(e,"pobl_migrante_hom",n)}}},getFilename:function(t){return e.title5.join(" ").replace("{c}",e.country[t])},onFetch:function(t,n,a,o){o.title(e.title5.map((function(t){return t.replace("{c}",e.country[n])})),e.subtitle4n5,e.source2),o.absolute("x"),o.update(Object.values(t.hoja1))}})}},563:t=>{t.exports=function(t,e,n){n({name:"graf6",colors:[t.orange],type:"line",options:{scales:{y:{min:0,max:10}}},ticks:7,labels:!1},{getData:function(t,e){var n=["1990","1995","2000","2005","2010","2015","2020"];return{etiquetas:n,hoja1:{porcentaje:t.readRow(e,"pobl_migrante_porcentaje",n)}}},getFilename:function(t){return e.title6.replace("{c}",e.country[t])},onFetch:function(t,n,a,o){o.title(e.title6.replace("{c}",e.country[n]),e.subtitle6,e.source2),o.percentage("y"),o.update(Object.values(t.hoja1))}})}}},i={};function l(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={exports:{}};return r[t](n,n.exports,l),n.exports}t=l(978),e=l(895),n=l(252),a=l(73),o=document.documentElement.lang.startsWith("es")?n:e,l(49)(t,o,a),l(794)(t,o,a),l(199)(t,o,a),l(146)(t,o,a),l(815)(t,o,a),l(563)(t,o,a)})();