import React from 'react';

import ErrorModal from './ErrorModal';
import { useDialogContext } from '~/store/DialogStore';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { state, dispatch } = useDialogContext();

  return (
    <div>
      {props.children}

      {state.show && <ErrorModal />}
    </div>
  );
}

export default Layout;
