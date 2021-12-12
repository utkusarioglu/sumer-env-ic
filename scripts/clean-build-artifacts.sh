#!/bin/bash

REPO_ROOT=${0%/*}/..

MAIN=$(jq -r '.main' < $REPO_ROOT/package.json)
TYPES=$(jq -r '.types' < $REPO_ROOT/package.json)
TSBUILDINFO=$(jq -r '.compilerOptions.tsBuildInfoFile' < $REPO_ROOT/tsconfig.json)

rm -rf $REPO_ROOT/$(dirname $MAIN)
rm -rf $REPO_ROOT/$(dirname $TYPES)
rm -rf $REPO_ROOT/$(basename $TSBUILDINFO)
