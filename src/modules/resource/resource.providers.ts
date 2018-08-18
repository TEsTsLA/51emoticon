export const resourceProviders = [
    {
        provide: 'resourceProvider',
        useFactory: (obj) => ({
            get() {
                return 'get' + obj.name
            },
            set() {
                return 'set' + obj.name
            }
        }),
        inject: ['fatherProvider'],
    },
];
export const fatherProvider = [
    {
        provide: 'fatherProvider',
        useFactory: () => ({
            name: 'fatherProvider',
            get() {
                return 'get'
            },
            set() {
                return 'set'
            }
        }),
    },
];