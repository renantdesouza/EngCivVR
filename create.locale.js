import React, {
    Component
} from 'react';
import Native, {
    View,
    Text,
    AppRegistry,
    StyleSheet
} from 'react-native';

export default class CreateLocale {
    reander() {
        return (
            <View style={styles.view}><Text>Criar Localidade!</Text></View>
        )
    };
}

const styles = StyleSheet.create({
    view: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
});

AppRegistry.registerComponent('CreateLocale', () => CreateLocale);
