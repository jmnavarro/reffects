# Effects and Coeffects
## Effects.
They **describe your program’s side-effects**, (*what your program does to the world*).

## Coeffects.
They  **track your program’s side-causes**, (*what your program requires from the world*).

## Declarative Effects pattern
* **Event handlers are pure functions**.
*  They **receive coeffects** and **return effects**.
*  Something else (a language run-time, a framework, etc.) is in charge of **injecting the values that the coeffects track** and **interpreting the effects data to actually perform the side-effects they describe**.
* That something else would be **reffects** in our case.

## Related documents

* [Built-in Effects in reffects](https://github.com/mariosanchez/spike-todo-declarative-effects/blob/master/docs/reffects/built-in-effects.md)
* [Registering custom effect handlers](https://github.com/mariosanchez/spike-todo-declarative-effects/blob/master/docs/reffects/custom_effects.md)
* [Registering custom coeffect handlers](https://github.com/mariosanchez/spike-todo-declarative-effects/blob/master/docs/reffects/custom_coeffects.md)
