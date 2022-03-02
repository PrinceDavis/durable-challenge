import { Api } from './utils/api'

describe('Given that we have a healthy service', () => {
  test('Can get github repo with mongodb connection db', async() => {
    const response = await Api.get('/v1/search').expect(200)
    expect(response.body).toHaveProperty('items')
    expect(response.body).toHaveProperty('total_count')
    expect(response.body.items.length).toBe(30)
  })

  test('Can get github repo with mongodb connection db given a pageSize', async() => {
    const response = await Api.get('/v1/search?pageSize=2').expect(200)
    expect(response.body).toHaveProperty('items')
    expect(response.body).toHaveProperty('total_count')
    expect(response.body.items.length).toBe(2)
  })

  test('Can get github repo with mongodb connection db given a searchString', async() => {
    const response = await Api.get('/v1/search?searchString=tg').expect(200)
    expect(response.body).toHaveProperty('items')
    expect(response.body).toHaveProperty('total_count')
    expect(response.body.items[0].name).toMatch(/tg/i)
  })
})