import styled from "styled-components"

export const MainBody = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    /* background: linear-gradient(165deg, #bc0016, white 30%); */
`

export const Container = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: auto;
`

export const PaddingContainer = styled.div`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left }) => left};
    padding-right: ${({ right }) => right};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        padding-top: ${({ responsiveTop }) => responsiveTop};
        padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
        padding-left: ${({ responsiveLeft }) => responsiveLeft};
        padding-right: ${({ responsiveRight }) => responsiveRight};
    };
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
    flex-direction: ${({ direction }) => direction};
    width: ${({ width }) => width};
    flex-basis: ${({ basis }) => basis};
    flex-shrink: ${({ shrink }) => shrink};
    flex-grow: ${({ grow }) => grow};
    max-width: 100%;
    margin: ${({ margin }) => margin};
    flex-wrap:  ${({ wrap }) => wrap};
    min-width: ${({ mwidth }) => mwidth};

    & > div {
        flex: ${({ fullWidthChild }) => fullWidthChild && 1};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        display: ${({ tabletFlex }) => tabletFlex ? 'flex' : 'block'};
        justify-content: ${({ tabletJustify }) => tabletJustify};
        flex-direction: ${({ tabletDirection }) => tabletDirection};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}){
        display: ${({ tabletFlex }) => tabletFlex ? 'flex' : 'block'};
        justify-content: ${({ tabletsJustify }) => tabletsJustify};
        flex-direction: ${({ tabletsDirection }) => tabletsDirection};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: ${({ responsiveFlex }) => responsiveFlex ? 'flex' : 'block'};
        justify-content: ${({ responsiveJustify }) => responsiveJustify};
        flex-direction: ${({ responsiveDirection }) => responsiveDirection};
    };
`

export const Heading = styled(PaddingContainer)`
    color: ${({ color }) => color};
    text-align: ${({ align }) => align};
    font-size: ${({ size }) => {
        switch(size){
            case 'h1':
                return '4.5rem';
            
            case 'h2':
                return '3rem';
            
            case 'h3':
                return '2rem';

            case 'h4':
                return '1.2rem';

            default:
                return;
        }
    }};

    font-weight: ${props => props.bold ? 700 : 400};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: ${({ size }) => {
            switch(size){
                case 'h1':
                    return '2.5rem';
                
                case 'h2':
                    return '2rem';
                
                case 'h3':
                    return '1.5rem';

                case 'h4':
                    return '1rem';

                default:
                    return;
            }
        }};
    };
`

export const RedText = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ size }) => size};
    font-weight: ${props => props.bold ? 'bold' : ''};
`

export const ParaText = styled(PaddingContainer)`
    color: ${props => props.white ? 'white' : 'black'};
    font-weight: ${props => props.bold ? 'bold' : ''};
    line-height: 1.2rem;
    word-wrap: break-word;

    a {
        text-decoration: none;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 0.8rem;
    };
`

export const ParaDiv = styled.div`
    padding: 0 1rem;
    color: ${props => props.white ? 'white' : 'black'};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: none;
    };
`

export const IconContainer = styled.a`
    display: ${({ display }) => display};
    font-size: ${({ size }) => size};
    cursor: pointer;
    z-index: 10;
    color: ${({ color, theme }) => {
        switch(color){
            case 'white':
                return theme.colors.white;

            case 'blue':
                return theme.colors.secondary;

            default:
                return;
        }
    }};
`

export const Button = styled.a`
    z-index: 0;
    position: relative;
    display: ${({ display }) => display};
    width: max-content;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.back_dark};
    };

    &:active {
        transform: scale(0.9, 0.9);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 0.9rem;
    };
`

export const ReturnButton = styled.button`
    margin: 2.5rem auto;
    z-index: 0;
    position: flex;
    display: ${({ display }) => display};
    width: max-content;
    padding: 0.5rem 1.3rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.back_dark};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 0.9rem;
    };
`

export const ArrowUp = styled.p`
    display: inline-flex;
    padding-left: 0.2rem;
    transform: translateY(1px);
`
