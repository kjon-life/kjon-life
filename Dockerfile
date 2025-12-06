FROM node:22.6.0-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies via pnpm
# Copy manifest and pnpm lockfile so the lock is available for install
COPY package.json pnpm-lock.yaml ./

RUN corepack enable && pnpm install --frozen-lockfile

# Bundle app source
COPY . .

# Bundle app source
COPY . .

EXPOSE 8081
CMD [ "pnpm", "start" ]
# CMD [ "parcel", "start" ]