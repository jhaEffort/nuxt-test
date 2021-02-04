#!/bin/bash
   git add .
   git commit -m"alter"
   git fetch
   git pull
   git push
   npm run dev
   echo "完成add、commit、pull，别忘了push"
