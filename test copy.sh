#!/bin/bash
msg=$1
if [ -n "$msg" ]; then
   git add .
   git commit -m"${msg}"
   git fetch
   git pull
   git push
   npm run dev
   echo "完成add、commit、pull，别忘了push"
else
    echo "请添加注释再来一遍"
fi
