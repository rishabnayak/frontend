//AttendancePrompt.js
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from 'action_creators/UserActions';
import TravelForm from 'smart_components/TravelForm';

class AttendancePrompt extends React.Component {
  
  constructor(props) {
    super(props);
    this.confirmAttendance = this.confirmAttendance.bind(this);
    this.cancelAttendance = this.cancelAttendance.bind(this);
    this.reflectPrompt = this.reflectPrompt.bind(this);
    this.travelReimbursementEstimate = this.travelReimbursementEstimate.bind(this);
  }

  confirmAttendance = (e) => {
    e.preventDefault();
    this.props.confirmAttendance(this.props.userManager);
  }

  cancelAttendance = (e) => {
    e.preventDefault();
    this.props.cancelAttendance(this.props.userManager);
  }

  renderCheckedIn = () => (
    <div>
      <h1 className="blue my-3">{'Welcome to HackRU!'}</h1>
      <h6 className="blue">{'In case of an emergency, call RUPD: 732-932-7211'}</h6>
    </div>
  )

  travelReimbursementEstimate = () => {
    if(this.props.userManager.userInfo.travelling_from && 
      this.props.userManager.userInfo.travelling_from.estimate && 
      this.props.userManager.userInfo.travelling_from.estimate > 0) {
      return (
        <h5 className="blue">
          {'We can offer you up to'}
          <strong>
            {' $' + this.props.userManager.userInfo.travelling_from.estimate}
          </strong>
          {' in reimbursement. In order to receive this, you have to'}
          <strong>
            {' show us all your receipts'}
          </strong> 
          {' and'}
          <strong>
            {' submit to our Devpost on Sunday morning'}
          </strong>
          {'.'}
        </h5>
      );
    } else {
      return (
        <h5 className="blue">
          {'Unfortunately, we cannot offer you any travel reimbursement.'}
        </h5>
      );
    }
  }

  renderAttendance = () => (
    <Fragment> 
      <button className="btn btn-primary UC custom-btn p-3 my-1 mx-md-1"
        onClick={this.confirmAttendance}
        type="button"
        disabled={this.props.userManager.userInfo.registration_status === 'coming'}
      >
        <h6 className="my-0">{'Attending'}</h6>
      </button>
      <button className="btn btn-primary UC custom-btn p-3 my-1"
        onClick={this.cancelAttendance}
        type="button"
        disabled={this.props.userManager.userInfo.registration_status === 'not-coming'}
      >
        <h6 className="my-0">{'Not Attending'}</h6>
      </button>
      {this.travelReimbursementEstimate()}
    </Fragment>
  )


  //so janky
  reflectPrompt = (userStatus) => {
    if(userStatus === 'Checked in!') {
      //no menu if checked in
      return this.renderCheckedIn();
    } else if (userStatus === 'Accepted! Please RSVP' || userStatus === 'Planning to attend' || userStatus === 'Not planning to attend') {
      //allow menu for the three states which allow users to change attendance status
      return userStatus === 'Loading  your info...' ? '' : this.renderAttendance();
    } else {
      //show nothing otherwise
      return userStatus === 'Loading your info...' ? '': <TravelForm />;
    }
  }

  render = () => (
    <div>
      <div className="form-group text-center row">
        <label className="col-12 col-form-label mt-2">
          <h4 className="text-lg p-xs-2 p-md-3 badge badge-purple">
            {this.props.userManager.upperFlash}
          </h4>
        </label>
      </div>
      { this.reflectPrompt(this.props.userStatus) }
    </div>
  )
}

AttendancePrompt.propTypes = {
  userStatus: PropTypes.string,
  userManager: PropTypes.shape({
    upperFlash: PropTypes.string
  }).isRequired,
  confirmAttendance: PropTypes.func.isRequired,
  cancelAttendance: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    userManager: state.userManager
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    confirmAttendance: userActions.confirmAttendance,
    cancelAttendance: userActions.cancelAttendance
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (AttendancePrompt);