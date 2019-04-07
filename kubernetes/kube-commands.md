## Kunernetes CLI Commands

#### docker pull from gcloud (gce)
    $ gcloud docker pull gcr.io/<project-name>/<image-name>:<tag>

#### Fancy Commands
```sh
$ kubectl get pod
$ kubectl create -f <name>
$ kubectl describe pod <pod-name>
$ kubectl get endpoint
$ journalctl -f -u <pod-name> -l
$ ps wwaux | grep <word>
$ systemctl status <pod-name>
$ kubectl exec -it <pod-name> bash
$ journalctl -f
$ systemctl status scheduler
$ systemctl status kueblet
$ systemctl status flannel
$ systemctl status proxy
$ kubectl get pods/jenkins-qs4k7 -o yaml  // get the raw json or yaml for a pod you have created
```
#### scaling replication controller
    $ kubectl scale rc <rc-name> --replicas=2

#### see the logs/errors of a pod
    $ kubectl logs -f <pod name>

#### convert in base64
    $ cat .dockercfg | base64

#### public IP address assigned to application
    $ kubectl get svc <service-name> -o json | grep \"ip\"

#### To kill the application and delete its containers and public IP address
```sh
$ kubectl delete rc <rc-name>
$ kubectl delete svc <srv-name>
```

#### To see the output of the command you ran
    $ kubectl logs hello-world

#### Labels from the pod template are copied to the replication controller’s labels by default)
    $ kubectl get rc <rc-name> -L app

#### Check pods' IPs
    $ kubectl get pods -l app=<app-name> -o json | grep podIP

#### Inspect the environment of your running nginx pods
    $ kubectl exec <pod-name> -- printenv | grep SERVICE
