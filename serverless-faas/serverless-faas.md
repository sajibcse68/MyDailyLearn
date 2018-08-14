
## [OpenFaaS Framework:](https://github.com/openfaas/faas)

#### Create docker image, push to docker hub

*hello.yml*

```
provider:
  name: faas
  gateway: http://localhost:8080
functions:
  node-machine-info:
    lang: node
    handler: ./function/handler.js
    image: sajib/node-faas
```

$ faas-cli build -f hello.yml

### Push the image to docker hub (image: sajib/node-faas)

```
$ faas-cli push -f hello.yml
```

### Deploy and test `FaaS`

```
$ export gw=http://$(minikube ip):31112

$ faas-cli deploy -f hello.yml -- gateway $gw
```

#### List of faas
$ faas-cli list --gateway http://192.168.99.100:31112
$ faas-cli list --verbose --gateway http://192.168.99.100:31112

