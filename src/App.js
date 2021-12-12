import React, { Component, useState, useEffect } from 'react';
import { FriendStatus, FriendList } from './hooks-pattern';
import { HFriendStatus, HFriendList } from './hoc-pattern';
import './style.css';

const Rotate = () => {
  return <div className="rotate-me"> 💅🏾 </div>;
};

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
      <br />
      <h3>Animation </h3>
      <Rotate />
    </div>
  );
}
