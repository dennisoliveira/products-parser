import { Client } from '@elastic/elasticsearch'

const elasticsearchConnect = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: '',
    password: '',
  },
})

export default elasticsearchConnect
