import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllUserRequestAction } from '../../../redux-store/reducer/allUserSlice';
import { UserInfoInterface } from '../../../interface/UserInfoInterface';

export function HomeComponent() {
    const allUserState = useSelector((state: any) => state.allUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUserRequestAction());
    }, []);

    return (<>
        <div className='grid grid-cols-3 gap-3 p-2'>
            {allUserState.users.map((user: UserInfoInterface, index: number) => {
                return <div className='flex flex-col justify-center items-center hover:cursor-pointer border shadow'
                            key={index}>
                    <span>{user.id}</span>
                    <span>{`USERNAME: ${user.username}`}</span>
                    <span>{`EMAIL: ${user.email}`}</span>
                    <span>{`CITY: ${user.address.city}`}</span>
                    <span>{`FISTNAME: ${user.name.firstname}`}</span>
                    <span>{`LASTNAME: ${user.name.lastname}`}</span>
                </div>
            })}
        </div>
    </>)
}

export default HomeComponent;
