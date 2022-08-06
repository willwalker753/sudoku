startPath=$(pwd)
scriptPath=$(realpath $(dirname "${BASH_SOURCE[0]}"))

cd $scriptPath

. create-node-alias.sh
nodebox npm install
nodebox npm run dev

cd $startPath
