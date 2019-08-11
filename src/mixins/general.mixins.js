export default {
  methods: {
    getColor (rating) {
      switch (rating) {
        case 1:
          return 'negative'
        case 2:
          return 'orange'
        case 3:
          return 'yellow'
        case 4:
          return 'positive'
        case 5:
          return 'info'
        default:
          return 'grey'
      }
    }
  }
}
