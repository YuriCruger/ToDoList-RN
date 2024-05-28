import { View, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { stylesTaskItem } from "./style";

interface TaskItemProps {
  taskContent: string;
  handleDeleteTask: (taskContent: string) => void;
  handleToggleTaskComplete: (taskContent: string) => void;
  isTaskConcluded: boolean;
}

export function TaskItem({
  taskContent,
  handleDeleteTask,
  handleToggleTaskComplete,
  isTaskConcluded,
}: TaskItemProps) {
  return (
    <View style={stylesTaskItem.taskContainer}>
      <TouchableOpacity
        style={[
          stylesTaskItem.checkbox,
          isTaskConcluded && stylesTaskItem.checkboxConcluded,
        ]}
        onPress={() => handleToggleTaskComplete(taskContent)}
      >
        {isTaskConcluded && (
          <AntDesignIcon name="check" size={10} color="white" />
        )}
      </TouchableOpacity>
      <Text
        style={[
          stylesTaskItem.taskText,
          isTaskConcluded && stylesTaskItem.taskTextConcluded,
        ]}
      >
        {taskContent}
      </Text>
      <TouchableOpacity onPress={() => handleDeleteTask(taskContent)}>
        <FontAwesomeIcon name="trash" size={18} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
