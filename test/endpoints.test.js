/*
#
# REMOVE (DISABLED) MIDDLEWARE FROM AUTH BEFORE TESTING
#
*/

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
chai.use(chaiHttp)
const app = require('../app')
const prayer = require('../models/prayerModel')
const users = require('../models/userModel')

// for testing
let token
let id

describe('du3aaAPI endpoints', () => {
  describe('Auth routes', () => {
    it('get all users', async () => {
      const res = await chai
        .request(app)
        .get('/auth/user')

      expect(res.body.status).to.equal(200)
      expect(res.body.statusText).to.equal('success')
    })

    it('create a new user', async () => {
      const res = await chai
        .request(app)
        .post('/auth/user')
        .send({ username: 'test', email: 'test@test.com', password: 'test123' })

      expect(res.body.status).to.equal(200)
      expect(res.body.statusText).to.equal('success')
      expect(res.body.message).to.equal('User created')
      expect(res.body.token).to.not.be.empty
    })

    it('login a user', async () => {
      const res = await chai
        .request(app)
        .post('/auth/login')
        .send({ email: 'test@test.com', password: 'test123' })

      expect(res.body.status).to.equal(200)
      expect(res.body.statusText).to.equal('success')
      expect(res.body.message).to.equal('logged in')
      expect(res.body.token).to.not.be.empty

      token = res.body.token
    })

    it('verify a user', async () => {
      const res = await chai
        .request(app)
        .post('/auth/verify')
        .set('authorization', `Bearer ${token}`)

      expect(res.body.verified).to.true
      expect(res.body.payload).to.be.an('object')
    })
  })

  describe('Prayer routes', () => {
    it('get a random prayer', async () => {
      const res = await chai
        .request(app)
        .get('/random')

      expect(res.body.prayer).to.not.be.empty
    })

    it('get all prayers', async () => {
      const res = await chai
        .request(app)
        .get('/prayer')

      expect(res.body.status).to.equal(200)
      expect(res.body.statusText).to.equal('success')
    })

    it('create a new prayer', async () => {
      const res = await chai
        .request(app)
        .post('/prayer')
        .set('authorization', `Bearer ${token}`)
        .send({ prayer: 'test' })

      expect(res.body.status).to.equal(200)
      expect(res.body.statusText).to.equal('success')
      expect(res.body.message).to.equal('New prayer created')
      expect(res.body.data).to.be.an('object')

      id = res.body.data._id
    })

    it('update a prayer', async () => {
      const res = await chai
        .request(app)
        .put('/prayer/' + id)
        .set('authorization', `Bearer ${token}`)
        .send({ prayer: 'test2' })

      expect(res.body.status).to.equal(200)
      expect(res.body.statusText).to.equal('success')
      expect(res.body.message).to.equal('prayer updated')
      expect(res.body.data).to.be.an('object')
    })

    it('get a prayer using id', async () => {
      const res = await chai
        .request(app)
        .get('/prayer/' + id)

      expect(res.body.status).to.equal(200)
      expect(res.body.statusText).to.equal('success')
      expect(res.body.data).to.be.an('object')
    })

    it("get prayer's count", async () => {
      const res = await chai
        .request(app)
        .get('/count')

      expect(res.body.count).to.exist
    })

    it('delete a prayer', async () => {
      const res = await chai
        .request(app)
        .delete('/prayer/' + id)
        .set('authorization', `Bearer ${token}`)

      expect(res.body.status).to.equal(200)
      expect(res.body.statusText).to.equal('success')
      expect(res.body.message).to.equal('Prayer deleted')
    })
  })

  after(async () => {
    await users.deleteOne({ username: 'test' })
    await prayer.deleteOne({ _id: id })
  })
})
