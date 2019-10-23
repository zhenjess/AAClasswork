import React from "react";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    }
  }
  

  render () {
    const pane = this.props.panes[this.state.tabIndex];
    return (
      <div>
        <h1>Tabs</h1>
        <div>
          {pane.title}
          {pane.content}
        </div>
      </div>
    )
  }
}

export default Tab;