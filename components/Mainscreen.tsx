import { useState, } from 'react';
import {View,SafeAreaView, ScrollView ,Image, Text, TextInput} from 'react-native';
import styles from '../components/Styles'
import {RadioButton} from 'react-native-paper';

 
function MainScreen () {

    const [petName, setPetName] = useState ('');
    const [selectdValue, setSelectedValue]= useState ('0');
    
    return (
        <View>
            <SafeAreaView>
                <ScrollView>
            
                    <Image style={styles.logo} 
                    source={require('../_image/cat logo.png')}/>
                    <Text style={styles.mainTxt}>Mog Hub</Text>
                    <Text style={styles.slogan}> P u r r r f e c t C o m p a n i o n s</Text>

                    <View style={styles.inputFlex}>
                        <Text style={styles.enterTxt}>Your Pet's Name:</Text>
                        <TextInput style={styles.userInputTxt}
                        placeholder='Mog'
                        value={petName}
                        onChangeText={newText => setPetName(newText)}
                        />
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>
                           select Your pet:
                        </Text>

                        <View style={styles.radioContainer}>
                            <View style={styles.radioGroup}>
                                <View style={styles.radioButton}>
                                    <RadioButton.Android

                                    value= '1'
                                    status={selectdValue == "1" ? 'checked' : 'unchecked'}
                                   
                                    />
                                    


                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default MainScreen
