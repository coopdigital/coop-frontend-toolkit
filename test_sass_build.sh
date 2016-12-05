#!/bin/bash

# Bail on any error
set -e

echo "Checking all core and components files can be built individually..."

FILES="./styles/_*.scss
./styles/components/_*.scss"

for f in $FILES
do
  echo -n "$f "
  node-sass $f > /dev/null
  if [ $? -eq 0 ]; then
    echo "OK"
  fi
done

echo ""

echo -n "Checking full build using Ruby Sass compiler... "

sass styles/_coop-toolkit.scss > /dev/null
if [ $? -eq 0 ]; then
  echo "OK"
fi
