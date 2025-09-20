FROM denoland/deno:alpine-2.5.1

ARG UID
ARG GID
ARG PORT

ENV UID=${UID:-1010}
ENV GID=${GID:-1010}
ENV PORT=${PORT:-3000}

WORKDIR /app
COPY . /app

RUN addgroup -g ${GID} --system image_proxy \
    && adduser -G image_proxy --system -D -s /bin/sh -u ${UID} image_proxy

RUN deno cache deno.js

RUN chown -R image_proxy:image_proxy /app
USER image_proxy

EXPOSE ${PORT}

CMD ["deno", "run", "--allow-net", "--allow-env", "deno.js"]
