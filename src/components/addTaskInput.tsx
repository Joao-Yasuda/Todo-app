import React from 'react';
import {HStack, Input, Button,IInputProps } from "native-base";

type Props = IInputProps


export function AddTaskInput({...rest}: Props) {
  
  return (

          <Input borderWidth='2' w='80%' variant='rounded' placeholder="Write your task" placeholderTextColor='muted.300'
          {...rest}
          ></Input>
  );
}