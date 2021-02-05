#!/bin/bash
msg=$1
branch=$2
num=0
arg= `git ls-files -u | cut -f 2 | sort -u`
echo ${arg}
# if [ -n "$msg" ]; then

#    git add -A
#    git commit -m"${msg}"
#    git fetch origin "${branch}"
#    git pull origin "${branch}"
#    git push origin "${branch}"
#    flag=  $?
#     if [ $flag -eq "$num" ]; then
#       echo "输出的$flag"
#       npm run dev
#       echo "项目已启动"
#     else
#       echo "else中$flag"
#       echo "请先解决冲突"
#     fi
# else
#     echo "请添加注释再来一遍"
# fi

# $? 上次代码执行结果 0 是成功 1 是失败

# if [ -n "$error" ]; then
#    echo $error
#  else
#    echo "成功了"
# fi
# aa=$(git add -A 2>&1)
# echo $aa
# cat: /tmp/aa: No such file or directory
