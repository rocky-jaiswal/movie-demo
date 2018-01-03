const environmentConfiguration = (environment) => {
  if (environment === 'development' && typeof window !== 'undefined') {
    return {
      baseURL: `http://${window.location.hostname}:3001`,
    };
  }
  return {};
};

const Config = {
  env: environmentConfiguration(process.env.REACT_APP_ENV || 'development'),
};

export default Config;
