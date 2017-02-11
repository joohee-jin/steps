#!/usr/bin/env bash
cd /Users/Jmousy/Project/steps
echo "---------content of this directory---------"
ls -l
echo "---------reset if build exist--------------"
rm -rf build
ls -l

echo "---------Now git clone---------------------"
git clone https://github.com/joohee-jin/steps.git
mv steps build
echo "---------now directory---------------------"
pwd
cd /Users/Jmousy/Project/steps/build
ls -al

echo "---------remove some file to build---------"
rm README.md .gitignore server.js festival.csv
rm -rf schellscript test .git shellscript
ls -al
echo "---------npm install-----------------------"
npm install
rm pakage.json
echo "---------fin-------------------------------"