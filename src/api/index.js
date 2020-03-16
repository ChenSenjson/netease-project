import ajax from './ajax'

// const BASE = `http://localhost:5000/`
const BASE = '/api'

export const reqHomeDate = () => ajax({
  method: 'GET',
  url: BASE + `/home`
})


export const reqLifeDate = (cateId) => ajax({
  method: 'GET',

  url: BASE + `/item/cateList?categoryId=${cateId}`
})

export const reqTopicDate = () => ajax({
  method: 'GET',
  url: BASE + `/topic`
})

export const reqLogin = (user, pwd) => ajax({
  method: 'POST',
  url: BASE + `/login`,
  data: {
    user,
    pwd
  }
})

export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: `/autoLogin`,
  headers: {
    neddToken: true
  }
})