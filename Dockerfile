FROM node:24-alpine

# RUN apk add --no-cache python3 py3-pip

WORKDIR /usr/src/app

# COPY requirements.txt .

# RUN if [ -f requirements.txt ]; then pip3 install --no-cache-dir -r requirements.txt; fi

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

# RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# RUN chown -R nodejs:nodejs /usr/src/app

# USER nodejs

EXPOSE 3000

CMD ["npm", "start"]
