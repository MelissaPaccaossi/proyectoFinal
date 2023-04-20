import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput} from "react-native"; 
import { Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import Boton from "../components/Boton";
import DropdownComponent from "../components/Ciudades";
import SelectorFecha from '../components/SelectorFecha';


const BuscarGrupo = ()=>{
    return(
        <View style={styles.base}>
            <ScrollView>

                <View style={styles.cabecera}>
                    <Text style={styles.titulo}>BUSCAR GRUPO</Text>
                </View>

                    <View style={styles.cuerpo}>
                        <View style={styles.cuerpoTitulo}>
                            <Text>Origen</Text>
                        </View>                       

                        <DropdownComponent />

                         <Divider width={2} color="#112a52" marginTop={10}/>

                        <View style={styles.cuerpoTitulo}>
                            <Text>Destino</Text>
                        </View>
                        
                        <DropdownComponent />

                        <Divider width={2} color="#112a52" marginTop={10}/>

                        <View style={styles.cuerpoTitulo}>
                            <Text>Alojamiento</Text>
                        </View>
                        <View style={styles.cuerpoInput}>
                            <FontAwesome name="hotel" size={25}/>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <Divider width={2} color="#112a52" marginTop={10}/>
                    
                        <View style={styles.cuerpoTitulo}>
                            <Text>Cantidad de personas</Text>
                        </View>
                        <View style={styles.cuerpoInput}>
                            <MaterialIcons name="group" size={25}/>
                            <TextInput style={styles.textInput} keyboardType="numeric"/>
                        </View>
               
                        <Divider width={2} color="#112a52" marginTop={10}/>

                        <View style={styles.cuerpoTitulo}>
                            <Text>Fecha</Text>
                        </View>

                        <View style={styles.cuerpoInput}>
                            <FontAwesome name="calendar" size={25}/>   
                            <TextInput style={styles.textInput} placeholder="Desde"/>
                        </View>                       

                        <View style={styles.cuerpoInput}>
                            <FontAwesome name="calendar" size={25}/>
                            <TextInput style={styles.textInput} placeholder="Hasta"/>
                        </View>

                        <SelectorFecha />

                <Divider width={2} color="#112a52" marginTop={10}/>

                <Boton />

                <Divider width={2} color="#112a52"/>

            </View>
            <View style={styles.pieDePagina}>
                <View>
                    <Text>AVI</Text>
                </View>
                <View>
                    <Text>Pagina Principal</Text>
                </View>
                <View>
                    <Text>Buscar Grupo</Text>
                </View>
                <View>
                    <Text>Mis grupos</Text>
                </View>
                <View>
                    <Text>Ayuda</Text>
                </View>
            </View>
            </ScrollView>            
        </View>
                
    )
}

const styles = StyleSheet.create({

    base: {
        //height: 580

    },

    cabecera: {
        height: 80,
        backgroundColor: '#08234f',
        borderwidth: 2,
        borderColor: 'black',
        justifyContent: 'center'
    },

    titulo: {
        fontSize: 24,
        alignSelf: "center",
        color: "white"
    },

    cuerpo: {
        backgroundColor: '#b5e0ff',
        borderColor: 'red',
        //flex:1       
    
    },
    cuerpoTitulo: {
        
        margin: 12,
    },
    cuerpoInput: {
        backgroundColor: '#e1eef7',
        marginBottom:5,
        marginTop: 5,
        marginHorizontal: 15,
        borderRadius:5,
        height: 30,
        flexDirection: 'row',

    },
    textInput: {
        flex: 1,
        marginLeft: 10,
    },

    boton: {
        marginHorizontal: 30,
        marginVertical: 15,
        height: 50,
        
    },

    pieDePagina: {
        height: 150,
        backgroundColor: '#E6E4E4',
        
    },

})

export default BuscarGrupo;