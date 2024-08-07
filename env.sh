#!/bin/sh

cat <<EOF > /usr/share/nginx/html/env-config.js
window.ENV = {
  VITE_BASE_URL: '$VITE_BASE_URL',
  VITE_MAIN_URL: '$VITE_MAIN_URL',
  VITE_AUTH_URL: '$VITE_AUTH_URL',
  VITE_APPLY_URL: '$VITE_APPLY_URL',
  VITE_ADMIN_URL: '$VITE_ADMIN_URL'
};
EOF