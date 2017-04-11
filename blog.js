let url='https://gitcdn.link/cdn/anliting/syntaxhighlighter/1fe803ce47eb7fc185626bc2e1f4e7a31fee3c32/src/highlighter.static.js'
;(async()=>{
    let syntaxHighlighter=await module.importByPath(url,{mode:1})
    this.on('pageContentLoad',async div=>{
        await syntaxHighlighter.highlight_all(div)
        await syntaxHighlighter.border_all(div)
    })
})()
