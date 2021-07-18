import React from "react"
import { Link } from "gatsby"

import { FeaturedMedia } from "components/common"
import { PostCategories, PostMeta } from "components/post"

import { PostTitle, PostArticle, PostExcerpt } from "./styles"

export const PostPreview = ({ post, isLast }) => {
    return (
        <>
            <PostArticle>
                <header>
                    <PostTitle>
                        <Link
                            to={post.uri}
                            dangerouslySetInnerHTML={{ __html: post.title }}
                        />
                    </PostTitle>
                    <PostMeta
                        title={post.title}
                        author={post.author}
                        date={post.date}
                    />
                </header>

                <FeaturedMedia image={post.featuredImage} />

                <PostExcerpt>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </PostExcerpt>
            </PostArticle>

            {!isLast && (
                <hr
                    key={post.postId + "-hr"}
                    className="post-separator styled-separator is-style-wide section-inner"
                    aria-hidden="true"
                />
            )}
        </>
    )
}

export default PostPreview
