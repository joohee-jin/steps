#!/usr/bin/env bash
cd ~/steps
echo "---------content of this directory---------"
ls -l
echo "---------reset if build exist--------------"
rm -rf build
ls -l

echo "---------Now git clone---------------------"
git clone https://github.com/joohee-jin/steps.git
cd ~/steps
pwd
mv steps build
pwd

echo "---------now directory---------------------"
pwd
cd ~/steps/build
ls -al

echo "---------remove some file to build---------"
rm README.md .gitignore festival.csv
rm -rf schellscript test .git shellscript
#rm app.js

ls -al
echo "---------npm install-----------------------"
npm install
rm package.json

echo "---------send directory 'build-------------"
rsync -av -e ssh ~/steps/build irteamsu@10.110.241.148:/home1/irteamsu

echo "---------fin-------------------------------"