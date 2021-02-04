#!/bin/bash
   git add .
   git commit -m"alter"
   git fetch origin master
   git pull origin master
   git push origin master
   echo "完成add、commit、pull，别忘了push"
