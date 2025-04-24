import gracefulShutdown from 'http-graceful-shutdown';

import createApp from './src/app.js';
import AppDataSource from './src/config/database.config.js';
import environment from './src/config/environment.config.js';
import logger from './src/config/logger.config.js';


const app = createApp();

async function startApp() {
    try {
        await AppDataSource.initialize()
        logger.info('✅ Data source has been initialized!');
        
        const server = app.listen(environment.port, () => logger.info(`🚀 Server running at port: ${environment.port}`));

        gracefulShutdown(server, {
            development: false,
            forceExit: true,
            timeout: 60000,
            onShutdown: async function() {
                if (AppDataSource.isInitialized) {
                logger.log('🔻 Shutting down DB...');
                await AppDataSource.destroy()
                }    
            },
            finally: () => logger.log('✅ Server gracefully shutted down...')
        })    
    } catch (err) {
        logger.error(`❌ Data source initialization failed! ${err}`)
        process.exit(1)
    }
}

startApp();