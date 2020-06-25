const codeSnippets = {
    'a': `"homepage": "https://<username>.github.io/<repository_name>"
"scripts": {
    "predeploy": "npm run build"
    "deploy": "gh-pages -d build"
    ...
}`,
    'b': `npm install gh-pages --save-dev`,
    'c': `npm run deploy`,
    'd': `// clone a repo 
git clone https://github<username>.github.io/<respoitory_name>

// push all changes to the repo
git add .
git commit -m "<message>"
git push origin <branch>

// initialize an existing directory
git init

// show the status of the git repository
git status

// fetch current branch to local project directory
git pull`
}
export default codeSnippets;