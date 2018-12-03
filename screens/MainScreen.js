import React,{Component} from 'react'
import {Image,View} from 'react-native'
import { Container, Header, Content, Left, Body, StyleProvider,Text, FooterTab, Button, Icon, Card, CardItem, Thumbnail,Right } from 'native-base'

import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'
import { Actions } from 'react-native-router-flux';

class MainScreen extends Component{
    uri3 ='https://i.dailymail.co.uk/i/pix/2015/03/30/04/271843AB00000578-0-image-a-86_1427687469357.jpg'
    state={
        obCard:[
            {
                thumbnail:'https://i.dailymail.co.uk/i/pix/2015/03/30/04/271843AB00000578-0-image-a-86_1427687469357.jpg',
                name:'Samuel',
                username : 'samuel_samuel',
                tweet:'Ini Tweet'},
            {
                thumbnail:'https://i.dailymail.co.uk/i/pix/2015/03/30/04/271843AB00000578-0-image-a-86_1427687469357.jpg',
                name:'Samuel',
                username : 'samuel_samuel',
                tweet:'Hello World'},
            {
                thumbnail:'https://i.dailymail.co.uk/i/pix/2015/03/30/04/271843AB00000578-0-image-a-86_1427687469357.jpg',
                name:'Samuel',
                username : 'samuel_samuel',
                tweet:'Start Coding Today'},
            {
                thumbnail:'https://i.dailymail.co.uk/i/pix/2015/03/30/04/271843AB00000578-0-image-a-86_1427687469357.jpg',
                name:'Samuel',
                username : 'samuel_samuel',
                tweet:'Everything has changed'}]
}


    render(){
        
        return(
            <StyleProvider style={getTheme(platform)}>
            <Container>
                    <Header transparent>
                        <Left style={{flex:2}}>
                            <Image style={{width:30,height:30,borderRadius:150/2,marginLeft:5}} source={{uri:this.uri3}}/>
                        </Left>
                        <Body style={{flex:8}}>
                            <Text style={{fontSize:20}}>Home</Text>
                        </Body>
                        <Right style={{flex:5}}> 
                                <Button onPress={()=>{Actions.tweet();}}>
                                    <Text>next</Text>
                                </Button>

                        </Right>
                    </Header>
                    <Header>
                        <Body>
                        <FooterTab>
                                    <Button>
                                        <Icon name="md-home" style={{color:'#03a9f4'}}/>
                                    </Button>
                                    <Button onPress={()=>{Actions.explore();}}>
                                        <Icon name="md-search" style={{color:'grey'}}/>
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
                                <View>
                                    {
                                        this.state.obCard.map((item,key)=>(
                                            <Card key={key}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={{uri:item.thumbnail}} style={{width:40,height:40,borderRadius:150/2,marginLeft:5}}/>
                                            <Body>
                                                <Text style={{fontWeight:"bold",color:'black'}}>{item.name}</Text>
                                                <Text style={{color:'grey'}}>{"@" + item.username}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem>
                                        <Text>{item.tweet}</Text>
                                    </CardItem>
                                    <CardItem>
                                        
                                        <FooterTab >
                                            <Button>
                                                <Icon name="md-chatbubbles" style={{color:'grey'}}/>
                                                <Text style={{color:'grey'}}>2</Text>
                                            </Button>
                                            <Button>
                                                <Icon name="md-repeat" style={{color:'grey'}}/>
                                                <Text style={{color:'grey'}}>100</Text>
                                            </Button>
                                            <Button>
                                                <Icon name="heart" style={{color:'grey'}}/>
                                                <Text style={{color:'grey'}}>50</Text>
                                            </Button>
                                            <Button>
                                                <Icon name="md-share" style={{color:'grey'}}/>
                                            </Button>
                                        </FooterTab>
                                        
                                        
                                    </CardItem>
                                    
                                </Card>
                                        ))
                                    }
                                </View>
                            </Content>
                        </Container>
            </StyleProvider>
        );
    }
}

export default MainScreen;