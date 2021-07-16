import styled from "styled-components"

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.border.primary};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`