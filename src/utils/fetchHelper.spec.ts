import postData from './fetchHelper';

const mockResponse = {
  "data": {
      "provider": "sendgrid",
      "to": [
          "damonmaozewu@gmail.com",
          "damon.wu@test.com.au"
      ],
      "cc": [
          "damon.test@gmail.com"
      ],
      "bcc": [
          "1h0f1.aus@gmail.com"
      ],
      "subject": "Damon trial for sendgrid api integration",
      "body": "Some new html contents by 25 April 2021 ..."
  }
};

describe('test fetch functionality', () => {
  it('test fetch helper with proper header options', () => {
    // Arrange
    const requestBody = {
      "to": ["damonmaozewu@gmail.com", "damon.wu@test.com.au"],
      "cc": ["damon.test@gmail.com"],
      "bcc": ["1h0f1.aus@gmail.com"],
      "from": "damon.test@gmail.com",
      "subject": "Damon trial for sendgrid api integration",
      "provider": "sendgrid",
      "html": "Some new html contents by 25 April 2021 ..."
    };

    const fakeFetch = jest.fn();
    window.fetch = fakeFetch;

    // Act
    postData('localhost', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: requestBody });
    const requestOptions = ['method', 'headers', 'body'];

    // Assert
    requestOptions.map((option: string) => {
      expect(fakeFetch.mock.calls[0][1]).toHaveProperty(option);
      return true;
    });
  });

  it('test fetchHelper with mock response', async () => {
    // Arrange
    const mockSuccessResponse = mockResponse;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    const globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    // Act
    const result = await globalRef.fetch();
    const resultJSON = await result.json();

    // Assert
    expect(resultJSON.data.provider).toEqual('sendgrid');
  });
});

export {};
