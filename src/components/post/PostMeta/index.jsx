import React from "react"

import { FaUserNinja } from "@react-icons/all-files/fa/FaUserNinja"
import { BsFillCalendarFill } from "@react-icons/all-files/bs/BsFillCalendarFill"
import { MetaUl, MetaBox } from "./styles"


export const PostMeta = ({ author, date }) => {
    author = author?.node
    return (
        <MetaBox>
            <MetaUl>
                <li>
                    <FaUserNinja />
                    <p>Dodane przez: {" "}
                        {author.firstName
                            ? author.lastName
                                ? author.firstName + " " + author.lastName
                                : author.firstName
                            : author.name}
                    </p>
                </li>
                <li>
                    <BsFillCalendarFill />
                    <p>Data: {date}</p>

                </li>
            </MetaUl>
        </MetaBox>
    )
}

