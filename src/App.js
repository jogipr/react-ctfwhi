import React, { Component, useState, useEffect } from 'react';
import { FriendStatus, FriendList } from './hooks-pattern';
import { HFriendStatus, HFriendList } from './hoc-pattern';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <FriendStatus />
      <br />
      <FriendList />
      <br />
      <h3>HOC pattern</h3>
      <HFriendStatus />
      <br />
      <HFriendList />
    </div>
  );
}
