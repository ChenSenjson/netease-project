import Mock from 'mockjs'
import Index from './index.json'
import life from './1005000.json'
import clothes from './1010000.json'
Mock.mock('/api/home', {
  code: 0,
  date: Index
})
Mock.mock('/api/item/cateList?categoryId=1005000', {
  code: 0,
  date: life
})

Mock.mock('/api/item/cateList?categoryId=1010000', {
  code: 0,
  date: clothes
})