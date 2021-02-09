import React, { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { fetchPlaylist } from "./../../../store/actions";
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

const Discover = () => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);
  const albums = useSelector(({ playlist }) => playlist.albums);

  useEffect(() => {
    // Only fetch if authenticated & if it's not fetched yet
    if (auth.token && albums.length === 0) {
      dispatch(fetchPlaylist())
    }
  }, [dispatch, auth.token, albums.length])

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={albums} />
      {/* <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={albums} /> */}
      {/* <DiscoverBlock text="BROWSE" id="browse" data={albums} imagesKey="icons" /> */}
    </div>
  );
}

export default Discover;
