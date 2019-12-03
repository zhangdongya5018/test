import config from '../../../config/index'

export function getDomain () {
  return (process.env.NODE_ENV === 'development' ? config.dev.serverUrl : config.build.serverUrl)
}

const serverConfig = {
  url: getDomain()
};
export default serverConfig;
