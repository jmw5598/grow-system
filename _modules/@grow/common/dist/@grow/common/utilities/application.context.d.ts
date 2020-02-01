declare class ApplicationContext {
    private _context;
    constructor();
    setItem(key: string, value: any): void;
    getItem(key: string): any;
}
export declare const AppContext: ApplicationContext;
export {};
