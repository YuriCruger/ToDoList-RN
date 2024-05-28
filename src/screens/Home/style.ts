import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    paddingHorizontal: 24,
  },
  text: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#262626",
    flex: 1,
    marginRight: 4,
    borderRadius: 6,
    height: 52,
    paddingHorizontal: 8,
    color: "#FFFF",
  },
  button: {
    backgroundColor: "#4ea8de",
    height: 52,
    width: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  inputBar: {
    display: "flex",
    flexDirection: "row",
    marginTop: -26,
  },
  taskOverview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 20,
  },
  taskCountContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },

  trash: {
    color: "#fff",
  },

  textCreated: {
    color: "#4ea8de",
    fontWeight: "bold",
  },
  textFinished: {
    color: "#5e60ce",
    fontWeight: "bold",
  },
  logoContainer: {
    backgroundColor: "#0d0d0d",
    height: 173,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "#808080",
  },
  emptyTextBold: {
    color: "#808080",
    fontWeight: "bold",
    marginTop: 16
  },
  emptyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 46,
    borderTopColor: "#808080",
    borderTopWidth: 1
  }
});
