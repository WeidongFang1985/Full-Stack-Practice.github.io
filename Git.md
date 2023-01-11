git init //创建git仓库 工作区， 暂存区，本地仓库  
git add . // 添加所有文件到暂存区  
git add [filename]  //添加指定文件到暂存区  
git remote add orgin [giturl]   //为本地仓库添加远程仓库  
git remote -v //查看链接的远程仓库地址  
git remote rm origin //删除连接的远程仓库  
git remote origin set-url [giturl]  //修改远程仓库地址  
git push -u origin master //关联远程master  

git branch //查看本地分支  
git branch -d [branchname]  
git branch -D [branchname]  //删除本地分支  
git checkout [branchname]    //切换分支  
git checkout -b feature1 //新建本地分支切换到新分支  

git status //查看文件状态  
git diff //查看该文件的改动情况 github desktop查看  
git log //查看所有的commits  
git rerlog //查看所有commits，包括版本回退的commits  

rebase feature1 -> master //不要站在公共分支上执行rebase操作  
git checkout master  
git pull //local master up to date  
git checkout feature1  
git rebase master //在feature1 branch上rebase master  
git checkout master  
git merge feature1 // git merge feature1  

git merge feature2 //merge  

git reset HEAD^ //回退所有内容到上一个版本，内容回到工作区  
git reset --soft HEAD\~1 //回退所有内容到上一个版本，内容回到暂存区  
git reset --hard HEAD\~1 //回退所有内容到上一个版本  
git reset [commitID]     //回退到指定的commit  

git stash save 'feature3' //  
git stash list //查看储存区所有的stash提交  
git stash pop //弹出最近的一次储存区的代码  
git stash@{n} //从0开始  
git stash drop@{n} //删除某个stash  
git stash clear //清除所有stash  
