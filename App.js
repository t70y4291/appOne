import React, { Component } from 'react';  

import {  

    View,  

    Text,  

    Image,  

    ScrollView,  

    TextInput,  

    Button,  

    StyleSheet,  

    Alert  

} from 'react-native';  

  

class App extends Component {  

    constructor(props) {  

        super(props);  

        this.state = {  

            nombre: '',  

            apellido: '',  

            email: '',  

            telefono: '',  

            descripcion: '',  

            mostrarPerfil: false,  

            mensajeAprobacion: "Perfil creado con éxito"   

        };  

    }  

  

    manejarCambioNombre = (texto) => {  

        this.setState({  

            nombre: texto,  

            mostrarPerfil: false,  

            mensajeAprobacion: "listo calistos"   

        });  

    };  

  

    manejarCambioApellido = (texto) => {  

        this.setState({  

            apellido: texto,  

            mostrarPerfil: false,  

            mensajeAprobacion: "listo calisto"   

        });  

    };  

  

    manejarCambioEmail = (texto) => {  

        this.setState({  

            email: texto,  

            mostrarPerfil: false,  

            mensajeAprobacion: "listo calisto"   

        });  

    };  

  

    manejarCambioTelefono = (texto) => {  

        this.setState({  

            telefono: texto,  

            mostrarPerfil: false,  

            mensajeAprobacion: "listo calisto"   

        });  

    };  

  

    manejarCambioDescripcion = (texto) => {  

        this.setState({  

            descripcion: texto,  

            mostrarPerfil: false,  

            mensajeAprobacion: "listo calisto"   

        });  

    };  

    guardarPerfil = () => {
        const {nombre, apellido, email, telefono, descripcion} = this.state;
        //validar que los campos obligatorios no esten vacios
        //nombre, apellido, email
        if (!nombre.trim() || !apellido.trim() || !email.trim()) {
            Alert.alert (
                'Campos vacios',
                'Los campos nombre, apellido y email no pueden estar vacios',
                [{text: 'OK'}]
            );
            return;
        }
            //validar el correo
        if (!email.includes('@')) {
            Alert.alert(
                'Email inválido',
                'Por favor ingresar un correo válido',
                [{text: 'OK'}]
            );
            return;
        }
        this.setState({
            mostrarPerfil: true
        });
        Alert.alert(
            'Perfil guardado',
            'su perfil se guardo con éxito',
            [{text: 'OK'}]
        );
    };


    limpiarFormulario = () => {  

        this.setState({  

            nombre: '',  

            apellido: '',  

            email: '',  

            telefono: '',  

            descripcion: '',  

            mostrarPerfil: false,  

            mensajeAprobacion: "Limpiar campos"   

        });  

  

        Alert.alert(  

            'Formulario Limpiando', // Título de la alerta  

            'Todos los campos han sido borrados',  

            [{ text: 'OK' }]  

        );  

    };  

  

    render() {  

        const {  

            nombre,   

            apellido,   

            email,   

            telefono,   

            descripcion,   

            mostrarPerfil,   

            mensajeAprobacion  

        } = this.state;  

  

        return (  

            <>  

                <ScrollView style={styles.container}>  

                    <View>  

                        <Image  

                            source={require('./imgs/profile1.png')}  

                            style={styles.imagen} // Asegúrate de definir el estilo 

                            resizeMode='cover'  

                        />  

                        <Text>Mi perfil de usuario</Text>  

                        <Text>Mi aplicación demo de react</Text>  

                    </View>  

  

                    <View>  

                        <Text style={styles.header}>Nombre</Text>  

                        <TextInput  

                            value={nombre}  

                            onChangeText={this.manejarCambioNombre}  

                            placeholder='Ingresa tu nombre'  

                            placeholderTextColor="#999"  

                        />  

  

                        <Text style={styles.header}>Apellido</Text>  

                        <TextInput  

                            value={apellido}  

                            onChangeText={this.manejarCambioApellido}  

                            placeholder='Ingresa tu Apellido'  

                            placeholderTextColor="#999"  

                        />  

  

                        <Text style={styles.header}>Email</Text>  

                        <TextInput  

                            value={email}  

                            onChangeText={this.manejarCambioEmail}  

                            placeholder='Ingresa tu email'  

                            placeholderTextColor="#999"  

                        />  

  

                        <Text style={styles.header}>Teléfono</Text>  

                        <TextInput  

                            value={telefono}  

                            onChangeText={this.manejarCambioTelefono}  

                            placeholder='Ingresa tu teléfono'  

                            placeholderTextColor="#999"  

                        />  

  

                        <Text style={styles.header}>Descripción</Text>  

                        <TextInput  

                            value={descripcion}  

                            onChangeText={this.manejarCambioDescripcion}  

                            placeholder='Ingresa tu descripción'  

                            placeholderTextColor="#999"  

                        />  

                    </View>  

  

                    <View>  
                        <View style={styles.buttonWrapper}>
                            <Button  

                                title='Guardar perfil'  

                                onPress={this.guardarPerfil} // Agrega la función que desees aquí 

                            />  
                        </View>
                        

                        <Button  

                            title='Limpiar datos'  

                            onPress={this.limpiarFormulario}  

                        />  

                    </View>  

                </ScrollView>  

            </>  

        );  

    }  

}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      backgroundColor: '#3F51B5',
      padding: 30,
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 15,
      borderWidth: 3,
      borderColor: 'white',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#E8EAF6',
      textAlign: 'center',
      marginTop: 5,
    },
    statusContainer: {
      backgroundColor: '#E3F2FD',
      padding: 15,
      marginHorizontal: 20,
      borderRadius: 8,
      marginBottom: 20,
    },
    statusText: {
      fontSize: 14,
      color: '#1976D2',
      textAlign: 'center',
      fontWeight: '500',
    },
    formContainer: {
      backgroundColor: 'white',
      margin: 20,
      padding: 20,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
      textAlign: 'center',
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
      marginBottom: 8,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      backgroundColor: '#fafafa',
    },
    textArea: {
      height: 100,
      textAlignVertical: 'top',
    },
    buttonContainer: {
      marginTop: 20,
    },
    buttonWrapper: {
      marginVertical: 8,
    },
    profileContainer: {
      backgroundColor: 'white',
      margin: 20,
      padding: 20,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    profileImageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImageLarge: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#4CAF50',
    },
    profileInfo: {
      marginBottom: 20,
    },
    profileRow: {
      marginBottom: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    profileLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#666',
      marginBottom: 5,
    },
    profileValue: {
      fontSize: 16,
      color: '#333',
      fontWeight: '500',
    },
    profileDescription: {
      fontSize: 16,
      color: '#333',
      lineHeight: 22,
    },
    footer: {
      backgroundColor: '#37474F',
      padding: 20,
      marginTop: 20,
      alignItems: 'center',
    },
    footerText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    footerSubtext: {
      color: '#B0BEC5',
      fontSize: 12,
      textAlign: 'center',
      marginVertical: 2,
    },
})

export default App;  