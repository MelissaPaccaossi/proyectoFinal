import React from "react";
import { Text, View, StyleSheet, } from "react-native"; 

const BuscarGrupo = ()=>{
    return(
        <View style={styles.base}>
            <View style={styles.cabecera}><Text style={styles.titulo}>BUSCAR GRUPO</Text></View>
            <View style={styles.cuerpo}>
            <View><Text>origen</Text></View>
                <View><Text>1</Text></View>
                <View><Text>destino</Text></View>
                <View><Text>2</Text></View>
                <View><Text>Alojamiento</Text></View>
                <View><Text>3</Text></View>
                <View><Text>Cantidad de personas</Text></View>
                <View><Text>4</Text></View>
                <View><Text>Fecha</Text></View>
                <View><Text>5</Text></View>
                <View><Text>prueba de push</Text></View>              
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
            
            
        </View>
        
    )
}

const styles = StyleSheet.create({

    base: {
        height: 580

    },

    cabecera: {
        height: 80,
        backgroundColor: 'lightblue',
        borderwidth: 2,
        borderColor: 'black',
        justifyContent: 'center'
    },

    titulo: {
        fontSize: 24,
        alignSelf: "center",
    },

    cuerpo: {
        backgroundColor: 'pink',
        borderColor: 'red',
        flex:1
    },
    pieDePagina: {
        height: 150,
        backgroundColor: '#E6E4E4',
        
    }


})

export default BuscarGrupo;