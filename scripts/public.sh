#!/usr/bin/env bash

function main() {
    local now message branch folder
    branch="pages"
    now="$(date)"
    message="publish $now"
    folder="docs"

    git checkout "$branch"
    git rebase main
    yarn build -o "$folder"
    git add --force "$folder"
    git commit --message="$message"
    git push --set-upstream origin "$branch"
    git checkout -
}

main
