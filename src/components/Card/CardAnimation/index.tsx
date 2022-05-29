import React, { useEffect } from 'react';
import { useWindowDimensions, ViewProps } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { AnimationContainer } from './styles';

interface CardAnimationProps extends ViewProps {
  children: React.ReactNode;
}

export function CardAnimation({ children, ...rest }: CardAnimationProps) {
  const { width: displayWidth } = useWindowDimensions();
  const cardOpacity = useSharedValue(0);
  const cardOffset = useSharedValue(0.25 * displayWidth);

  //   Mas o que significa aquele valor que foi iniciado no useSharedValue de`0.25 * displayWidth` ? 
  // ✅Esse é um valor equivalente a 25 % da largura da tela.Suponhamos que a largura da tela seja 
  //   de`750px`, então o `cardOffset.value` fará com que o componente seja renderizado inicialmente 
  //   a `187.5px` sobressaindo à direita da tela(já que você definiu isso no retorno do `useAnimatedStyle`.
  //   O que o useEffect feito abaixo definindo para 0 o cardOffset irá fazer é que esse valor seja `0` 
  //   durante a renderização do componente, fazendo uma animação da direita até o centro da tela

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // TODO - setup animated style
      opacity: withTiming(cardOpacity.value),
      transform: [
        {
          translateX: withTiming(cardOffset.value)
        }
      ]
    }
  })

  useEffect(() => {
    /**
     * TODO - setup cardOpacity.value and cardOffset.value with
     * withTiming()
     */
    cardOpacity.value = withTiming(1, {
      duration: 1000
    })

    cardOffset.value = withTiming(0, {
      // O que o useEffect feito abaixo definindo para 0 o cardOffset irá fazer é que esse valor seja `0` 
      // durante a renderização do componente, fazendo uma animação da direita até o centro da tela
      duration: 1000
    });
  }, [])

  return (
    <AnimationContainer {...rest} style={animatedStyle}>
      {children}
    </AnimationContainer>
  )
}