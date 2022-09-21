# App de Citas de Pacientes

## Descripción

Aplicación de registro de citas de pacientes de una veterinaria.

Proyecto en el que se aprenden los conceptos básicos de React (components, props and states, basic hooks: useState and useEffect) junto con el framework Tailwind CSS. Tambien se utilizan los eventos `onChange`.

Ademas de lo anterior, se utiliza la carga condicional de texto y componentes.

## Acceso a la App

Link: https://vetcites.netlify.app/

## Anotaciones

- Hooks: permiten crear y modificar los states de la aplicación. Estos se dividen en basicos y adicionales. Estos se colocan en la parte superior de los componentes.

  - Básicos:
    - `useState`
    - `useEffect`
    - `useContext`
  - Adicionales:
    - `useReducer`
    - `useCallback`
    - `useMemo`
    - `useRef`
    - `useImperativoHandle`
    - `useLayoutEffect`
    - `useDebugValue`

- State: Variable que contiene los datos de informacion relevante que describe en que situación  se encuentra la aplicación. Es creado mediante  la funcion `useState` el cual recibe el estado inicial de la aplicación y devuelve la variable que representa el estado y una funcion que modifica el mismo.

- Props: forma de pasar el state  o su modificador a un componente hijo, reutilizando y evitando duplicar código.
