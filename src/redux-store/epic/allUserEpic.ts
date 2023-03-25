import { catchError, from, map, mergeMap, of } from "rxjs";
import { ofType } from "redux-observable";
import FakeBackendService from "../../service/FakeBackendService";
import {
    getAllUserFailedAction,
    getAllUserRequestAction,
    getAllUserSuccessAction,
} from "../reducer/allUserSlice.ts";

export const allUserRequestEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(getAllUserRequestAction),
        mergeMap((action: any) =>
        from(
            FakeBackendService.getAllUser()
        ).pipe(
            map((response: any) => {
                if (response.data) {
                    return getAllUserSuccessAction(response.data);
                } else {
                    throw response;
                }
            }),
            catchError((err) => {
                let result = {
                    message: err
                }
                return of(getAllUserFailedAction(result));
            })
        ))
    );
};
