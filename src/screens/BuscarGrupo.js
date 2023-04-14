import React from "react";
import { Text, View, StyleSheet, ScrollView} from "react-native"; 
import { Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';

const BuscarGrupo = ()=>{
    return(
        <View style={styles.base}>
            <ScrollView>
            <View style={styles.cabecera}><Text style={styles.titulo}>BUSCAR GRUPO</Text></View>
            <View style={styles.cuerpo}>
                <View style={styles.cuerpoTitulo}><Text>Origen</Text></View>

                <View style={styles.cuerpoInput}>
                    <Entypo name="location-pin" size={25}/>
                    <Text>1</Text>
                </View>

                <View style={styles.cuerpoTitulo}><Text>Destino</Text></View>

                <View style={styles.cuerpoInput}>
                    <Entypo name="location-pin" size={25}/>
                    <Text>2</Text>
                </View>

                <View style={styles.cuerpoTitulo}><Text>Alojamiento</Text></View>

                <View style={styles.cuerpoInput}>
                    <FontAwesome name="hotel" size={25}/>
                    <Text>3</Text>
                </View>

                <View style={styles.cuerpoTitulo}><Text>Cantidad de personas</Text></View>

                <View style={styles.cuerpoInput}>
                    <MaterialIcons name="group" size={25}/>
                    <Text>4</Text>
                </View>

                <View style={styles.cuerpoTitulo}><Text>Fecha</Text></View>

                <View style={styles.cuerpoInput}>
                    <FontAwesome name="calendar" size={25}/>   
                    <Text>5</Text>
                </View>

                <View style={styles.cuerpoInput}>
                    <FontAwesome name="calendar" size={25}/>
                    <Text>6</Text>
                </View>              
                
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
        backgroundColor: '#5dbbfc',
        borderwidth: 2,
        borderColor: 'black',
        justifyContent: 'center'
    },

    titulo: {
        fontSize: 24,
        alignSelf: "center",
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
    pieDePagina: {
        height: 150,
        backgroundColor: '#E6E4E4',
        
    }


})

export default BuscarGrupo;