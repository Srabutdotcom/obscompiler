import {Inspector} from '../vendor/observablehq/inspector/index.js';
import {Runtime} from '../vendor/observablehq/runtime/index.js';
import {Compiler} from '../vendor/observablehq/obs_compiler/index.js';
import CodeMirror from '../vendor/codemirror/src/codemirror.js';
import '../vendor/codemirror/mode/javascript/javascript.js';
import {ce} from '../library/utils.js';

var compile = new Compiler()
let rt=null;
let main=null;
let op=null;
let obs=null;

//let cmdiv = document.querySelector('#editor');
var myCodeMirror = CodeMirror(editor, {
    lineNumbers: true,
    mode: "javascript",
    matchBrackets: true,
});

let cm = document.querySelector('.CodeMirror');
cm.className =cm.className.concat(" grid-m");
myCodeMirror.refresh();

rt = new Runtime();
//op = document.querySelector(`#render > div`);
//obs = new Inspector(render);
obs = Inspector.into(render);
compile.module(myCodeMirror.doc.getValue()).then(
    define=>{main = rt.module(define, obs);}
);

function update_old() {
    try {
      obs.fulfilled((new Function(`return ${input.value}`))());
    } catch(e) { }
  }

function update(name) {
    try {
        debugger;
      obs.fulfilled(name);
    } catch(e) { }
}


document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'play'){
        //do something
        //debugger
        //{define, redefine} = await compile.cell((myCodeMirror.doc.getValue());
        compile.cell(myCodeMirror.doc.getValue())
        //.then((define,redefine)=>render(define,`body > div.cell-container.relative > div > div.output.grid-m`));
        .then((dr)=>{
            debugger;
            
            try {
                dr.redefine(main,obs);
              } catch(e) {
                dr.define(main,obs);
                debugger;
               }
            debugger;
        });
        
    }
});
