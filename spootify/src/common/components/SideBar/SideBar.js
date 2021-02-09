import React from 'react';
import { Link, useLocation } from "react-router-dom";
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';

function renderSideBarOption(link, icon, text, { currentPath } = {}) {
  const isSelected = currentPath === link ? true : false;

  return (
    <Link
      to={link}
      className={cx('sidebar__option', { 'sidebar__option--selected': isSelected })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </Link>
  )
}

export default function SideBar() {
  const { pathname: currentPath } = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption('/', faHeadphonesAlt, 'Discover', { currentPath })}
        {renderSideBarOption('/search', faSearch, 'Search', { currentPath })}
        {renderSideBarOption('/favourites', faHeart, 'Favourites', { currentPath })}
        {renderSideBarOption('/playlists', faPlayCircle, 'Playlists', { currentPath })}
        {renderSideBarOption('/charts', faStream, 'Charts', { currentPath })}
      </div>
    </div>
  );
}
