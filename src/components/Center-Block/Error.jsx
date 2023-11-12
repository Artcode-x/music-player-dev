import * as S from './center-block.styles'
import contentTitlePlayList from './Title-playlist'

export default function Error({ addError }) {
  return (
    <S.MainCenterblock>
      <S.centerblockContent>
        {contentTitlePlayList}
        <S.ContentPlaylist>
          {/* <p>{addError}</p> */}
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
