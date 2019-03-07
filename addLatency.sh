#!/usr/bin/env bash
sudo tc qdisc add dev wlp58s0 root netem delay $1
