FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN corepack enable && pnpm i --frozen-lockfile && pnpm -r run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/apps/server/dist ./apps/server/dist
COPY --from=builder /app/apps/server/package.json ./apps/server/package.json
COPY --from=builder /app/package.json ./package.json
RUN corepack enable && pnpm i --filter cloudbox-server --prod
ENV NODE_ENV=production
CMD ["pnpm","--filter","cloudbox-server","start"]
