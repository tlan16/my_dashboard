ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache --update \
    bash \
    git \
    openssh-client

WORKDIR /app
ADD . .

RUN yarn --immutable
