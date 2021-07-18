import React from "react"

import { PaginatorArrowLeft, PaginatorArrowRight, PaginatorLinkRight, PaginatorLinkLeft } from "./styles"

export const Paginator = ({ previousPage, nextPage }) => {

    return (
        <>
            {previousPage && (
                <PaginatorLinkRight
                    css={``}
                    to={previousPage.uri}>
                    <PaginatorArrowRight />
                    {/*                     <span
                        className="title-inner"
                        dangerouslySetInnerHTML={{ __html: previousPage.title }}
                    /> */}
                </PaginatorLinkRight>
            )}

            {
                nextPage && (
                    <PaginatorLinkLeft to={nextPage.uri}>
                        <PaginatorArrowLeft />
                        {/*                         <span
                            className="title-inner"
                            dangerouslySetInnerHTML={{ __html: nextPage.title }}
                        /> */}
                    </PaginatorLinkLeft>
                )
            }
        </>
        /*         <PaginatorNav
                    className="pagination-single section-inner"
                    aria-label={contentType}
                    role="navigation"
                    previousPage={previousPage}
                    nextPage={nextPage}
                >
                    {previousPage && (
                        <PaginatorLink
                            css={``}
                            to={previousPage.uri}>
                            <PaginatorArrowRight />
                            <span
                                className="title-inner"
                                dangerouslySetInnerHTML={{ __html: previousPage.title }}
                            />
                        </PaginatorLink>
                    )}
        
                    {nextPage && (
                        <PaginatorLink to={nextPage.uri}>
                            <PaginatorArrowLeft />
                            <span
                                className="title-inner"
                                dangerouslySetInnerHTML={{ __html: nextPage.title }}
                            />
                        </PaginatorLink>
                    )}
                </PaginatorNav> */
    )
}

