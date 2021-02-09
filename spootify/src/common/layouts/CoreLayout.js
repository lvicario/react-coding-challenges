import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "./../../store/actions";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import Spinner from "../utils/Spinner";

function CoreLayout({ children , history }) {
  const dispatch = useDispatch();
  const { isFetching, isAuthenticated } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch])

  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">
          {isFetching && <Spinner />}
          {isAuthenticated && children}
        </div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
