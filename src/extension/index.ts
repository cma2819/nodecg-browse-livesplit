import LiveSplitClient from 'livesplit-client';
import { NodeCG } from './nodecg';
import { timeStringToObject } from './utils';

export =  (nodecg: NodeCG): void => {
  const logger = new nodecg.Logger('extension');
  const lsConfig = nodecg.bundleConfig.livesplit;

  const currentTimeRep = nodecg.Replicant('currentTime', {
    defaultValue: {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    }
  });

  const lsClient = new LiveSplitClient(lsConfig.address || '127.0.0.1:16834');

  try {
    
      // Connected event
      lsClient.on('connected', () => {
        logger.info('Connected!');
        
        setInterval(async () => {
          currentTimeRep.value = timeStringToObject(await lsClient.getCurrentTime());
          logger.debug(`ct: ${JSON.stringify(currentTimeRep.value)}`);
        }, lsConfig.tick || 100);
      });

      // Disconnected event
      lsClient.on('disconnected', () => {
          logger.info('Disconnected!');
      });

      lsClient.connect();

  } catch (err) {
    logger.error(err);
  }

}