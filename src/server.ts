import NewServer from '../proto/autogenerated/ts/express_server'
import methods from './services/main'
import serverOptions from './auth';
export default NewServer(methods, serverOptions)