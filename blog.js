let url='https://gitcdn.link/cdn/anliting/syntaxhighlighter/3aadceeb4cb1ea3c7a4d24113e019ec06280e409/src/highlighter.static.mjs'
;(async()=>{
    let syntaxHighlighter=await module.moduleByPath(url)
    this.on('pageContentLoad',async div=>{
        await syntaxHighlighter.highlight_all(div)
        await syntaxHighlighter.border_all(div)
    })
})()
