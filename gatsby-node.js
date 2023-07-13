/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}

const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "File" && node.sourceInstanceName === "images") {
    const relativeFilePath = createFilePath({ node, getNode })
    const parentFolderName = getNode(node.parent).relativeDirectory
    const newPath = path.join(
      "contents/images",
      parentFolderName,
      relativeFilePath
    )

    createNodeField({
      node,
      name: "publicURL",
      value: newPath,
    })
  }
}
