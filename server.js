import gracefulShutdown from 'http-graceful-shutdown';

import createApp from './src/app.js';
import AppDataSource from './src/config/database.config.js';
import environment from './src/config/environment.config.js';


const app = createApp();

async function startApp() {
    try {
        await AppDataSource.initialize()
        console.log('✅ Data source has been initialized!');
        
        const server = app.listen(environment.port, () => console.log(`🚀 Server running at port: ${environment.port}`));

        gracefulShutdown(server, {
            development: false,
            forceExit: true,
            timeout: 60000,
            onShutdown: async function() {
                if (AppDataSource.isInitialized) {
                console.log('🔻 Shutting down DB...');
                await AppDataSource.destroy()
                }    
            },
            finally: () => console.log('✅ Server gracefully shutted down...')
        })    
    } catch (err) {
        console.log(`❌ Data source initialization failed! ${err.stack}`)
        process.exit(1)
    }
}

startApp();