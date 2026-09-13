#!/usr/bin/env bash
# Local docs preview helper (same idea as sibling walkthroughs).
set -euo pipefail
cd "$(dirname "$0")/.."
npm install
npm run dev
