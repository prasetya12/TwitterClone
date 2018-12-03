import React,{Component} from 'react'
import { Container, Header, Form,Title, Content, Icon,Footer, FooterTab, Button, Left, Right, Body, Text, StyleProvider,Thumbnail, Item, Label, Input} from 'native-base';
import {StyleSheet} from 'react-native'

import getTheme from '../native-base-theme/components'
import platfrom from '../native-base-theme/variables/platform'
import { Actions } from 'react-native-router-flux';


class RegisterScreen extends Component{
    render(){
    
        const uri = 'https://img.icons8.com/color/96/76FF03/twitter.png';
        return (
          <StyleProvider style={getTheme( platfrom)}>
          <Container>
            <Header transparent>
              <Left style={styles.headLeft}>
                <Button transparent>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body style={styles.headBody}>
              <Thumbnail  source={{uri:uri}} 
                          style={styles.headLogo}/>
              </Body>
             <Right style={styles.headRight}>
               <Text style={styles.headText}>Log in</Text>
             </Right>
            </Header>
            <Content>
                <Text style={styles.wrapperText}>Create your account</Text>
    
                <Form style={styles.form}>
                  <Item stackedLabel>
                    <Label>Name</Label>
                    <Input/>
                  </Item>
                  <Item stackedLabel last >
                    <Label>
                      Phone number or email address
                    </Label>
                    <Input/>
                  </Item>
                </Form>
            </Content>
            <Footer>
              <Right>
                <Button rounded 
                style={styles.button}
                onPress={()=>{Actions.main();}}
                >
                  <Text>Next</Text>
                </Button>
              </Right>
                
            </Footer>
          </Container>
          </StyleProvider>
    );
    }
}


export default RegisterScreen;

const styles = StyleSheet.create({
  headLeft:{
    flex:2
  },
  headBody:{
    flex:8, 
    alignItems:'center'
  },
  headLogo:{
    width:40,
    height:40
  },
  headRight:{
    flex:2
  },
  headText:{
    color:'#03a9f4',
    marginRight:10
  },
  wrapperText:{
    textAlign:'center',
    marginTop:20,
    fontWeight:"bold",
    fontSize:30
  },
  form:{
    marginTop:130, 
    marginLeft:20,
    marginRight:20
  },
  button:{
    marginRight:20,
    marginBottom:10
  }
})