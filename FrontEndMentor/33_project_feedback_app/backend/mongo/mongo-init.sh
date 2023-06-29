#!/bin/bash
echo "*** Preparing MongoDB Configuration - Sleep 10 Seconds ***"
sleep 10
echo "*** Initializing MongoDB Configuration ***"
mongosh --username $MONGODB_USER --password $MONGODB_PASSWORD --host $MONGODB_HOST --eval "rs.initiate({_id:'$MONGODB_REPLSET',members:[{_id:0,host:'$MONGODB_REPLSET_NODE1'}]})"