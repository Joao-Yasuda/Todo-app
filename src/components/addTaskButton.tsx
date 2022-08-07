import React from 'react';
import { Button, IButtonProps } from 'native-base';

type Props = IButtonProps

export function AddTaskButton({...rest}:Props) {
  return (
    <Button variant='outlined' w='15%'  borderWidth='2' borderRadius='full' borderColor='muted.300' _text={{
        color: 'muted.300',
        fontSize:'lg'
      }    }{...rest}  
>
+
</Button> 
  );
}