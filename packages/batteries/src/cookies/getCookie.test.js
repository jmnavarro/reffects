import { clearHandlers, getCoeffectHandler, coeffect } from 'reffects';
import registerGetCookieCoeffect from './getCookie';

afterEach(() => {
  clearHandlers();
  jest.clearAllMocks();
});

describe('get cookie coeffect', () => {
  test('should extract keys from cookies', () => {
    const fakeKey = 'fakeCookieKey';
    const fakeValue = 'fakeCookieValue';
    const coeffectDescription = coeffect('cookie', fakeKey);
    const cookiesClient = { get: jest.fn() };
    cookiesClient.get.mockReturnValue(fakeValue);
    registerGetCookieCoeffect(cookiesClient);
    const coeffectHandler = getCoeffectHandler(coeffectDescription.id);

    expect(coeffectHandler(coeffectDescription.data)).toEqual({
      [coeffectDescription.id]: {
        [fakeKey]: fakeValue,
      },
    });
  });

  test("should return undefined when a key doesn't exists", () => {
    const fakeKey = 'fakeCookieKey';
    const fakeValue = undefined;
    const coeffectDescription = coeffect('cookie', fakeKey);
    const cookiesClient = { get: jest.fn() };
    cookiesClient.get.mockReturnValue(fakeValue);
    registerGetCookieCoeffect(cookiesClient);
    const coeffectHandler = getCoeffectHandler(coeffectDescription.id);

    expect(coeffectHandler(coeffectDescription.data)).toEqual({
      [coeffectDescription.id]: {
        [fakeKey]: fakeValue,
      },
    });
  });
});
