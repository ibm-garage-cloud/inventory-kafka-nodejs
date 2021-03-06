module.exports = {
    kafka: {
      TOPIC: 'broke-test',
      BROKERS: ['kafka.kafka-confluent.svc:9071'],
      GROUPID: 'bills-consumer-group',
      CLIENTID: 'sample-kafka-client',
      SASLMECH:'plain',
      CONNECTIONTIMEOUT: 3000,
      AUTHENTICATIONTIMEOUT: 1000,
      REAUTHENTICATIONTHRESHOLD: 10000,
      RETRIES: 3,
      MAXRETRYTIME: 5
    }
  }