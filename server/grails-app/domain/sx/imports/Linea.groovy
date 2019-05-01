package sx.imports

import grails.compiler.GrailsCompileStatic
import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@Resource( uri = "/api/lineas", formats = ['json'])
@GrailsCompileStatic
@Secured("IS_AUTHENTICATED_ANONYMOUSLY")
@ToString(includes = ["nombre"], includeNames = true, includePackage = false)
@EqualsAndHashCode(includes=['nombre'])
class Linea {

    String nombre

    Date dateCreated

    Date lastUpdated

    static constraints = {
        nombre size:3..20, blank:false, unique:true
    }

}