const codeSnippets = {
    'a': `"homepage": "https://<username>.github.io/<repository_name>"
"scripts": {
    "predeploy": "npm run build"
    "deploy": "gh-pages -d build"
    ...
}`,
    'b': `npm install gh-pages --save-dev`,
    'c': `npm run deploy`,
}
export default codeSnippets;