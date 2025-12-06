FROM node:20-bullseye AS builder

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json yarn.lock .pnp.cjs .pnp.loader.mjs ./
COPY .yarn/ ./.yarn/

RUN corepack enable && yarn install --immutable

COPY . .

RUN yarn build

FROM node:20-bullseye AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
