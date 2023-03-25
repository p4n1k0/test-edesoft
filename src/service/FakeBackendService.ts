import api from "../api";
import { ApiConstants } from "../utils/ApiConstants";

export default class FakeBackendService {
    static getAllUser = () => {
        return api.get(ApiConstants.allUsers)
    }
    static getCountryList = () => {
        let responseData = {
            'data': {
                'result': [{
                    'name': 'Canada',
                    'description': 'Dominion of Canada',
                    'name_en': 'Canada',
                    'nationality': 'Canadian'
                }, {
                    'name': 'USA',
                    'description': 'United States of America',
                    'name_en': 'USA',
                    'nationality': 'American'
                }], 'isSuccessful': true, 'isResult': true, 'errorMessages': []
            }
        };
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 0, responseData);
        }).catch(err => {
            throw new Error(err);
        });
    };    
}
