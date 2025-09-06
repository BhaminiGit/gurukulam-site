FROM node:19-alpine

WORKDIR /app


COPY package*.json ./
RUN npm install


COPY vite.config.js .
COPY index.html .
COPY vercel.json .
COPY eslint.config.js .
COPY src ./src
COPY api ./api


RUN npm install -g vercel


CMD ["vercel", "dev", "--yes", "--confirm", "--force"]