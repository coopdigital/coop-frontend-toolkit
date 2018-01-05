#!/bin/bash

# Bail on any error
set -e

echo "Checking all core and components files can be built individually..."

COMPILERS="sass
node-sass"

FILES="./styles/_*.scss
./styles/components/_*.scss"

for c in $COMPILERS
do
  echo -ne "\nUsing $c compiler\n---\n"

  for f in $FILES
  do
    echo -n "$f "
    $c $f > /dev/null
    if [ $? -eq 0 ]; then
      echo "OK"
    fi
  done
done
