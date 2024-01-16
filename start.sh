#!/bin/sh

npm i
npm run build

cd dist
php -S localhost:5174