# careermp-prototype

Before starting make sure no other containers are running on port 4466 (to check run: `docker ps`).

To run in dev 3 services must run simulatenously (in addition to the docker containers):

Note if you already have a prisma container running you can do and skip to 1.b: 
```
npm install
cd prisma
yarn prisma reset
yarn prisma deploy
```

1. Set up the prisma + postgres + apollo server 2

a) Deploy the datamodel to the running prisma container
```
npm install
docker compose up
cd prisma
yarn prisma deploy
```
b) Run apollo server
```
node ./src/index
```

2. Set up the python api which is currently not finished but will cause errors if not propped up!
```
cd recommendation-service
pip install tornado # assumes pandas is already installed
python api.py
```

3. Run the react frontend app
```
cd frontend
npm install
npm start
```
