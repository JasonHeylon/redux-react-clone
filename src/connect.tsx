import React from "react";
import { bindActionCreators } from "redux";

import { context } from "./context";

interface IStore {
  [key: string]: any;
}

const getActionDispatchProps = (
  mapDispatchToProps: Function,
  dispatch: any
): any => {
  const dispatchProps = {};
  Object.keys(mapDispatchToProps).forEach(key => {
    dispatchProps[key] = bindActionCreators(mapDispatchToProps[key], dispatch);
  });

  return dispatchProps;
};

export default function connect<T>(InnerComponent: any): Function {
  return (
    mapStateToProps: Function,
    mapDispatchToProps?: Function
  ): Function => {
    class ConnectedComponent extends React.Component {
      renderInner = ({ storeState, __dispatch }: IStore): JSX.Element => {
        let dispatchProps = {};
        if (mapDispatchToProps) {
          dispatchProps = getActionDispatchProps(
            mapDispatchToProps,
            __dispatch
          );
        }

        const props = {
          ...mapStateToProps(storeState || {}, this.props),
          ...dispatchProps
        } as T;

        return <InnerComponent {...props} />;
      };

      render(): JSX.Element {
        const { Consumer } = context;

        return <Consumer>{this.renderInner}</Consumer>;
      }
    }

    return ConnectedComponent;
  };
}
