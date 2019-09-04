### What is Docker?
Docker containers wrap up a piece of software in a complete filesystem that contains everything it needs to run: code, runtime, system tools, system libraries – anything you can install on a server. This guarantees that it will always run the same, regardless of the environment it is running in.

[see more](https://www.docker.com/what-docker)

### Why Docker?

- Docker provides an integrated technology suite that enables development and IT operations teams to build, ship, and run distributed applications anywhere.
- Light weight containers
- Available on most linux distors

### Why should we care?
- It's first
- Minimal overhead/resource usage
- Run thousands of containers
- Easy to run our whole production stack locally

- Container: Light weight virtualization
- Image: Immutable snapshot of a container
- Hub/Index: Central hub for sharing images

### Various Docker Commands:

```sh
# docker install
$ wget -qO- https://get.docker.com/ | sh
$ usermod -aG docker <username>

# run docker as a daemon
$ docker run -d -p 4000:22 -i -t <image-name> /usr/sbin/sshd -D

# run and bind port image
$ docker run --rm -p 8080:8080 -t <image-name>
# -p host_port:container_port

# remove all images by force
$ docker rmi -f $(docker images -q)

# remove all containers
$ docker rm -f $(docker ps -a -q)

# run an image
$ docker run -p 49160:8080 -d <image-name>
# -d runs the container in detached mode, leaving the container running in the background
# -p flag redirects a public port to a private port in the container

# get container ID
$ docker ps
$ docker ps -l // exited docker container

# List of volumes are mounted in a docker container
$ docker inspect -f "{{ .Mounts }}" <container-id>

# print logs of container
$ docker logs <container ID>

# calling app using 'curl'
$ curl -i localhost:<binding port>

# specify a repository and tag
$ docker build -t sajib/<image-name> .

# ecec a container
$ docker exec -it e5f272d20a82 /bin/bash

# ENTRYPOINT for jenkins
$ ENTRYPOINT ["/usr/bin/java", "-Djava.awt.headless=true", "-jar", "/usr/share/jenkins/jenkins.war", "--httpPort=8080", "--ajp13Port=-1"]

# install a specifiq version of docker
$ sudo apt-get install lxc-docker-1.6.0

# edit docker config file
$ export DOCKER_HOST=tcp://$HOST:2376 DOCKER_TLS_VERIFY=1

# push an image
$ docker push <username>/<image_name>:<tag>

#
'-H tcp://0.0.0.0:4243 -H unix:///var/run/docker.sock'
```


### Different operation in docker

```
$ echo $id
$ id=$(docker ps -l | sed -n '2p' | awk {'print substr($1,3)'})
$ docker stop $id
$ echo $id
$ id=$(hostname)
```

### Accepted docker.conf of docker 1.6 version

```
description "Docker daemon"

start on (local-filesystems and net-device-up IFACE!=lo)
stop on runlevel [!2345]
limit nofile 524288 1048576
limit nproc 524288 1048576

respawn

pre-start script
        # see also https://github.com/tianon/cgroupfs-mount/blob/master/cgroupfs-mount
        if grep -v '^#' /etc/fstab | grep -q cgroup \
                || [ ! -e /proc/cgroups ] \
                || [ ! -d /sys/fs/cgroup ]; then
                exit 0
        fi
        if ! mountpoint -q /sys/fs/cgroup; then
                mount -t tmpfs -o uid=0,gid=0,mode=0755 cgroup /sys/fs/cgroup
        fi
        (
                cd /sys/fs/cgroup
                for sys in $(awk '!/^#/ { if ($4 == 1) print $1 }' /proc/cgroups); do
                        mkdir -p $sys
                        if ! mountpoint -q $sys; then
                                if ! mount -n -t cgroup -o $sys cgroup $sys; then
                                        rmdir $sys || true
                                fi
                        fi
                done
        )
end script

script
        # modify these in /etc/default/$UPSTART_JOB (/etc/default/docker)
        DOCKER=/usr/bin/$UPSTART_JOB
        DOCKER_OPTS='-H tcp://0.0.0.0:4243 -H unix:///var/run/docker.sock'
        if [ -f /etc/default/$UPSTART_JOB ]; then
                . /etc/default/$UPSTART_JOB
        fi
        exec "$DOCKER" -d $DOCKER_OPTS
end script

<........end...............>
```

```
< ...................... docker 1.6 .... docker.conf........... >
description "Docker daemon"

start on (local-filesystems and net-device-up IFACE!=lo)
stop on runlevel [!2345]
limit nofile 524288 1048576
limit nproc 524288 1048576

respawn

pre-start script
        # see also https://github.com/tianon/cgroupfs-mount/blob/master/cgroupfs-mount
        if grep -v '^#' /etc/fstab | grep -q cgroup \
                || [ ! -e /proc/cgroups ] \
                || [ ! -d /sys/fs/cgroup ]; then
                exit 0
        fi
        if ! mountpoint -q /sys/fs/cgroup; then
                mount -t tmpfs -o uid=0,gid=0,mode=0755 cgroup /sys/fs/cgroup
        fi
        (
                cd /sys/fs/cgroup
                for sys in $(awk '!/^#/ { if ($4 == 1) print $1 }' /proc/cgroups); do
                        mkdir -p $sys
                        if ! mountpoint -q $sys; then
                                if ! mount -n -t cgroup -o $sys cgroup $sys; then
                                        rmdir $sys || true
                                fi
                        fi
                done
        )
end script

script
        # modify these in /etc/default/$UPSTART_JOB (/etc/default/docker)
        DOCKER=/usr/bin/$UPSTART_JOB
        DOCKER_OPTS=
        if [ -f /etc/default/$UPSTART_JOB ]; then
                . /etc/default/$UPSTART_JOB
        fi
        exec "$DOCKER" -d $DOCKER_OPTS
end script
# Don't emit "started" event until docker.sock is ready.
# See https://github.com/docker/docker/issues/6647
post-start script
        DOCKER_OPTS=
        if [ -f /etc/default/$UPSTART_JOB ]; then
                . /etc/default/$UPSTART_JOB
        fi
        if ! printf "%s" "$DOCKER_OPTS" | grep -qE -e '-H|--host'; then
                while ! [ -e /var/run/docker.sock ]; do
                        initctl status $UPSTART_JOB | grep -qE "(stop|respawn)/" && exit 1
                        echo "Waiting for /var/run/docker.sock"
                        sleep 0.1
                done
                echo "/var/run/docker.sock is up"
        fi
        DOCKER_OPTS='-H tcp://0.0.0.0:4243 -H unix:///var/run/docker.sock'
end script
<----------- The End -------------->
```