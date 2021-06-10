import React from 'react';
import { Button } from '@chakra-ui/core';
import { action, actions} from '@storybook/addon-actions';

export default{
    title:'Chakra/Button',
    component:Button
}


export const Success = () => <Button onClick={action('Click handler')} variantColor='green'> Sucess </Button>
export const Danger = () => <Button {...actions('onClick','onMouseOver')} variantColor='red'> Danger </Button>
export const Log = () => <Button onClick={()=>console.log('Button clicked')} variantColor='blue'> Log </Button>
