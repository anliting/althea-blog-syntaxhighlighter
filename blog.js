let url='https://cdn.rawgit.com/anliting/syntaxhighlighter/c777e31b75ed76d9a37b34e3d6808c80678f60cd/src/highlighter.linked.js'
;(async()=>{
    let syntaxHighlighter=await module.importByPath(url,{mode:1})
    this.on('pageContentLoad',async div=>{
        await syntaxHighlighter.highlight_all(div)
        await syntaxHighlighter.border_all(div)
    })
})()
