#!/bin/bash
# msg=$1
# branch=$2
error=$3
# echo ${msg} ${branch}
# if [ -n "$msg" ]; then
#    git add -A
#    git commit -m"${msg}"
#    git fetch origin "${branch}"
#    git pull origin "${branch}"
#    git push origin "${branch}"
#    npm run dev
#     echo "项目已启动"
# else
#     echo "请添加注释再来一遍"
# fi


if [-n "$error"]; then
else
  echo "错误了"
fi
aa = git pull origin master
echo {$aa}
# aa=$(git add -A 2>&1)
# echo $aa
# cat: /tmp/aa: No such file or directory
