module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'dev'),
      password: env('DATABASE_PASSWORD', 'dev'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
