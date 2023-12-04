import React from 'react';
import ImageLogo from '../assets/logo.png'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        padding: 10
    },
    mySection: {
        margin: 10,
        flexGrow: 1,
        border: '1px solid #000', // Añadir un borde alrededor del recuadro
    },


    // header presupuesto
    headerPresupuesto: {
        height: '20%',
        borderBottom: '1px solid #000',
        display: 'flex',
        flexDirection: 'row'

    },

    // parte izquierda
    logoPresu: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100%',
        width: '50vh'

    },
    datosEmpresa: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '50vh',
        textAlign: 'left',
        gap: 5
    },



    // DATOS CLIENTES
    dataCliente: {
        height: '10%',
        borderBottom: '1px solid #000',
        display: 'flex',
        flexDirection: 'row',
        padding: 10
    },
   

    // header items

    headerItem: {
        height:'3%',
        borderBottom : '1px solid #000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:3

        
    },

    itemH : {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10
    }



});

// Create Document Component
export const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.mySection}>
                <View style={styles.headerPresupuesto}>
                    <View style={styles.logoPresu}>
                        <Image src={ImageLogo} style={{ width: 160, margin: 15 }} />
                        <Text style={{ fontSize: 10 }}>Ruta Provincial 305 Km 19 0 - Timbo Viejo - Tucumán</Text>
                        <Text style={{ fontSize: 10, marginTop: 3 }}>Tel.: 3815828883     monasterioneumaticos@gmail.com</Text>
                        <View style={{ border: '1px solid #000', marginTop: 10 }}>
                            <Text style={{ fontSize: 10 }}> IVA RESPONSABLE INSCRIPTO</Text>
                        </View>
                    </View>
                    <View style={styles.datosEmpresa}>
                        <Text style={{ fontSize: 20 }}>PRESUPUESTO</Text>
                        <Text style={{ fontSize: 10 }}>Nº : 000045</Text>
                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>FECHA 15/11/2023</Text>
                        <Text style={{ fontSize: 10 }}>CUIT: 30-71735672-8</Text>
                        <Text style={{ fontSize: 10 }}>II.BB.: 30717356728</Text>
                        <Text style={{ fontSize: 10 }}>Inicio de Actividades: 01/11/2021</Text>

                    </View>
                </View>
                <View style={styles.dataCliente}>
                    <View style={{ width: '50vh', display: 'flex', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>NOMBRE : </Text> HELPA S.A</Text>
                        <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>DIRECCIÓN : </Text>CALLE WILDE- ALTO LA POLVORA 0</Text>
                        <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>COND.IVA : </Text>COND.IVA: RESP. INSCRIPTO</Text>
                    </View>
                    <View style={{ width: '50vh', display: 'flex', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>COND. PAGO : </Text>asdasdas</Text>
                        <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>LOCALIDAD : </Text></Text>
                        <Text style={{ fontSize: 10 }}><Text style={{ fontFamily: 'Helvetica-Bold' }}>CUIT Nº: </Text>30504320711</Text>
                    </View>
                </View>
                
                <View style={styles.headerItem}>
                    <Text style={styles.itemH}>CANT.</Text>
                    <Text style={styles.itemH}>CÓDIGO </Text>
                    <Text style={styles.itemH}>DESCRIPCION</Text>
                    <Text style={styles.itemH}>PREC. UNI</Text>
                    <Text style={styles.itemH}>DTO. %</Text>
                    <Text style={styles.itemH}>IMPORTE</Text>
                </View>
              

            </View>
        </Page>
    </Document>
);