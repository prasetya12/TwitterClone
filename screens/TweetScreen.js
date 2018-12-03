import React, { Component } from 'react'
import { Header, Content, Button, Footer, Left, Icon, Container, StyleProvider, Body, Text, ListItem, Thumbnail, View, FooterTab } from 'native-base'

import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'
import { Actions } from 'react-native-router-flux';

class TweetScreen extends Component {
    render() {
        const uri = 'https://i.dailymail.co.uk/i/pix/2015/03/30/04/271843AB00000578-0-image-a-86_1427687469357.jpg';
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Header transparent>
                        <Left style={{ flex: 1 }}>
                            <Icon name="arrow-back" style={{ color: '#03a9f4' }} onPress={()=>{Actions.pop()}} />
                        </Left>
                        <Body style={{ flex: 8 }}>
                            <Text>Tweet</Text>
                        </Body>
                    </Header>

                    <Content style={{ backgroundColor: "white" }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            padding: 10,
                            paddingBottom: 0
                        }}>
                            <Thumbnail source={{ uri: uri }} />
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    paddingLeft: 10,
                                    height: 56
                                }}
                            >
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                                    Samuel
              </Text>

                                <Text style={{ color: "#999", fontSize: 18 }}>
                                    @samuel_samuel
              </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 22, padding: 10 }}>
                                Hello World
            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            padding: 10,
                            borderBottomColor: "#CCC",
                        }}>
                            <Text style={{ color: "#888", fontSize: 16 }}>
                                4:06 PM - 02 Dec 2018
            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            borderBottomColor: "#CCC",
                        }}>
                            <View>
                                <Button
                                    transparent
                                    dark
                                    style={{ paddingBottom: 0, paddingTop: 0 }}
                                >
                                    <Icon name="md-chatbubbles" />
                                </Button>
                            </View>
                            <View>
                                <Button transparent dark>
                                    <Icon name="md-repeat" />
                                </Button>
                            </View>
                            <View>
                                <Button transparent dark>
                                    <Icon name="heart" />
                                </Button>
                            </View>
                            <View>
                                <Button transparent dark>
                                    <Icon name="md-share" />
                                </Button>
                            </View>
                        </View>
                    </Content>
                    <Footer>

                    </Footer>
                </Container>
            </StyleProvider>
        );
    }
}
export default TweetScreen