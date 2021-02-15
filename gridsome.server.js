module.exports = (api) => {
  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
    type Jobs implements Node {
      id: ID!
      title: String!
      vacancy_pdf: File!
    }
  `)
  })
}
