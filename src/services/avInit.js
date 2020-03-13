import AV from 'leancloud-storage';
import { appId } from './config';
import { appKey } from './config';
import { serverURLs } from './config';

if (!AV.applicationId) {
  console.log(123123, process);
  AV.init({
    appId,
    appKey,
    serverURLs,
  });
}

export default AV;
