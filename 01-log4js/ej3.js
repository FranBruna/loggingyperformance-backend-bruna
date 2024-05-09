import log4js from "log4js";

export const ej3 = () => {

    log4js.configure({
        appenders: {
            fileAppender: { type: 'file', filename: './logs/ej3.log' },
            console: { type: 'console' }
        },
        categories: {
            default: { appenders: ['fileAppender', 'console'], level: 'error' }
        }
    })
    
    const logger = log4js.getLogger();
    
    logger.trace('Imprimo Trace');
    logger.debug('Imprimo debug');
    logger.info('Imprimo info');
    logger.warn('Imprimo warn');
    logger.error('Imprimo error');
    logger.fatal('Imprimo fatal');
}
    

