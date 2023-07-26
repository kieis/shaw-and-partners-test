import { Loader4 } from "@styled-icons/remix-line";
import { lighten } from "polished";
import styled from "styled-components";

type LoadIconStyleProps = {
    color?: string;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: auto;
`;

export const LoadIcon = styled(Loader4).attrs(({ theme, color }) => ({
    width: 24,
    color: color ? color : lighten(0.12, theme.colors.highlight)
}))<LoadIconStyleProps>``;