import {Text, TouchableOpacity} from 'react-native';
import {PropsWithChildren} from 'react';
import {TouchableOpacityProps} from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

type ButtonProps = {} & TouchableOpacityProps;

const Button = ({children, style}: PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgb(159 121 255)',
        padding: 15,
        borderRadius: 50,
        ...style,
      }}>
      <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
