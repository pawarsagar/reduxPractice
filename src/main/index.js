
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as action from '../redux/actions'
//redux 

import { connect } from 'react-redux'



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 21
        }

    }

    handlePress(payload) {
        const { onAdd, onSub } = this.props
        if (payload == 'sub') {
            // this.setState({
            //     count: --this.state.count
            // })

        onSub()
         




        }
        else {
            // this.setState({
            //     count: ++this.state.count
            // })

            onAdd()
        }
    }


    render() {
        console.log(this.props);
        
        const { count } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.welcome} onPress={() => this.handlePress()}  >
                    <Text>

                        Add
                </Text>
                </TouchableOpacity>
                <Text>{this.props.add.count}</Text>
                <TouchableOpacity style={styles.instructions} onPress={() => this.handlePress('sub')}>
                    <Text>

                        Subtract
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


actionProps = (root) => {
    return { 
           ...root

    }
}

functionProps=(dispatch)=>{
    return{

        onAdd:()=>dispatch({type:'ADD'}),
        onSub:()=>dispatch({type:'SUB'})
    }
}


export default connect(actionProps, functionProps)(App)