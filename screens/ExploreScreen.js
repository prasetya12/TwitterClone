import React,{Component} from 'react'
import {Image} from 'react-native'

import { Container, Content, Left,Header, Body, Text, StyleProvider, Item, Icon, Input, Right, FooterTab, Button, List, ListItem} from 'native-base'

import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'
import { Actions } from 'react-native-router-flux';
class ExploreScreen extends Component{
    render(){
        const uri = 'https://i.dailymail.co.uk/i/pix/2015/03/30/04/271843AB00000578-0-image-a-86_1427687469357.jpg';
        return(
            <StyleProvider style={getTheme(platform)}>
            <Container>
                <Header transparent>
                    <Left style={{flex:1}}>
                        <Image source={{uri:uri}} style={{width:30,height:30,borderRadius:150/2,marginLeft:5}}/>
                    </Left>
                    <Body searchBar style={{backgroundColor:'#f4f4f4f4',flex:7,borderRadius:150/8}}>
                    <Item>
                        <Input placeholder="Search Twitter" style={{paddingLeft:20}}/>
                    </Item>
                        
                    </Body>
                   <Right style={{flex:1}}>
                       <Icon name="md-person-add" style={{color:'#03a9f4'}}/>
                   </Right>
                </Header>
                <Header >
                    <Body>
                        <FooterTab>
                            <Button onPress={()=>{Actions.main();}}>
                                <Icon name="md-home" style={{color:'grey'}}/>
                            </Button>
                            <Button>
                                <Icon name="md-search" style={{color:'#03a9f4'}}/>
                            </Button>
                            <Button>
                                <Icon name="md-notifications" style={{color:'grey'}}/>
                            </Button>
                            <Button>
                                <Icon name="md-mail" style={{color:'grey'}}/>
                            </Button>
                        </FooterTab>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Body>
                                <Text style={{fontWeight:"bold",fontSize:20}}>Trends for You</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left style={{flex:1}}>
                                <Text>1</Text>
                            </Left>
                            <Body style={{flex:9}}>
                                <Text>#PersijaDay</Text>
                                <Text note>9,900 Tweets</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left style={{flex:1}}>
                                <Text>2</Text>
                            </Left>
                            <Body style={{flex:9}}>
                                <Text>#pkbjabarfest</Text>
                                <Text note>1,349 Tweets</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={{flex:1}}>3</Text>
                            </Left>
                            <Body style={{flex:9}}>
                                <Text>#BaliUnitedDay</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left style={{flex:1}}>
                                <Text>4</Text>
                            </Left>
                            <Body style={{flex:9}}>
                                <Text>#DestinasiDigitalGenpi</Text>
                                <Text note>4,195 Tweets</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left style={{flex:1}}>
                                <Text>5</Text>
                            </Left>
                            <Body style={{flex:9}}>
                                <Text>#listrikuntukbantarjati</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Text style={{color:'#03a9f4'}}>Show more</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
            </StyleProvider>
        );
    }
}

export default ExploreScreen