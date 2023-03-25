const INITIAL_STATE = [
    {
        address: {
            geocalition: {
                lat: '-37.3159',
                long: '81.1496',
            },
            city: 'kilcoole',
            street: 'new road',
            number: '7682',
            zipcode: '12926-3874',
        },
        id: 1,
        email: 'john@gmail.com',
        username: 'johnd',
        password: '638fmF$',
        name: {
            firstname: 'john',
            lastname: 'doe',
        },
        phone: '1-570-2367033',
        __v: 0,
    },
    {
        address: {
            geocalition: {
                lat: '-37.3159',
                long: '81.1496',
            },
            city: 'kilcoole',
            street: 'Lovers Ln',
            number: '7267',
            zipcode: '12926-3874',
        },
        id: 2,
        email: 'morrison@gmail.com',
        username: 'mor_2314',
        password: '83r5^_',
        name: {
            firstname: 'david',
            lastname: 'morrison',
        },
        phone: '1-570-236-7033',
        __v: 0,
    },
];

const user = (state = INITIAL_STATE, action: { type: any, email: any }) => {
    switch (action.type) {
        case 'USER_EMAIL':
            return ({
                ...state,
                email: action.email,
            });
        default:
            return state;
    }
};

export default user;
