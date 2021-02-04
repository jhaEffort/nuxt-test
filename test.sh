#!/bin/bash
   git add .
   git commit -m"alter"
   git fetch origin master
   git pull origin master
   git push origin master
   npm run dev
   echo "项目已启动"
