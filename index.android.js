import React, {
    Component
} from 'react';
import Native, {
    View,
    Text,
    AppRegistry,
    StyleSheet,
    //Navigator
} from 'react-native';
import Menu, {
    // MenuContext,
    // MenuOptions,
    // MenuOption,
    // MenuTrigger,
    TouchableHighlight
} from 'react-native-menu';

export default class EngClivVR extends Component {
    render() {
        return (
            <MenuContext style={styles.menu}>
                <View style={styles.externalView}>
                    <View style={styles.view}>
                        <Text>VR App</Text>
                    </View>
                    <View>
                        <TouchableHighlight>
                            <Text onPress={create()}>Criar Localidade</Text>
                        </TouchableHighlight>
                    </View>

                    {/*<Menu onSelect={(value) => alert(`User selected the number ${value}`)}>*/}
                        {/*<MenuTrigger>*/}
                            {/*<Text style={styles.text}>&#8942;</Text>*/}
                        {/*</MenuTrigger>*/}
                        {/*<MenuOptions>*/}
                            {/*<MenuOption value={1}>*/}
                                {/*<Text>Criar Localidade</Text>*/}
                            {/*</MenuOption>*/}
                        {/*</MenuOptions>*/}
                    {/*</Menu>*/}
                </View>
                <View style={styles.view}><Text>Hello!</Text></View>
            </MenuContext>
        );
    }

    create() {
        this.props.navigation.push('CreateLocale');
    }
}


const styles = StyleSheet.create({
    menu: {
        flex: 1
    },
    externalView: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'pink'
    },
    view: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

AppRegistry.registerComponent('EngCivVR', () => EngClivVR);