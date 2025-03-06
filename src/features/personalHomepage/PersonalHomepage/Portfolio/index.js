import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from '../../personalHomepageSlice';
import { RepoTile, RepoList, TitleWrapper, Icon, Title, Subtitle, SectionWrapper } from './styled';
import { ReactComponent as GitHubIcon } from '../Footer/SocialIcons/icons/github.svg';

const Portfolio = ({ username = 'namerafal' }) => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);
  const status = useSelector(selectRepositoriesStatus);

  useEffect(() => {    
    dispatch(fetchRepositories(username));
  }, [dispatch, username]);  

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error loading repositories.</div>;
  }

  return (
    <SectionWrapper>
      <TitleWrapper>
        <Icon as={GitHubIcon} />
        <Title>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </TitleWrapper>
      <RepoList>
        {repositories && repositories.length > 0 ? (
          repositories.map(repo => (
            <RepoTile key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
            </RepoTile>
          ))
        ) : (
          <div>No repositories found.</div>
        )}
      </RepoList>
    </SectionWrapper>
  );
};

export default Portfolio;
