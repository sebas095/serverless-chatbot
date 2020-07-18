import React from "react";

import MainLayout from "./components/layouts/MainLayout";
import Chat from "./components/chat/Chat.jsx";

import "./App.css";

const App = () => (
  <div className="App">
    <MainLayout>
      <Chat />
    </MainLayout>
  </div>
);

export default App;
