#!/bin/bash
msg=$1
branch=$2
echo ${msg} ${branch}
if [ -n "$msg" ]; then
   git add -A
   git commit -m"${msg}"
   git pull origin "${branch}"
   git status
   echo "完成add、commit、pull，别忘了push"
else
    echo "请添加注释再来一遍"
fi
