import styled from 'styled-components';

export const Header =  styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    padding: 0.5rem 1rem;
    background-color: rgb(36,36,47);
    justify-content: space-between;
    z-index: 100;
    overflow: hidden;

    .header__left {
        display: flex;
        &__searchbar {
            flex: 1;
            min-width: 70px;
            background-color: white;
            color: rgb(${(props) => props.theme.text});
            border-radius: 30px;
            padding: 0 1rem;
            display: flex;
            align-items: center;


            svg {
                fill: rgb(${(props) => props.theme.icon});
            }

            input {
                color: rgb(${(props) => props.theme.darkBackground});
                width: 100%;
            }
        }
    }

    .header__right {
        display: flex;
        align-items: center;
    }
`;


export const Navigation = styled.div`
display: flex;
`;

export const SearchBar = styled.div`
flex: 1;
min-width: 70px;
background-color: white;
color: rgb(${(props) => props.theme.text});
border-radius: 30px;
padding: 0 1rem;
display: flex;
align-items: center;


svg {
    fill: rgb(${(props) => props.theme.icon});
}

input {
    color: rgb(${(props) => props.theme.darkBackground});
    width: 100%;
}
`;

export const SearchInput = styled.input`
color: rgb(${(props) => props.theme.darkBackground});
width: 100%;
`;