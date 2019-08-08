## 2019/08

### Docker for local development environment

**Reference blog** [here](https://blog.atulr.com/docker-local-environment/).

- Get start with docker. [Download and tutorial](https://www.docker.com/get-started)

- **Dockerfile**

```Dockerfile
FROM node:6.17.0
WORKDIR /root
ADD . /root
```

- **docker-compose.yml**

  **build**: Path to the dockerfile. Note: you can either specify the folder which contains the Dockerfile or the complete path to Dockerfile itself. Both works.

  **image**: instead of build : In docker-compose we can specify the docker image from docker-hub directly instead of a dockerfile using the image: property. Hence for simple setups we dont need to write our own Dockerfile.

  **command**: Command to run when docker container is started.

  **environment**: All the environment variables you need to set.

  **ports**: This specifies the mapping of the port inside the container to that of the host machine. They need not be same.

  **working_dir**: This is the path inside the container where you want to the run the command you specified above.

  **volumes**: volumes gives us a way to map our local directories to a directory inside the container. Here we are saying map njs1 folder from our local machine to /root/njs1 inside the docker container. Here we are not copying the files into the container, instead we are mounting it as a shared volume. And thats the trick that makes it useful.

```yml
version: '3'
services:
  njs1:
    build: ./njs1
    image:
    command: sh -c "npm install && npm start"
    environment:
      - NODE_ENV=development
      - PORT=7000
    ports:
      - '7000:7000'
    working_dir: /root/njs1
    volumes:
      - ./njs1:/root/njs1:cached # <--- This will map ./njs1 to /root/njs1 inside the container.
```
- **run**

```shell
docker-compose start
docker-compose stop
docker-compose restart <service name>
docker-compose logs -f <service name>
docker-compose up <service name>
```


### Docker with API

- Develop with Docker Engine SDKs and API. [Document](https://docs.docker.com/develop/sdk/)

- Docker + Node = Dockerode (Node.js module for Docker's Remote API). [Link to Github](https://github.com/apocas/dockerode)

