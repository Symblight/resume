import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

export default process.env.NODE_ENV.trim() === 'production' ? configureStoreProd : configureStoreDev;
