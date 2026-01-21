// RepoOfPortfolio

export const blockedNameTags = ["old", "priv", "test", "demo", "sample", "archive"];

export const isRepositoryBlocked = (repoName) => {
  const lowerName = repoName.toLowerCase();

  return blockedNameTags.some((tag) => lowerName.includes(tag));
};
