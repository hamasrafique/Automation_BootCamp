# Use official playwright image
FROM mcr.microsoft.com/playwright:v1.52.0-jammy

# create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Install playwright browsers
RUN npx playwright install --with-deps

# Run tests
CMD ["npx", "playwright", "test"]
