export declare class ApplicationContext {
    private static instance;
    private _context;
    private constructor();
    static getInstance(): ApplicationContext;
    setItem(key: string, value: any): void;
    getItem(key: string): any;
}
