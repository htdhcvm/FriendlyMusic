import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import ClearIcon from '@material-ui/icons/Clear';
import Avatar from '@material-ui/core/Avatar';

import './AuthHeader.scss';
import { TextField } from '@material-ui/core';
const Header = () => {
    const [searchText, setSearchTest] = useState('');

    const clearSearchText = () => {
        setSearchTest('');
    };

    const handleSearch = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log('search');
    };
    return (
        <div className="header auth-header">
            <div className="left">
                <ZoomOutMapIcon className="left-panel-toggle" />
                <form className="formSearch" onSubmit={handleSearch}>
                    <SearchIcon />
                    <div className="form-field">
                        <TextField
                            value={searchText}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setSearchTest(e.target.value)
                            }
                            placeholder="Название вакансии"
                            InputProps={{ disableUnderline: true }}
                            className="search-input"
                            variant="standard"
                        />
                    </div>
                    {searchText.trim().length > 0 ? (
                        <ClearIcon
                            className="clearText"
                            onClick={clearSearchText}
                        />
                    ) : null}
                    <TuneIcon className="settingsSearch" />
                </form>
            </div>

            <div className="right">
                <span className="login">Flouheforst</span>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
        </div>
    );
};

export default Header;
