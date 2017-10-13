let url='https://gitcdn.link/cdn/anliting/syntaxhighlighter/3f71e10d8adf1796dbda493f31b390f1c9a9c762/src/highlighter.static.js'
;(async()=>{
    let syntaxHighlighter=await module.moduleByPath(url)
    this.on('pageContentLoad',div=>{
        syntaxHighlighter.highlight_all(div)
        syntaxHighlighter.border_all(div)
    })
})()
