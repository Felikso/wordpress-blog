import React from "react"
import { TitleWrapper } from "./styles"

export function Title({ title, subtitle }) {
    return (
        <TitleWrapper>
            {subtitle && <h3 className="subtitle">{subtitle}</h3>}
            <h1 className="title">{title}</h1>
            <div className="underline" />
        </TitleWrapper>
    )
}

/* Title.defaultProps = {
     subtitle: "subtitle",
    title: "title",
} */
