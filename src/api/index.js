import ajax from './ajax'

// const BASE = `http://localhost:5000/`
const BASE = '/api'

export const reqHomeDate = () => ajax({
  method: 'GET',
  url: BASE + `/home`
})