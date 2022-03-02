import { Api } from './utils/api';

describe('Given that we have a healthy service', () => {
  describe('Healtcheck', () => {
    test('Healthcheck route should return positively', (done) => {
      Api.get('/healthcheck')
        .expect(200, done);
    });
  });

  describe('Security', () => {
    test('Should intercept reflected xss attacks', (done) => {
      // Add a get route with a path parameter that may be vulnerable
      Api.get('/some-path?query=5f71591cbfd15b0007481261n8lsr%3cscript%3ealert(1)%3c%2fscript%3emvfsn')
        .expect(406, done);
    });

    test('Should intercept reflected xss attacks', (done) => {
      // Add a get route with a path parameter that may be vulnerable
      Api.get('/some-path?query=5f71591cbfd15b0007481261n8lsr%3cscript%3ealert(1)%3c%2fscript%3emvfsn')
        .expect(406, done);
    });
  });
});
