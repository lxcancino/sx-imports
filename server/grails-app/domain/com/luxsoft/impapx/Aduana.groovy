package com.luxsoft.impapx

import sx.core.Direccion

class Aduana {
	
	String nombre
	Direccion direccion

	static embedded =['direccion']

    static constraints = {
		nombre(blank:false,unique:true,maxSize:50)

    }
	
	String toString(){
		return nombre
	}
}
