#!/bin/sh
exec java \
  -Xmx256m \
  -Xms128m \
  -Dserver.port=${PORT:-8080} \
  -jar app.jar
