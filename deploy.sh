#! /bin/sh

rm -Rf app/lib/*
mkdir app/lib/
cp bower_components/angularjs/angular.min.js app/lib/
cp bower_components/angularjs/angular-route.min.js app/lib/
cp bower_components/angularjs/angular-touch.min.js app/lib/
cp bower_components/modernizr/modernizr.js app/lib/
cp bower_components/shake.js/shake.js app/lib/

echo "Deploy complete"