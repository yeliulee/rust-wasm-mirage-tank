BUILD_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" || return ; pwd)
META_DIR=$BUILD_DIR/pkg-meta
DIST_DIR=$BUILD_DIR/pkg

cd $BUILD_DIR

wasm-pack build -t web -d "${DIST_DIR}"

rm -f "${DIST_DIR}/.gitignore" "${DIST_DIR}/README.md" "${DIST_DIR}/package.json"

cp -r "${META_DIR}/" "${DIST_DIR}"