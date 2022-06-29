// ArtistTracksBox:

// ___________________________________________________________________

// Core
import * as React from 'react'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children?: React.ReactNode
} & typeof defaultProps

const defaultProps = {}

const ArtistTracksBox: React.FC<Props> = ({ children }) => {
  return (
    <S.ArtistTracksBox as="ul">
      {children}
    </S.ArtistTracksBox>
  )
}

export default ArtistTracksBox

// ___________________________________________________________________

ArtistTracksBox.defaultProps = defaultProps
