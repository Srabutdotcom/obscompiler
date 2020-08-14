export let ce = (o)=>{
    const {
        tag,
        className,
        id,
        innerHtml,
    } = o;
    let e = document.createElement(tag);
    (className)?e.className=className:null;
    (id)?e.id=id:null;
    (innerHtml)?e.innerHtml=innerHtml:null;
    return e
}