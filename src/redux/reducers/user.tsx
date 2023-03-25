const INITIAL_STATE = {
    email: '',
};

const user = (state = INITIAL_STATE, action: { type: any; email: any; }) => {
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
