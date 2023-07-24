# Container Restart

https://www.testdome.com/questions/docker/container-restart/71122

The automation team is testing their background Docker web server containers. They need to cleanly remove the existing containers without leaving any artifacts behind, then start new containers.

Complete the following docker commands to achieve these objectives:

> ```# Gracefully end all processes in the containers```

> host> docker-compose stop

> ```# Remove the containers and their anonymous volumes```

> host> docker-compose **rm** -v

> ```# Start containers in background```

> host> docker-compose up **-d** apache php mysql
