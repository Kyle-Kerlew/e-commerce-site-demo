const path = require(`path`)

exports.createPages = ({  actions , graphql}) => {
    const { createPage } = actions
    return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
            title
            excerpt
            content
            slug
        }
      }
    }
  `).then(result => {
        result.data.allWpPost.nodes.forEach((node) => {
            createPage({
                path: "/blog/" +node.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug:  node.slug,
                },
            })
        })
    })
}
