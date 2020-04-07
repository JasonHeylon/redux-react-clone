import React from "react";
import { context } from "./context";

interface IProviderProps {
  store: {
    dispatch: (action: any) => void;
    getState: () => any;
    subscribe: (listener: Function) => Function;
  };
}
interface IProviderState {
  storeState: any;
  __dispatch: Function;
}

export default class Provider extends React.Component<
  IProviderProps,
  IProviderState
> {
  unsubscribe: Function | null = null;

  constructor(props: IProviderProps) {
    super(props);
    const { store } = this.props;

    this.state = {
      storeState: store.getState(),
      __dispatch: store.dispatch
    };

    this.unsubscribe = store.subscribe(this.handleStoreUpdate);
  }

  handleStoreUpdate = (): void => {
    const { store } = this.props;

    this.setState({ storeState: store.getState() });
  };

  componentWillUnmount(): void {
    this.unsubscribe && this.unsubscribe();
  }

  render(): JSX.Element {
    const { Provider } = context;
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
