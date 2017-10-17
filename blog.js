let url='https://gitcdn.link/cdn/anliting/syntaxhighlighter/9bcbce3132e8c95449857d57506eba7576066e8d/src/highlighter.static.js'
let syntax
function getMission(n){
    let
        bordered=   n.classList.contains('bordered'),
        highlight={
            cpp:    n.classList.contains('highlighted_cpp'),
            html:   n.classList.contains('highlighted_html'),
            js:     n.classList.contains('highlighted_js'),
            tex:    n.classList.contains('highlighted_tex'),
        }
    return[bordered,highlight]
}
async function loadSyntax(){
    if(!syntax)
        syntax=module.moduleByPath(url)
    return syntax
}
this.addPagePlugin(async div=>{
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
    let syntax=await loadSyntax()
    missions.map(([n,bordered,highlight])=>{
        Object.entries(highlight).filter(([k,v])=>v).forEach(([k])=>{
            n.innerHTML=syntax.highlight[k](n.textContent)
        })
        if(bordered)
            dom(n,
                {innerHTML:''},
                syntax.typeset(n.innerHTML),
            )
        n.parentNode.replaceChild(n.firstChild,n)
    })
})
