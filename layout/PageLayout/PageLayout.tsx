import Header from "components/Header/Header";
import { handleSearch } from "lib/searchQuery";
import * as S from './styles.scss'


const PageLayout = ({children}: PageLayout) => {
    return(
        <S.PageLayoutContainer>
            <Header onSearch={handleSearch} />
            <S.PageMainContent>
                {children}
            </S.PageMainContent>
        </S.PageLayoutContainer>
    )
}

export default PageLayout;