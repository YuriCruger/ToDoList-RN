import { StyleSheet } from "react-native";

export const stylesTaskItem = StyleSheet.create({
  taskContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    height: 64,
    padding: 12,
    borderRadius: 8,
    gap: 8,
    marginBottom: 8
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4ea8de",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  taskText: {
    flex: 1,
    color: "#fff",
  },
  taskTextConcluded: {
    color: '#808080',
    textDecorationLine: "line-through",
  },
  checkboxConcluded: {
    borderWidth: 0,
    backgroundColor: '#5e60ce'
  }
});
