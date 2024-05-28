import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { TaskItem } from "../../components/TaskItem";
import { CountNumber } from "../../components/CountNumber";
import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskContent, setTaskContent] = useState("");
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleAddTask() {
    setTasks((prevState) => [taskContent, ...prevState]);
    setTaskContent("");
  }

  function handleDeleteTask(taskContent: string) {
    setTasks((tasks) => tasks.filter((task) => task !== taskContent));
    setCompletedTasks((tasks) => tasks.filter((task) => task !== taskContent));
  }

  function handleToggleTaskComplete(taskContent: string) {
    if (completedTasks.includes(taskContent)) {
      return setCompletedTasks((tasks) =>
        tasks.filter((task) => task !== taskContent)
      );
    }
    setCompletedTasks((prevState) => [...prevState, taskContent]);
  }

  return (
    <>
      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/logo.png")} />
      </View>

      <View style={styles.container}>
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskContent}
            value={taskContent}
            maxLength={40}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taskOverview}>
          <View style={styles.taskCountContainer}>
            <Text style={styles.textCreated}>Criadas</Text>
            <CountNumber tasksNumber={tasks.length} />
          </View>

          <View style={styles.taskCountContainer}>
            <Text style={styles.textFinished}>Concluidas</Text>
            <CountNumber tasksNumber={completedTasks.length} />
          </View>
        </View>

        {tasks.map((task) => (
          <TaskItem
            key={task}
            taskContent={task}
            handleDeleteTask={handleDeleteTask}
            handleToggleTaskComplete={handleToggleTaskComplete}
            isTaskConcluded={completedTasks.includes(task)}
          />
        ))}

        {tasks.length === 0 && (
          <View style={styles.emptyContainer}>
            <Icon name="clipboard" size={50} color="gray" />
            <Text style={styles.emptyTextBold}>
              Você ainda não tem tarefas cadastradas.
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer.
            </Text>
          </View>
        )}
      </View>
    </>
  );
}
