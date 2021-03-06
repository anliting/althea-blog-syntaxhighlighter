import{doe}from'/lib/core.static.js'
let syntax
function getMission(n){
    return[n.classList.contains('bordered'),{
        cpp:    n.classList.contains('highlighted_cpp'),
        html:   n.classList.contains('highlighted_html'),
        js:     n.classList.contains('highlighted_js'),
        tex:    n.classList.contains('highlighted_tex'),
    }]
}
function loadSyntax(){
    if(!syntax)
        syntax=(async()=>{
            let wcv=(await import('./wcv.mjs')).default
            doe.head(doe.style(wcv.style))
            syntax=wcv
        })()
    return syntax
}
async function plugin(div){
    let missions=[
        ...div.getElementsByTagName('span'),
        ...div.getElementsByTagName('div'),
    ].map(n=>{
        let[
            bordered,
            highlight,
        ]=getMission(n)
        if(!(
            bordered||
            Object.values(highlight).some(v=>v)
        ))
            return
        return[n,bordered,highlight]
    }).filter(v=>v)
    if(!missions.length)
        return
    await loadSyntax()
    missions.map(([n,bordered,highlight])=>{
        Object.entries(highlight).filter(([k,v])=>v).forEach(([k])=>{
            n.innerHTML=syntax.highlight[k](n.textContent)
        })
        if(bordered)
            doe(n,
                {innerHTML:''},
                syntax.typeset(n.innerHTML),
            )
        n.parentNode.replaceChild(n.firstChild,n)
    })
}
export default plugin
