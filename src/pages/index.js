import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"


export default ({ data }) => {
    console.log(data)
    return (
        <PrimaryLayout column="col-xs-6">
            <Post
                title="Title"
                excerpt="Exceprt"
            />

        </PrimaryLayout>
    )
}

export const query = graphql`
    {
        allMarkdownRemark {
            nodes {
                html
                excerpt
            }
        }
    }
`
