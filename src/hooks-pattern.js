import React, { useState, useEffect } from 'react';

export const useFriendStatus = ({ callerName }) => {
  const [count, setCount] = useState(0);
  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      setCount(1);
      console.log(callerName);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return count;
};

export const FriendStatus = () => {
  const isOnline = useFriendStatus({ callerName: 'FriendStatus' });
  return isOnline ? 'Online' : 'Offline';
};

export const FriendList = () => {
  const isOnline = useFriendStatus({ callerName: 'FriendList' });
  return isOnline ? 'Green' : 'Red';
};
