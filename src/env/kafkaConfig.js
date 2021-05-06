require('dotenv').config()
const path = require('path')
const fs = require('fs')
const pemPath = path.join(__dirname, '../', '/env/kafka-key/tls.key');


function setConfig(){
    if(fs.existsSync(pemPath)){
        console.log('Using Cluster Configuration');
        var config = require('./clusterDev');
        opts = {
          topic: config.kafka.TOPIC,
          clientId: config.kafka.CLIENTID,
          brokers: config.kafka.BROKERS,
          authenticationTimeout: config.kafka.AUTHENTICATIONTIMEOUT,
          connectionTimeout: config.kafka.CONNECTIONTIMEOUT,
          reauthenticationThreshold: config.kafka.REAUTHENTICATIONTHRESHOLD,
          ssl: {
            rejectUnauthorized: false,
            ca: fs.readFileSync(pemPath, 'utf-8')
          },
          sasl: {
            mechanism: config.kafka.SASLMECH, // scram-sha-256 or scram-sha-512
            username: 'devUser15',
            password: 'kafkaDev15'
          },
          retry: {
            "retries": config.kafka.RETRIES,
            "maxRetryTime": config.kafka.MAXRETRYTIME
         }
        }
      } else {
        console.log('Using Local Configuration');
        var config = require('./localDev');
        opts = {
          topic: config.kafka.TOPIC,
          clientId: config.kafka.CLIENTID,
          brokers: config.kafka.BROKERS,
          authenticationTimeout: config.kafka.AUTHENTICATIONTIMEOUT,
          connectionTimeout: config.kafka.CONNECTIONTIMEOUT,
          reauthenticationThreshold: config.kafka.REAUTHENTICATIONTHRESHOLD,
          retry: {
            "retries": config.kafka.RETRIES,
            "maxRetryTime": config.kafka.MAXRETRYTIME
         }
        }
      }
}

setConfig();

module.exports = opts