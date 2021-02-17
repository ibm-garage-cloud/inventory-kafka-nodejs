const { Kafka } = require('kafkajs')
const config = require('../config/kafkaConnection')
// 1.Instantiating kafka
const kafka = new Kafka(config)
// 2.Creating Kafka Producer
const producer = kafka.producer()

async function runProducer () {
  console.log('RUN PRODUCER');
  const message = {
    books: 10,
    trees: 'TO-101212'
  }
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages:
          [{ value: JSON.stringify(message) }]
  })
  console.log('Message Produced')
  await producer.disconnect()
}

module.exports = runProducer