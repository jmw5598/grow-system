/*
 * Public API Surface of gs-core
 */

// MODULES
export * from './lib/gs-core.module';

// SERVICES
export * from './lib/services/crud.interface';
export * from './lib/services/abstract-crud.service';
export * from './lib/services/authentication.service';
export * from './lib/services/relay.service';
export * from './lib/services/sse.service';

// MODELS
export * from './lib/models/command-request.model';
export * from './lib/models/credentials.model';
export * from './lib/models/error.model';
export * from './lib/models/token.model';
