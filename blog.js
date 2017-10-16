let url='https://gitcdn.link/cdn/anliting/syntaxhighlighter/d3bd2dcc393101cd4ebdfe01ea74e7500157510d/src/highlighter.static.js'
;(async()=>{
    let syntax=await module.moduleByPath(url)
    this.addPagePlugin(div=>{
        ;[
            ...div.getElementsByTagName('span'),
            ...div.getElementsByTagName('div'),
        ].map(n=>{
            let
                bordered=n.classList.contains('bordered'),
                highlight={
                    cpp:    n.classList.contains('highlighted_cpp'),
                    html:   n.classList.contains('highlighted_html'),
                    js:     n.classList.contains('highlighted_js'),
                    tex:    n.classList.contains('highlighted_tex'),
                }
            if(!(
                bordered||
                Object.values(highlight).some(v=>v)
            ))
                return
            let s=n.textContent
            Object.entries(highlight).filter(([k,v])=>v).forEach(([k])=>{
                s=syntax.highlight[k](s)
            })
            if(bordered){
                dom(n,
                    {innerHTML:''},
                    syntax.typeset(s),
                )
                n.style.visibility=''
            }else{
                n.innerHTML=s
            }
        })
    })
})()
