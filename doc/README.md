# DEBUG 模式
1, 首先要安装工具 
```
    npm i -g nodemon typescript
```
2, 执行命令tsc -w 
3,配置launch.json
```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "nest start",
            "program": "${workspaceFolder}\\index.js",
            "cwd": "${workspaceFolder}",
            "sourceMaps": true,
            "internalConsoleOptions": "neverOpen",
            "console": "integratedTerminal",
            "env": {
                "NODE_ENV":"development"
            },
            "runtimeArgs": [
                "--nolazy"
            ]
        },
        {
            "type": "node",
            "request": "launch",
            "name": "DEBUG",
            "runtimeExecutable": "nodemon",
            "program": "${workspaceFolder}\\dist\\server",
            "restart": true,
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        },
    ]
}
```
4, vscode debug 点击 DEBUG

