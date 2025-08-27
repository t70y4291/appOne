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

                        <Button  

                            title='Guardar perfil'  

                            onPress={() => Alert.alert(mensajeAprobacion)} // Agrega la función que desees aquí 

                        />  

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
        backgroundColor: '#f5f5f5'
    },

    header: {
        color: 'white',
        backgroundColor: '#3143abff',
        alignItems: 'center',
        marginBottom: 20,
        padding: 30
    },
    imagen: {
        width: 80,
        height: 80,
        border: 30,
        marginBottom: 15,
        borderWidth: 4,
        borderColor: 'cyan'
    }
})

export default App;  