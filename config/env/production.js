module.exports = {
  DB: process.env.DB || 'mongodb+srv://moodayprod:ldnTSKHZ1NwNQfQG@moodayprod.l3ehc.mongodb.net/?retryWrites=true&w=majority',
  PORT: process.env.PORT || '3002',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'false',
  CLIENT_ID: process.env.CLIENT_ID ||  "chq7JbbccSHU8TFL5JQaAmVO3OV7XCoe",
  CLIENT_SECRET : process.env.CLEINT_SECRET || "2evl52sZFiX0PQroVUHwkhUikgtwWaNFNKxRQ05c7i89DBQas1XFvNtYJXP45Ofn",
  CLIENT_TWILIO_SID: process.env.CLIENT_TWILIO_SID  || "AC1e1cf7e4c6e9f364ca48335055b6a5a1",
  CLIENT_TWILIO_API_KEY: process.env.CLIENT_TWILIO_API_KEY  || "SKd0792d6a84e98d8305569899fc5760bf",
  CLIENT_TWILIO_SECRET: process.env.CLIENT_TWILIO_SECRET  || "NnngOSpUrcdiIksrnYVQfwdYKNW8dCeO",
  CLIENT_SERVICE_SID: process.env.CLIENT_SERVICE_SID  || "IS0c68117901a64aeca5df9b0dcd2d75ba",
  CLIENT_IDENTITY: process.env.CLIENT_IDENTITY  || "user@example.com",
  STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY || "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",
  STRIPE_CLIENT_ID: process.env.STRIPE_CLIENT_ID || "ca_M1BcKoQ1Zu8nyckPLpfUdc9HcskQMF2P",
  AMQP_HOST_URL: process.env.AMQP_HOST_URL || "amqps://moodaymqprod:greatcloud34@b-4039b401-05d0-427d-bdb1-b4e7812f2e4f.mq.us-east-2.amazonaws.com:5671",
  NOTIFICATION_EXCHANGE: process.env.NOTIFICATION_EXCHANGE || "notification_exchange",
  USER_EXCHANGE: process.env.USER_EXCHANGE || "user_exchange_dev",
  USER_SERVICE_QUEUE: process.env.USER_SERVICE_QUEUE || "user_queue_dev",
  AUTH0_MGMG_BASEURL: process.env.AUTH0_MGMG_BASEURL || "https://mooday.us.auth0.com/",
  SENDER_EMAIL: process.env.SENDER_EMAIL || 'support@mooday.net',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'support@mooday.net',
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || "https://mooday.us.auth0.com/api/v2/",
  TWILIO_PUSH_CREDENTIALS: process.env.TWILIO_PUSH_CREDENTIALS || "CRbfb536702228b43d8c3db24b98322d24",
}