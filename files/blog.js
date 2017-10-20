import{moduleLoader}from'/lib/core.static.js'
export default async blog=>{
    let module=await moduleLoader()
    let
        url='https://gitcdn.link/cdn/anliting/syntaxhighlighter/bc02804785bb8ce340fb697ad5f8a0eb931098c6/src/highlighter.static.js',
        syntax
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
                syntax=await module.moduleByPath(url)
            })()
        return syntax
    }
    blog.addPagePlugin(async div=>{
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
                dom(n,
                    {innerHTML:''},
                    syntax.typeset(n.innerHTML),
                )
            n.parentNode.replaceChild(n.firstChild,n)
        })
    })
}
