import {useState} from 'react';
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export function SignIn() {
  const [numberInput, setNumberInput] = useState('');
  const [email, setemailInput] = useState('');

  const handelGetHelp = () => {
    Linking.openURL('https://www.google.com');
  };

  const handelSubmit = () => {
    console.log('submit');
    setNumberInput('');
    setemailInput('');
  };

  const handelInputNumber = text => {
    const reg = new RegExp(/^([0-9]+-)*([0-9]+)$/);
    if (reg.test(text) || text === '') {
      setNumberInput(text);
    }
  };

  return (
    <View style={styles.signupPage}>
      <Text style={styles.signupText}>
        להתחברות לאפליקציית טיימר אנא הזינו את מספר הטלפון והמייל שלכם
      </Text>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="הקלד אימייל"
          onChangeText={text => setemailInput(text)}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="הקלד מספר"
          onChangeText={handelInputNumber}
          value={numberInput}
          keyboardType="numeric"
        />
      </View>
      <View>
        <View style={styles.footer}>
          <Pressable
            style={styles.submitButton}
            android_ripple={{color: '#d9a1ea', borderless: true}} // ripple effect - ask about it
            onPress={handelSubmit}>
            <Image
              style={styles.arrowIcon}
              source={require('../assets/login-button-arrow.png')}
            />
            {/* </View> */}
          </Pressable>
          <View>
            <Text>צריך עזרה?</Text>
            <Text style={styles.link} onPress={handelGetHelp}>
              יצירת קשר עם התמיכה
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupPage: {
    flex: 1,
  },
  signupText: {
    marginTop: 120,
    paddingHorizontal: 40,
    paddingBottom: 10,
    fontSize: 16,
  },
  inputsContainer: {
    alignItems: 'center',
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#000000',
    width: '65%',
    marginBottom: 20,
  },
  link: {
    color: '#437ff0',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 160,
    marginHorizontal: 30,
  },
  submitButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#bf00ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
});
