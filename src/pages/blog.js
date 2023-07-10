import React from 'react';
import Link from "gatsby-link";
import { graphql } from "gatsby";
import "./css/styles.css";
import NavigationBar from "../components/navigation/navigationBar";
const Blog = ({ data }) => {
    console.log(data.allWpPost.nodes);

    return (
        <div>
            <NavigationBar />
            <section className='section'>
                <h1 className='title'>Most Recent Posts</h1>
                <div className='is-flex' style={{ gap: '.75rem' }}>
                    {data.allWpPost.nodes.map((post, idx) => {
                        return (
                            <div className='card'>
                                <div class="card-image">
                                    <figure >
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div key={post.slug}>
                                        <Link to={post.slug}>
                                            <div>{
                                                post.title
                                            }
                                            </div>
                                            <div>
                                                {post.excerpt}
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        )
                    })

                    }
                </div>
            </section>

        </div>

    )
}


export default Blog;
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
        nodes {
            title
            excerpt
            content
            slug
        }
    }
  }
`
