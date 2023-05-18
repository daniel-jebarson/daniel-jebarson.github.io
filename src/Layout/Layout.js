import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex flex-row">{this.props.children}</div>
      </React.Fragment>
    );
  }
}
export default Layout;
