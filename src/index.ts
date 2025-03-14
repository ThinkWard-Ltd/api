import 'dotenv/config'
import NewServer from '../proto/autogenerated/ts/express_server.js'
import GetServerMethods from './services/serverMethods/index.js'
import serverOptions from './auth.js';
import Main, { LoadMainSettingsFromEnv } from './services/main/index.js'
import { LoadNosrtSettingsFromEnv } from './services/nostr/index.js'
import nostrMiddleware from './nostrMiddleware.js'

const start = async () => {
    const mainHandler = new Main(LoadMainSettingsFromEnv())
    await mainHandler.storage.Connect()
    await mainHandler.lnd.Warmup()
    const serverMethods = GetServerMethods(mainHandler)
    const nostrSettings = LoadNosrtSettingsFromEnv()
    nostrMiddleware(serverMethods, mainHandler, nostrSettings)
    const Server = NewServer(serverMethods, serverOptions(mainHandler))
    Server.Listen(8080)
}
start()
