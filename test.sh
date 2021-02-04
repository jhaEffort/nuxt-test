#!/bin/bash
msg=$1
branch=$2
echo ${msg} ${branch}
if [ -n "$msg" ]; then
   git add -A
   git commit -m"${msg}"
   git fetch origi "${branch}"
   git pull origin "${branch}"
   git push origin "${branch}"
   npm run dev
   echo "项目已启动"
else
    echo "请添加注释再来一遍"
fi
