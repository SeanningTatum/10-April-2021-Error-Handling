import React, { Dispatch, useReducer } from 'react';

const initialState: DialogInitialState = {
  show: false,
  message: '',
  type: '',
};

const DialogContext = React.createContext<
  | {
      state: DialogInitialState;
      dispatch: Dispatch<Action>;
    }
  | undefined
>(undefined);

const reducer = (
  state: typeof initialState,
  action: Action,
): DialogInitialState => {
  switch (action.type) {
    case 'show':
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        show: true,
      };

    case 'hide':
      return {
        ...initialState,
      };

    default:
      return { ...state };
  }
};

function DialogProvider(props: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DialogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DialogContext.Provider>
  );
}

function useDialogContext() {
  const context = React.useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }

  return context;
}

export { useDialogContext, DialogProvider };

type DialogType = 'SUCCESS' | 'ERROR' | '';

type DialogInitialState = {
  show: boolean;
  message: string;
  type: DialogType;
};

type Props = {
  children: React.ReactNode;
};

type Action =
  | {
      type: 'show';
      payload: {
        message: string;
        type: DialogType;
      };
    }
  | {
      type: 'hide';
    };
