#! /bin/sh

rm -Rf app/lib/*
cp bower_components/modernizr/modernizr.js app/lib/
cp bower_components/shake.js/shake.js app/lib/

echo "Deploy complete"