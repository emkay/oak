module.exports = (store) => {
  store.model({
    namespace: 'app',
    state: {
      mode: 'read',
      page: 'main',
      currentId: false
    },
    reducers: {
      update: (data, state) => (data)
    }
  })
}
