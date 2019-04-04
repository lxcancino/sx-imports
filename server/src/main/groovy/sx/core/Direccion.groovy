package sx.core

import grails.web.databinding.WebDataBinding
import org.grails.datastore.gorm.GormValidateable

class Direccion implements GormValidateable, WebDataBinding{

    String calle

    String numeroInterior

    String numeroExterior

    String colonia

    String municipio

    String codigoPostal

    String estado

    String pais='MEXICO'

    BigDecimal latitud =  0

    BigDecimal longitud = 0



    static constraints = {
        calle(nullable:true,size:1..200)
        numeroInterior(size:1..50,nullable:true)
        numeroExterior(size:1..50,nullable:true)
        colonia(nullable:true)
        municipio(nullable:true)
        codigoPostal(nullable:true)
        estado(nullable:true)
        pais(nullable:true,size:1..100)
        latitud nullable: true
        longitud nullable: true
    }

    String toLabel(){
        return "Calle:${calle?:''} Ext#:${numeroExterior?:''} ${numeroInterior? 'Int#:' +numeroInterior :''} Col:${colonia?: ''} CP:${codigoPostal?:''} Del/Mun:${municipio?:''} ${estado?:''} ${pais?:''}"
    }


}
