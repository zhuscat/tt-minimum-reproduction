# tt-minimum-reproduction


## 环境

头条开发者工具版本：1.8.8

```
npm run dev:mp-toutiao
```

## 步骤

打开开发者工具，点击转跳按钮，再点击返回按钮

## 结果

```
Uncaught TypeError: Cannot read property '$destroy' of undefined
    at t.detached (index.js:1586)
    at eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:269444)
    at Array.forEach (<anonymous>)
    at St.call (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:269412)
    at eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:47918)
    at jr (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:48022)
    at Ar (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:47892)
    at eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:55727)
    at Array.forEach (<anonymous>)
    at _o (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:55655)
    at fo (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:54441)
    at vo (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:54933)
    at bo (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:55980)
    at Function.eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:290432)
    at eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:24466)
    at eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:275618)
    at Array.forEach (<anonymous>)
    at Function.eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:275598)
    at eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:259523)
    at Object.O (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277), <anonymous>:1:4269)
    at /Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277
    at EventEmitter.<anonymous> (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.3b7fe257013e358e1fa6.js:277)
    at EventEmitter.emit (events.js:182)
```
