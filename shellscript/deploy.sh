#!/usr/bin/env bash

echo "-------------------------------------------send the directory build"
rsync -av -e ssh ~/steps/build irteamsu@10.110.241.148:/home1/irteamsu

