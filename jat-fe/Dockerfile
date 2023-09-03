FROM node:18.12.1-alpine3.15
WORKDIR /app
COPY package.json .
RUN yarn
# copy all files
COPY . .
RUN yarn build
CMD ["yarn", "preview"]