#!/bin/bash

VARN=$(docker ps -a -q --filter name=cabinet)

if [ -n "$VARN" ]
        then 
          docker stop $VARN
          echo "stopped $VARN"
          docker rm -f $VARN
        else echo "no container"
fi;

VARN=$(docker ps -a -q --filter ancestor=jwilder/nginx-proxy)

if [ -n "$VARN" ]
        then 
          docker stop $VARN
          echo "stopped $VARN"
        else echo "no container"
fi;
