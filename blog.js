let url='https://gitcdn.link/cdn/anliting/syntaxhighlighter/a668f91e4eaadf4c0af503c901e4429ba88417bf/src/highlighter.static.js'
;(async()=>{
    let syntaxHighlighter=await module.moduleByPath(url)
    this.on('pageContentLoad',async div=>{
        await syntaxHighlighter.highlight_all(div)
        await syntaxHighlighter.border_all(div)
    })
})()
