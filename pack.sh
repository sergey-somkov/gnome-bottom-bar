# MIT License
# Copyright (c) 2022 Sergey Somkov

set -e
set -u

SCRIPT_DIR=$(dirname $(realpath $0))/
SOURCE_DIR=${SCRIPT_DIR}src/
OUTPUT_DIR=${SCRIPT_DIR}out/

mkdir -p ${OUTPUT_DIR}

gnome-extensions pack \
	--extra-source=${SOURCE_DIR}BottomBar.js \
	--force \
	--out-dir=${OUTPUT_DIR} \
	${SOURCE_DIR}