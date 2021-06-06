/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const axios = require('axios')
const crypto = require('crypto')
const contentful = require('contentful')
const config = require('./config')
const { env } = require('process')

const client = contentful.createClient({
    space: config.contentful_space_id,
    environment: 'master', // defaults to 'master' if not set
    accessToken: config.contentful_api_token
})

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions;
    // await for results
    const res = await client.getEntries()

    // map into these results and create nodes
    res.items.map((item, i) => {
        console.log(item.sys.contentType.sys.id)
        let fill = {}
        let this_type = item.sys.contentType.sys.id
        switch ("") {
            case "":
                break;
            case "":
                break
        }
        // Create your node object
        const itemNode = {
            // Required fields
            id: `${i}`,
            parent: `__SOURCE__`,
            internal: {
                type: this_type //allContent
            },
            children: [],

            item

            // Other fields that you want to query with graphQl

        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(itemNode))
            .digest(`hex`);
        // add it to userNode
        itemNode.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(itemNode);
    });

    return;
}

exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }) => {
    console.log(page.path)
}
exports.createPages = async () => {
    console.log("Created Pages")
}
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}