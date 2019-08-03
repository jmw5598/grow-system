export class GsCoreModuleConfig {
  constructor(
    public auth: GsCoreAuthConfig,
    public api: GsCoreApiConfig
  ) {}  
}

export class GsCoreAuthConfig {
  constructor(
    public baseUrl: string,
    public header: string,
    public prefix: string
  ) {}
}

export class GsCoreApiConfig {
  constructor(
    public baseUrl: string
  ) {}
}