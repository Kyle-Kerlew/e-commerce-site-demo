import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout.js";
export default function BlogPost({ data }) {
    const post = data.allWpPost.nodes[0]
    console.log(post)
    return (
        <Layout>
            <div>
              <div className="block">
                <span className="title">{post.title}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
        nodes {
          title
          content
        }
    }
  }
`
