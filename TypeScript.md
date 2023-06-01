安装：npm install -g typescript@latest  
查看版本: tsc --version

----------
使用：

1. 安装tsconfig.json文件：`tsc --init`
2. 配置tsconfig.json文件： "outDir": "./dist" , "rootDir": "./src"  //这样配置，使得来自src下的源代码，最终都会编译到dist文件夹中
3. 执行编译：`tsc` 或 `tsc -w` //前者是一次性编译，后者是持续性编译  