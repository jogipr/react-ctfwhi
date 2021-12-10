import React, { Component } from 'react';

export const FriendStatus = ({ isOnline }) => {
  return isOnline ? 'Online' : 'Offline';
};

export const FriendList = ({ isOnline }) => {
  return isOnline ? 'Green' : 'Red';
};

export const withFriendStatus = (WrapComponent) => {
  return class FriendStatus extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.handleCount(1);
      }, 5000);
    }

    handleCount = (count) => {
      this.setState({ count });
    };

    render() {
      const { count } = this.state;
      return <WrapComponent {...this.props} isOnline={count} />;
    }
  };
};

export const HFriendStatus = withFriendStatus(FriendStatus);
export const HFriendList = withFriendStatus(FriendList);
