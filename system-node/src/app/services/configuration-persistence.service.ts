import * as fs from 'fs' ;
import { ApplicationContext, GlobalConfiguration, Logger } from '@grow/common';
import { ApplicationContextKeys } from '../application.constants';

export class ConfigurationPersistenceService {
  private _applicationContext: ApplicationContext;
  private _logger: Logger;

  constructor() {
    this._applicationContext = ApplicationContext.getInstance();
    this._logger = new Logger(this.constructor.name);
    this._applicationContext.getItem(ApplicationContextKeys.CONFIG)
      .subscribe((config: GlobalConfiguration) => this._persistConfiguration(config));
  }

  private _persistConfiguration(config: GlobalConfiguration): void {
    if (!config) return;
    this._logger.debug(`Persisting changes to configuration....`);
    fs.writeFileSync('config/system-node.json', JSON.stringify(config, null, 2));
  }
}