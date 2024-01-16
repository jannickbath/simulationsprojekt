#!/bin/sh

npm i
npm run build

cd dist
php -S 0.0.0.0:5174