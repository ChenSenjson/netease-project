import Mock from 'mockjs'
import Index from './index.json'

Mock.mock('/api/home', {
  code: 0,
  date: Index
})