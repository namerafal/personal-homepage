import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from '../../personalHomepageSlice';
import { RepoTile, RepoList } from './styled';
import { RepoLinks } from './Links';
import { Loading } from '../../../../common/Loading';
// import { ReactComponent as GitHubIcon } from '../Footer/SocialIcons/icons/github.svg';

const Portfolio = ({ username = 'namerafal' }) => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);
  const status = useSelector(selectRepositoriesStatus);

  useEffect(() => {
    dispatch(fetchRepositories(username));
  }, [dispatch, username]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error loading repositories.</div>;
  }

  return (
    <>
    
      <RepoList>
        {repositories && repositories.length > 0 ? (
          repositories.map(repo => (
            <RepoTile key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>             
              <RepoLinks link={repo}/>
            </RepoTile>
          ))
        ) : (
          <div>No repositories found.</div>
        )}
      </RepoList>
    </>
  );
};

export default Portfolio;
