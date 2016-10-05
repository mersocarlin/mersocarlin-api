const { env } = process;

export default {
  environment: env.NODE_ENV || 'development',
  http: {
    host: env.HTTP_HOST || '0.0.0.0',
    port: env.PORT || env.HTTP_PORT || '3000',
  },
  services: {
    message: env.MESSAGE_SERVICE_URL,
  },
  keys: {
    message: env.MESSAGE_SERVICE_ACCESS_KEY,
  },
};
