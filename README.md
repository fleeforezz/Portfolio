# Portfolio
![Preview image for the project](/../main/preview.png)

# Website
https://fleeforezz.me
# To deploy the project
### Requirement
- Docker
- Docker Compose

### Deploy with Dockerfile
1. Clone the project
```
git clone https://github.com/fleeforezz/Portfolio.git
``` 
2. Get inside the project
```
cd Portfolio
```
3. Build docker Image 
```
docker build -t nextjs-portfolio .
```
4. Run the docker
```
docker run --rm -p 9453:9453 --name nextjs-portfolio nextjs-portfolio
```

### Deploy with docker compose
1. Clone the project
```
git clone https://github.com/fleeforezz/Portfolio.git
```
2. Get inside the project
```
cd Portfolio
```
3. Run docker-compose.yml file
```
docker-compose up -d
```
