const isValidDomain = (url: string): boolean => {
  return url.length > 1 ? true : false;
};

export const areValidDomains = (domainList: string): boolean => {
  if (domainList.length === 0) return false;

  const domainArr = domainList.split(", ").map((domain) => {
    return domain.trim();
  });

  for (let domain of domainArr) {
    // iterate through array of domains and see if they are all valid - if one is not, return false
    if (!isValidDomain(domain)) return false;
  }

  return true;
};
