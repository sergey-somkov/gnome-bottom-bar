# MIT License
# Copyright (c) 2022 Sergey Somkov

set -e
set -u

SCRIPT_DIR=$(dirname $(realpath $0))/
OUTPUT_DIR=${SCRIPT_DIR}out/

gnome-extensions install \
	--force \
	${OUTPUT_DIR}bottom-bar@somkov.com.shell-extension.zip