import { View, TextInput, Pressable,StyleSheet, Text } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
const SignIn = () => {
const styles=StyleSheet.create({
    // container: {
    //   flex: 1,
    // //   backgroundColor: '#fff',
    // //   alignItems: 'center',
    // //   justifyContent: 'center',
    // },
    input: {
      height: 60,
      margin: 12,
      borderWidth: 2,
        padding: 10,
        borderRadius: 10,
      fontSize: 20,
    },
    inputError: {
        borderColor: '#d73a4a',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 32,
      borderRadius: 10,
    //   elevation: 3, 
      backgroundColor: '#0066D5',
        margin: 12,
        height: 80
      
    },
    buttonText: {
      fontSize: 24,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
   
})

const initialValues = {
  userName: '',
  password: '',
    };
    
    const onSubmit = (values) => {
  console.log(values);
    };
    const validationSchema = yup.object().shape({
        userName: yup.string().required('UserName is required'),
        password: yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    return (
        <View>
            <TextInput placeholder="Username" placeholderTextColor="rgba(100, 100, 100, 1)"
                style={[
                    styles.input,
                    formik.touched.userName && formik.errors.userName && styles.inputError
                ]} value={formik.values.userName}
                onChangeText={formik.handleChange('userName')}
                onBlur={formik.handleBlur('userName')}/>
            {formik.touched.userName && formik.errors.userName &&  (
                <Text style={{ color: 'red' , marginLeft: 12, fontSize: 20 }}>{formik.errors.userName}</Text>
            )}
            <TextInput placeholder="Password" placeholderTextColor="rgba(100, 100, 100, 1)" secureTextEntry={true}  
                style={[
                    styles.input,
                    formik.touched.password && formik.errors.password && styles.inputError
                ]} value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
            />
             {formik.touched.password && formik.errors.password &&  (
                <Text style={{ color: 'red' , marginLeft: 12 , fontSize: 20}}>{formik.errors.password}</Text>
            )}
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>

        </View>
    )
}

export default SignIn;