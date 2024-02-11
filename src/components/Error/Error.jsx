import * as S from './Error.styled'
import TitlePlayList from '../TitlePlayList/TitlePlayList'

export default function Error({ addError }) {
  return (
    <S.MainCenterblock>
      <S.centerblockContent>
        {TitlePlayList}
        <S.ContentPlaylist>
          <S.PlaylistItem>
            <S.ErrorItem>
              <p>{addError}</p>
            </S.ErrorItem>
          </S.PlaylistItem>
        </S.ContentPlaylist>
      </S.centerblockContent>
    </S.MainCenterblock>
  )
}
