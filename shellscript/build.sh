#!/usr/bin/env bash
cd ~/steps

echo "-------------------------------------------content of this directory"
ls -l
echo "-------------------------------------------reset if build exist"
rm -rf build
ls -l

echo "-------------------------------------------Now git clone"
git clone https://github.com/joohee-jin/steps.git
cd ~/steps
pwd
mv steps build
pwd

echo "-------------------------------------------now directory"
pwd
cd ~/steps/build
ls -al

echo "-------------------------------------------remove some files to build"
rm README.md .gitignore app.js
rm -rf schellscript test .git shellscript
#rm app.js

ls -al
echo "-------------------------------------------npm install"
npm install
rm package.json

echo "-------------------------------------------fin"