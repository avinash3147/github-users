import React, { useState, useEffect, useContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [githubUser, setGithubUser]  = useState(mockUser)
    const [repos, setRepos]  = useState(mockRepos)
    const [followers, setFollowers]  = useState(mockFollowers)

    return (
        <AppContext.Provider 
            value={{
                githubUser,
                repos,
                followers
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
