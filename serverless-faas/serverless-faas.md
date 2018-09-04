## Benefits of Serverless Applications:

1. **Zero Administration:** Deploy code without provisioning anything beforehand, or managing anything afterward.

2. **Auto-scaling:** Let our service providers manage the scaling challenges. No need to fire alerts or write scripts to scale up and down. Handle quick bursts of traffic weekend lulls the same way -- with peace of mind.

3. **Pay-per-use:** Function-as-a-server (FaaS) compute and managed services charged based on usage rather than pre-provisioned capacity. We can have complete resource utilization without paying a cent for idle time.

4. **Increased velocity:** Shorten the loop between having an idea and deploying to production. Because there's less to provision up front and less to manage after deployment, smaller teams can ship more features.



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

```
$ faas-cli list --gateway http://192.168.99.100:31112
$ faas-cli list --verbose --gateway http://192.168.99.100:31112
```
