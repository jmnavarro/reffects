import registerStateCoeffect from './state';
import { store as storeModule } from 'reffects-store';
import { destroyAllMocks } from '../../test-helpers/fixtures';
import { callsTo } from '../../test-helpers/mockHelpers';
import { clearHandlers, coeffect, getCoeffectHandler } from 'reffects';

describe('state coeffect', () => {
  expect(storeModule.getState).toBeDefined();

  afterEach(() => {
    clearHandlers();
    destroyAllMocks();
  });

  test('should extract the expected values from the store', () => {
    const state = {
      todos: [{ id: '123', text: 'saludos', isDone: true }],
      toast: { id: 'pepe' },
    };
    const pathToTodos = 'todos';
    const pathToToastId = 'toast.id';
    const coeffectDescription = coeffect('state', {
      todosRenamed: 'todos',
      toastId: 'toast.id',
    });
    const store = {};
    store.getState = jest
      .fn()
      .mockReturnValueOnce(state.todos)
      .mockReturnValueOnce(state.toast.id);
    registerStateCoeffect(store);
    const stateHandler = getCoeffectHandler(coeffectDescription.id);

    expect(stateHandler(coeffectDescription.data)).toEqual({
      [coeffectDescription.id]: {
        todosRenamed: state.todos,
        toastId: state.toast.id,
      },
    });
    expect(store.getState).toHaveBeenCalledTimes(2);
    expect(callsTo(store.getState)).toEqual([[pathToTodos], [pathToToastId]]);
  });
});
