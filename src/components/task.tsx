import React from 'react';
import {Box, Text, HStack } from "native-base";


export function Task(this: any, props:any, onChange:any) {
  return (
    <HStack justifyContent='flex-start' borderRadius='sm' bg='#f2f2f2' shadow='9' px='3' py='2' space='7'>
            <Box w='5' bg='red.500' borderRadius='sm'/>
            <Text textAlign='center'>{props.text}</Text>
    </HStack>
  );
}