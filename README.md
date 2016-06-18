# Training Management Tool
##### Dev Workshop Project
### Demo: http://piotrwitek.github.io/training-management-tool/

### Stack:
- TypeScript - v1.8.10
- React - v15.1.0
- MobX - v2.3.1 / mobx-react
- JSPM (0.17.X) / SystemJS / systemjs-hot-reloader

---

### Installation
  
##### 1. Clone repo
    git clone https://github.com/piotrwitek/react-dnd-dropzone.git

##### 2. Install all dependencies
    npm install

##### 3. Run development server and start developing
    npm start

### NPM commands
- `npm start` - run local development server with hot-reloader at localhost:8888
- `npm run dev-bundle` - build & inject dev-bundle with all dependencies to index.html for faster page reload
- `npm run dev-unbundle` - remove injected dev-bundle
- `npm run build` - build production deployment package (minified)
- `npm run build-debug` - build debug deployment package (source maps)
- `npm run init-deploy` - init deployment repository
- `npm run deploy` - commit to deployment repository & push to remote

### Tips
- guide to sync fork (don't merge to keep a history clean): http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository
- open browser: localhost:8888
- use JSPM beta -> `jspm@0.17.X`
- follow BEM conventions: https://en.bem.info/methodology/naming-convention/

---

### Contributors:
- Piotr [@piotrwitek](https://github.com/piotrwitek)
- Seba [@PanRada](https://github.com/PanRada)
- Bartosz [@migacz1125](https://github.com/migacz1125)

### Todo
- PouchDB as persistence layer for stores
- node-uuid as uid generator
