# Instructions to Run
### Install lite-server
```sh
npm install -g lite-server
```

### Install babel
```sh
npm install -g babel-cli
```

### Install Dependencies
cd to directory. Then run to install dependencies
```sh
npm install
```

### Transpile JSX to es5 code
```
babel public/src/app.js --out-file=public/scripts/app.js --presets=react,env
```

### Run Application
Run following command to run application.
```
lite-server public
```
