let url='https://cdn.rawgit.com/anliting/syntaxhighlighter/75a6a98a4775d7f6f52c9d685ed0ddff6e757575/src/highlighter.js'
;(async()=>{
    let syntaxHighlighter=await module.importByPath(url,{mode:1})
    this.on('pageContentLoad',async div=>{
        await syntaxHighlighter.highlight_all(div)
        await syntaxHighlighter.border_all(div)
    })
})()
