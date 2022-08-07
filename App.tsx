import React from "react";
import { useState } from "react";
import { NativeBaseProvider, Center, Heading, VStack, HStack} from "native-base";
import {Task} from './src/components/task'
import {AddTaskInput} from "./src/components/addTaskInput";
import {AddTaskButton} from "./src/components/addTaskButton";
import { Keyboard, TouchableOpacity } from "react-native";

export default function App() {

  const [task, setTask]:any = useState()
  const [taskItems, setTaskItems]:any = useState([])

  const taskPush = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index:any) =>{
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }


  return (
    <NativeBaseProvider>
      <Center flex={1} w='100%' h='100%' justifyContent='center' >
        <VStack space={7} bg='#f9f9f9' w='85%' h='82%'  borderRadius='sm' shadow='4' p='5' mb='7'>
          <Heading>Daily Tasks</Heading>
          {
            taskItems.map((item: any, index:any) =>{
              return (
              <TouchableOpacity onPress={()=>{
                completeTask
              }}>
                <Task key={index} text={item}/>
              </TouchableOpacity>
              )
            })
          }
        </VStack>
        <HStack w='85%' justifyContent='space-between'>
          <AddTaskInput 
          value={task}
          onChangeText={text =>{
          setTask(text)
          }}/>
          <AddTaskButton onPress={()=>{
            taskPush()
          }}/>
        </HStack>
      </Center>
    </NativeBaseProvider>
  );
}
