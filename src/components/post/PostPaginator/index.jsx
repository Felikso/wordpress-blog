import React from "react"

import { PostPaginatorArrowLeft, PostPaginatorArrowRight, PostPaginatorLinkRight, PostPaginatorLinkLeft, PostPaginatorNav } from "./styles"

export const PostPaginator = ({ previousPage, nextPage }) => {

    return (
        <PostPaginatorNav>
            {previousPage && (
                <PostPaginatorLinkRight
                    to={previousPage.uri}>
                    <PostPaginatorArrowRight />
                    <span
                        className="title-inner"
                        dangerouslySetInnerHTML={{ __html: previousPage.title }}
                    />
                </PostPaginatorLinkRight>
            )}

            {
                nextPage && (
                    <PostPaginatorLinkLeft to={nextPage.uri}>
                        <PostPaginatorArrowLeft />
                        <span
                            className="title-inner"
                            dangerouslySetInnerHTML={{ __html: nextPage.title }}
                        />
                    </PostPaginatorLinkLeft>
                )
            }
        </PostPaginatorNav>
        /*         <PostPaginatorNav
                    className="pagination-single section-inner"
                    aria-label={contentType}
                    role="navigation"
                    previousPage={previousPage}
                    nextPage={nextPage}
                >
                    {previousPage && (
                        <PostPaginatorLink
                            css={``}
                            to={previousPage.uri}>
                            <PostPaginatorArrowRight />
                            <span
                                className="title-inner"
                                dangerouslySetInnerHTML={{ __html: previousPage.title }}
                            />
                        </PostPaginatorLink>
                    )}
        
                    {nextPage && (
                        <PostPaginatorLink to={nextPage.uri}>
                            <PostPaginatorArrowLeft />
                            <span
                                className="title-inner"
                                dangerouslySetInnerHTML={{ __html: nextPage.title }}
                            />
                        </PostPaginatorLink>
                    )}
                </PostPaginatorNav> */
    )
}

