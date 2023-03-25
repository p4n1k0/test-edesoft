import allUserSlice from './allUserSlice.ts';


const rootReducer = () => {
    return {
        allUser: allUserSlice,
    }
};

export default rootReducer;
