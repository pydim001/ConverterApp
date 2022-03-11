import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Navigator from "./routes/AppStack";

export default function App() {
  return (
    <Navigator headerMode={false} />
  )
}

const styles = StyleSheet.create({

})