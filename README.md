# UMC React 스터디 미션3
- https://s00ngle.github.io/UMC-React-Study-Chapter3/


## github pages 배포 방법
#### terminal
```shell
> npm install gh-pages --save-dev
```

#### packages.json
```javascript
"homepage": "https://s00ngle.github.io/UMC-React-Study-Chapter3/"
```
```javascript
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

#### terminal
```shell
> npm run deploy
```

#### github pages
`branch : gh-pages`
