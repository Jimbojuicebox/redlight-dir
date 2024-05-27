import styled from "styled-components";

export const StakingTable = styled.table`
  width: 100%;
  text-align: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    width: 100%;
    font-size: 0.8rem;
  }
`

export const StakingTableBody = styled.tbody`
    
`

export const StakingTableRow = styled.tr`
    
`

export const StakingTableHeader = styled.th`
    padding: 3px 6px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 0.6rem;
  }
`

export const StakingTableDivision = styled.td`
    padding-top: 3px;
    padding-bottom: 3px;
`

export const StakeInput = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.back_dark};
    border-radius: 5px;
    padding: 2px;
    max-width: 90px;
`

export const PeakInput = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.back_dark};
    border-radius: 5px;
    padding: 2px;
    max-width: 40px;
    margin-right: 2rem;
    margin-top: 0.7rem;
`

export const RllInput = styled.input`
    margin: 0.3rem 0.3rem 0.3rem 1rem;
    filter: grayscale(1);
`

export const SButton = styled.button`
    background-color: ${({ theme }) => theme.colors.back_dark};
    padding: 5px 7px;
    border: none;
    border-radius: 6px;
    margin: 1rem auto;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.back_dark};
    };

    &:active {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    };
`