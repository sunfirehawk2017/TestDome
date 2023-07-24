# Container Lifecycle

https://www.testdome.com/questions/docker/container-lifecycle/71121

As part of a load balancing scheme, your company uses multiple virtual machines which can provision and deprovision Docker containers as demand changes.

Complete the docker commands (with no additional arguments) that manage the lifecycle of a docker image.

1. When a virtual machine completes startup, it runs the following command to ready the custom container image:

> docker create --name balanced-container company-image

2. When the load balancer detects high usage, it signals the virtual machine to make the container available for use. The VM runs the following command:

> docker **start** balanced-container

3. The load balancer detects that a container has been underutilized for more than 15 minutes. It signals the VM to suspend the container to conserve CPU resources. The VM runs the command:

> docker **pause** balanced-container

4. Finding an increased load again, the load balancer signals the VM to awaken the container. The VM runs the command:

> docker **unpause** balanced-container

5. After an hour of underutilization, the load balancer signals the VM to gracefully end all processes in the container to conserve RAM resources. The VM runs the command:

> docker **stop** balanced-container
