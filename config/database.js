// path: ./config/database.js`

module.exports = ({ env }) => ({
  connection: {
    client: 'kuper', 
  connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'kuper'),
        user: env('DATABASE_USERNAME', 'kuper'),
        password: env('DATABASE_PASSWORD', 'kuper2022'),
        ssl: {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
       },
      },
      debug: false,
  },
});
