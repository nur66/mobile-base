import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    Page,Title, PageTitle
} from '../components/styles'

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/mawar.jpg')} />
                <PageTitle>Flower Rose</PageTitle>
            </InnerContainer>
        </StyledContainer>
    )
}

export default Login;
