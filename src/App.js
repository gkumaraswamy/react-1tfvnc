import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "./style";

// eslint-disable-next-line
class SunsetView extends React.Component {
  constructor(props) {
    super(props);
    //   this.show = this.show.bind(this)
    this.state = {
      subscriberContainer: false,
      offboard: false,
      oneboxtesting: false,
      oneboxtesting: false
    };
  }
  show(text) {
    if (text === "subscriber") {
      this.setState({ subscriberContainer: true });
      this.setState({ offboard: false });
      this.setState({ oneboxtesting: false });
    } else if (text === "offboard") {
      this.setState({ subscriberContainer: false });
      this.setState({ offboard: true });
      this.setState({ oneboxtesting: false });
    } else {
      //document.getElementById('subscriber-container').style.display = 'none'
      this.setState({ subscriberContainer: false });
      this.setState({ offboard: false });
      this.setState({ oneboxtesting: true });
    }
  }
  onApplicationSelect(e) {}
  sunsetSubscriber() {
    return (
      <div className="subscriber-container" id="subscriber-container">
        <div className="row margin-top ">
          <span className="col-md-2">Select Application: </span>
          <select className="col-md-2" onSelect={this.onApplicationSelect}>
            <option>select app here</option>
          </select>
        </div>
        <div className="row margin-top ">
          <input
            type="checkbox"
            className="col-md-1"
            name="All active hosts shutdown"
          />
          <span className="col-md-6">All active hosts shutdown?</span>
        </div>

        <div className="border margin-top ">
          <p>prestatus check : Failed</p>
          <p>Active Host List Detected! display hosts list below</p>
          <p>
            Message: Please Shutdown all the active hosts before processding
            (below button and text field will be disabled)
          </p>
        </div>

        <div className="row margin-top margin-bottom ">
          <span className="col-md-1">Ticket ID</span>
          <input type="text" className="col-md-2 margin-left" />
          <button className="col-md-2 margin-left">Submit</button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="content">
        <div className="flex-container">
          <p>
            sunset subscriber: select this if it's for application sunset, you
            will need to provide sunset ticket id
          </p>
          <p>queues off-board: subscriber stops subscribing certain queues</p>
          <p>
            one box testing: Lag buildup during oneboxtesting, select this
            option to clean up the lag due to one box testing
          </p>
        </div>
        <div className="button-group-container">
          <label>use case</label>
          <ButtonGroup className="button-group">
            <Button onClick={() => this.show("subscriber")}>
              sunset subscriber
            </Button>
            <Button onClick={() => this.show("offboard")}>
              queues off-board
            </Button>
            <Button onClick={() => this.show("oneboxtesting")}>
              one box testing
            </Button>
          </ButtonGroup>
        </div>
        {this.state.subscriberContainer && this.sunsetSubscriber()}
        {this.state.offboard && (
          <div className="box">
            <div className="appAndQueue">
              <span>Select Application: </span>
              <select>
                <option>select app here</option>
              </select>
              <span>Select Queues: </span>
              <select>
                <option>select queues here</option>
              </select>
            </div>
            <div className="">
              <input
                type="checkbox"
                name="new subscriber push completed with removal of consumption"
              />
              <span class="checboxtext">
                new subscriber push completed with removal of consumption
              </span>
            </div>
            <div className="border">
              <p>prestatus check : Failed(RED)</p>
              <p>
                Active Hosts List with Old Manifest Detected! (display the host
                list)
              </p>
            </div>
            <div className="row">
              <span className="col-md-1">Ticket ID</span>
              <input type="text" className="col-md-2" />
              <button className="col-md-2">Submit here disabled default</button>
            </div>
          </div>
        )}
        {this.state.oneboxtesting && this.sunsetSubscriber()}
      </div>
    );
  }
}
export default SunsetView;
