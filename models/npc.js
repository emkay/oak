module.exports = (store) => {
  store.model({
    namespace: 'npc',
    state: {
      characters: [],
      index: 0
    },
    reducers: {
      add: (data, state) => {
        state.characters.push(data)
      },
      update: (data, state) => {
        const characters = state.characters
        const i = state.index
        characters[i] = data
        return {
          characters: characters
        }
      },
      setIndex: (data, state) => {
        return {
          index: data
        }
      }
    }
  })
}
