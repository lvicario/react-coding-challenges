import React, { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { fetchPlaylist, fetchNewRelease, fetchGenres } from "./../../../store/actions";
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

const Discover = () => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);
  const playlist = useSelector(({ playlist }) => playlist);
  const newRelease = useSelector(({ newRelease }) => newRelease);
  const genres = useSelector(({ genres }) => genres);

  useEffect(() => {
    // Only fetch if authenticated & if items are not yet fetched
    if (auth.token) {
      if (!playlist.isFetched) {
        dispatch(fetchPlaylist())
      }

      if (!newRelease.isFetched) {
        dispatch(fetchNewRelease())
      }

      if (!genres.isFetched) {
        dispatch(fetchGenres())
      }
    }
  }, [dispatch, auth.token, playlist.isFetched, newRelease.isFetched])

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={playlist.albums} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={newRelease.albums} />
      <DiscoverBlock text="BROWSE" id="browse" data={genres.albums} imagesKey="icons" />
    </div>
  );
}

export default Discover;
