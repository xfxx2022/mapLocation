#!/bin/bash

set -e
yarn build
mkdir pages
cd pages
git init
git config --global user.name "番茄酱"
git config --global user.email "aidengrong@aidengrong.top"
git remote add github $GIT_REPO
git fetch github
git merge github/gh-pages
cp -R ../build/* ./
git add .
git commit -m "republish"
git push github master:gh-pages -f
git remote add coding $CODING_REPO
git fetch coding
git push coding master:coding-pages -f
