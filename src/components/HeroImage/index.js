import React from 'react';

//Styles
import {Wrapper, Content, Text} from './HeroImage.styles'

export const HeroImage = ({title, image, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
)