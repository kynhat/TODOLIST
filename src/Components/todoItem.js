import React, { Component } from "react";

class TodoItems extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
    };
    this.deleteitem = this.deleteitem.bind(this);
    this.filterToDos = this.filterToDos.bind(this);
  }
  deleteitem(id) {
    const { deleteItem } = this.props;
    console.log("tesst id----------", id);
    if (deleteItem) {
      deleteItem(id);
    }
  }
  changestatus(e) {
    var newColor = (this.state.color = "" ? "#fcaa9c" : "");
    this.setState({ color: newColor });
  }

  filterToDos(filterCriteria) {
    console.log("filterCriteria", this.props.post);
  }

  checkfilter(param) {
    const { entries, completed, uncompleted } = this.props;
    switch (param) {
      case "all":
        return (
          <div>
            <div>
              {entries.map((item, key) => {
                return (
                  <div className="col" style={{ marginLeft: 150 }}>
                    <h3
                      key={item.key}
                      style={{
                        backgroundColor: this.state.color,
                        width: 200,
                        color: "white",
                        height: 60,
                        padding: 2,
                        paddingLeft: 20,
                      }}
                    >
                      <div className="row">
                        <h3
                          style={{
                            backgroundColor: "white",
                            color: "rgb(88, 87, 87)",
                          }}
                          className="check-btn"
                        >
                          {item.text}
                        </h3>
                        <h3>
                          <button
                            className="check-btn"
                            onClick={this.changestatus.bind(this)}
                          >
                            <i class="fas fa-check"></i>
                          </button>
                          <button
                            className="trash-btn"
                            onClick={this.deleteitem.bind(this, item.key)}
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </h3>
                      </div>
                    </h3>
                  </div>
                );
              })}
            </div>
            <div>
              {completed.map((item, key) => {
                return (
                  <div className="col" style={{ marginLeft: 150 }}>
                    <h3
                      key={item.key}
                      style={{
                        backgroundColor: this.state.color,
                        width: 200,
                        color: "white",
                        height: 60,
                        padding: 2,
                        paddingLeft: 20,
                      }}
                    >
                      <div className="row">
                        <h3
                          style={{
                            backgroundColor: "white",
                            color: "rgb(88, 87, 87)",
                          }}
                          className="check-btn"
                        >
                          {item.text}
                        </h3>
                        <h3>
                          <button
                            className="check-btn"
                            onClick={this.changestatus.bind(this)}
                          >
                            <i class="fas fa-check"></i>
                          </button>
                          <button
                            className="trash-btn"
                            onClick={this.deleteitem.bind(this, item.key)}
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </h3>
                      </div>
                    </h3>
                  </div>
                );
              })}
            </div>
            <div>
              {uncompleted.map((item, key) => {
                return (
                  <div className="col" style={{ marginLeft: 150 }}>
                    <h3
                      key={item.key}
                      style={{
                        backgroundColor: this.state.color,
                        width: 200,
                        color: "white",
                        height: 60,
                        padding: 2,
                        paddingLeft: 20,
                      }}
                    >
                      <div className="row">
                        <h3
                          style={{
                            backgroundColor: "white",
                            color: "rgb(88, 87, 87)",
                          }}
                          className="check-btn"
                        >
                          {item.text}
                        </h3>
                        <h3>
                          <button
                            className="check-btn"
                            onClick={this.changestatus.bind(this)}
                          >
                            <i class="fas fa-check"></i>
                          </button>
                          <button
                            className="trash-btn"
                            onClick={this.deleteitem.bind(this, item.key)}
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </h3>
                      </div>
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        );
        break;
      case "completed":
        return (
          <div>
            {completed.map((item, key) => {
              return (
                <div className="col" style={{ marginLeft: 150 }}>
                  <h3
                    key={item.key}
                    style={{
                      backgroundColor: this.state.color,
                      width: 200,
                      color: "white",
                      height: 60,
                      padding: 2,
                      paddingLeft: 20,
                    }}
                  >
                    <div className="row">
                      <h3
                        style={{
                          backgroundColor: "white",
                          color: "rgb(88, 87, 87)",
                        }}
                        className="check-btn"
                      >
                        {item.text}
                      </h3>
                      <h3>
                        <button
                          className="check-btn"
                          onClick={this.changestatus.bind(this)}
                        >
                          <i class="fas fa-check"></i>
                        </button>
                        <button
                          className="trash-btn"
                          onClick={this.deleteitem.bind(this, item.key)}
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </h3>
                    </div>
                  </h3>
                </div>
              );
            })}
          </div>
        );
        break;
      case "uncompleted":
        return (
          <div>
            {uncompleted.map((item, key) => {
              return (
                <div className="col" style={{ marginLeft: 150 }}>
                  <h3
                    key={item.key}
                    style={{
                      backgroundColor: this.state.color,
                      width: 200,
                      color: "white",
                      height: 60,
                      padding: 2,
                      paddingLeft: 20,
                    }}
                  >
                    <div className="row">
                      <h3
                        style={{
                          backgroundColor: "white",
                          color: "rgb(88, 87, 87)",
                        }}
                        className="check-btn"
                      >
                        {item.text}
                      </h3>
                      <h3>
                        <button
                          className="check-btn"
                          onClick={this.changestatus.bind(this)}
                        >
                          <i class="fas fa-check"></i>
                        </button>
                        <button
                          className="trash-btn"
                          onClick={this.deleteitem.bind(this, item.key)}
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </h3>
                    </div>
                  </h3>
                </div>
              );
            })}
          </div>
        );
        break;
      default:
        return "i dont no";
    }
  }
  render() {
    return <div>{this.checkfilter(this.props.post)}</div>;
  }
}
export default TodoItems;
