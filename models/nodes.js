module.exports = (store) => {
  store.model({
    namespace: 'nodes',
    state: {},
    reducers: {
      update: (data, state) => (data)
    },
    effects: {
      sync: (data, state, send, done) => {
        window.db.put('nodes', JSON.stringify(state))
        done()
      }
    }
  })
}
