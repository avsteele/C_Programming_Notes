const fs = require("fs");

var path = 'C:\\Users\\avsteele\\AppData\\Roaming\\npm\\node_modules\\';
const tm = require(path+'markdown-it-texmath');
const md = require(path+'markdown-it')({html:true})
                  .use(tm, { engine: require(path+'katex'),
                             delimiters: 'dollars',
                             katexOptions: { macros: {"\\RR": "\\mathbb{R}"} } });
//const str = "Euler\'s identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\RR^2$.";


const pre = `
<!DOCTYPE html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.min.css">

<link rel="stylesheet" href="base.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.5.1/build/styles/stackoverflow-dark.min.css">
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.5.1/build/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    </head>
<body>
`
const post = `</body>
`
const regex = /\.md">/g;
const replace = '.html">'

// get all files
var files = fs.readdirSync('.');
files = files.filter(file => file.endsWith(".md"));
// process each file
files.forEach(file => {
    //if(!file.endsWith(".md")) return;
    const str = fs.readFileSync(file).toString();
    const preresult = md.render(str);
    // process and remove all `.md` inside <a> tags to .html
    const result = preresult.replace(regex, replace);
    const newname = file.replace(".md", ".html");
    fs.writeFileSync(newname, pre+result+post);
});

//console.log(result);