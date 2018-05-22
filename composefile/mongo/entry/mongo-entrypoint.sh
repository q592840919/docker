#!/usr/bin/env bash
echo "add db"
mongo admin --host localhost -u root -p rootPass --eval "db.createUser({user: 'admin', pwd: '123456', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});"
mongo admin -u root -p rootPass << EOF
use happygo
db.happygo.insert({"name":"happygo"})
db.createUser({user: 'xf', pwd: '123456', roles:[{role:'readWrite',db:'happygo'}]})
EOF
echo "Mongo users created."

