#!/usr/bin/env bash
set -e

function main() {
    local now message branch folder
    branch="pages"
    now="$(date)"
    message="publish $now"
    folder="docs"

    git config --global init.defaultBranch "$branch"
    git config --global user.email "franklan118@gmail.com"
    git config --global user.name "Frank Lan (Bot)"
    git init .

    git remote add origin "https://tlan16:${GIT_ACCESS_TOKEN}@github.com/tlan16/my_dashboard.git"

    rm -rf "$folder"
    yarn build -o "$folder"
    git add --force "$folder"
    git commit --message="$message"
    git push --force --set-upstream origin "$branch"
}

main
