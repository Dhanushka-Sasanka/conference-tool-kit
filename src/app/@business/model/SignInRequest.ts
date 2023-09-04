export class SignInRequest {
  'name': string;
  'username': string;
  'password': string;
  'email': string;
  'trackID': string;
  'roles': [
    {
      'id': number
      'name': string;
    }
  ];

  constructor() {
  }

}
