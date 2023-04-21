import React, {useState} from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, Modal, TouchableOpacity} from "react-native"; 
import { Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import Boton from "../components/Boton";
import DropdownComponent from "../components/Ciudades";
import SelectorFecha from '../components/SelectorFecha';



const BuscarGrupo = (props)=>{
    
    

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

                         <Divider width={1} color="#112a52" marginTop={5}/>

                        <View style={styles.cuerpoTitulo}>
                            <Text>Destino</Text>
                        </View>
                        
                        <DropdownComponent />

                        <Divider width={1} color="#112a52" marginTop={5}/>

                        <View style={styles.cuerpoTitulo}>
                            <Text>Alojamiento</Text>
                        </View>
                        <View style={styles.cuerpoInput}>
                            <FontAwesome name="hotel" size={25}/>
                            <TextInput style={styles.textInput}/>
                        </View>

                        <Divider width={1} color="#112a52" marginTop={5}/>
                    
                        <View style={styles.cuerpoTitulo}>
                            <Text>Cantidad de personas</Text>
                        </View>
                        <View style={styles.cuerpoInput}>
                            <MaterialIcons name="group" size={25}/>
                            <TextInput style={styles.textInput} keyboardType="numeric"/>
                        </View>
               
                        <Divider width={1} color="#112a52" marginTop={5}/>

                        <View style={styles.cuerpoTitulo}>
                            <Text>Fecha</Text>
                        </View>

                        <View style={{flexDirection: 'row'}
                            }>
                            <SelectorFecha/>
                            <SelectorFecha/>
                        </View>

                      
                        

                <Divider width={2} color="#112a52" marginTop={10}/>

                <Boton titulo="Buscar" color="#112a52"/>

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
        height: 50,
        backgroundColor: '#08234f',
        borderwidth: 2,
        borderColor: 'black',
        justifyContent: 'center'
    },

    titulo: {
        fontSize: 22,
        alignSelf: "center",
        color: "white"
    },

    cuerpo: {
        backgroundColor: '#b5e0ff',
        borderColor: 'red',
        //flex:1       
    
    },
    cuerpoTitulo: {

        margin: 8,
        
    },
    cuerpoInput: {
        backgroundColor: '#e1eef7',
        marginBottom:5,
        marginTop: 5,
        marginHorizontal: 15,
        borderRadius:5,
        height: 25,
        flexDirection: 'row',

    },
    textInput: {
        flex: 1,
        marginLeft: 10,
    },

    boton: {
        marginHorizontal: 30,
        marginVertical: 10,
        height: 50,
        
    },

    pieDePagina: {
        height: 150,
        backgroundColor: '#E6E4E4',
        
    },

    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },

    centeredView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:22
    },

    modalView:{
        margin:20,
        backgroundColor:"white",
        borderRadius:20,
        width: "90%",
        padding: 35,
        alignItems:"center",
        shadowColor:"#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    }

})

export default BuscarGrupo;