#!/bin/bash
kubectl delete -f deployment/
eval "$(minikube docker-env)"
docker rmi almahdi-chihaoui/frontend
docker build -t almahdi-chihaoui/frontend .
kubectl apply -f deployment/