#!/bin/bash

cp package.prod.json package.json 
rm -rf ~/.npm
npm cache clear
npm install node-sass
npm install
npm run build
