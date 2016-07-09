export const config = {
  environment: process.env.NODE_ENV || 'development',
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.HTTP_PORT || '3000',
  },
  services: {
    message: process.env.MESSAGE_SERVICE_URL,
  },
  keys: {
    message: process.env.MESSAGE_SERVICE_ACCESS_KEY || '',
  },
};
