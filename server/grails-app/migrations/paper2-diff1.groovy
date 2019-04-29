databaseChangeLog = {

    changeSet(author: "rubencancino (generated)", id: "1556556103250-1") {
        createIndex(indexName: "IX_user_rolePK", tableName: "user_role", unique: "true") {
            column(name: "user_id")

            column(name: "role_id")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-2") {
        dropForeignKeyConstraint(baseTableName: "cxcabono", constraintName: "FK_9vynnudyinfp0wotj5de0bcw4")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-3") {
        dropUniqueConstraint(constraintName: "UK_fhkc9y5hih0w340pbwx0ids1y", tableName: "transaccion_transferencia")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-4") {
        dropUniqueConstraint(constraintName: "UK_i51bjf9kqecov74jivbiav3iw", tableName: "transaccion_cheque")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-5") {
        dropUniqueConstraint(constraintName: "UK_pi441ktqdciccvhxkf1exb555", tableName: "comprobante_extranjero")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-6") {
        dropUniqueConstraint(constraintName: "UK_r3kps4b3376cjp7lg2s1ch65y", tableName: "comprobante_nacional")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-7") {
        dropUniqueConstraint(constraintName: "cfdi_id_uniq_1441209971557", tableName: "cancelacion_de_cfdi")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-8") {
        dropUniqueConstraint(constraintName: "cxp_id_uniq_1440741049582", tableName: "comprobante_fiscal")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-9") {
        dropUniqueConstraint(constraintName: "pago_proveedor_id_uniq_1501609330886", tableName: "abono")
    }
    /*
    changeSet(author: "rubencancino (generated)", id: "1556556103250-10") {
        dropUniqueConstraint(constraintName: "poliza_det_id_uniq_1501609330907", tableName: "comprobante_extranjero")
    }


    changeSet(author: "rubencancino (generated)", id: "1556556103250-11") {
        dropUniqueConstraint(constraintName: "poliza_det_id_uniq_1501609330908", tableName: "comprobante_nacional")
    }


    changeSet(author: "rubencancino (generated)", id: "1556556103250-12") {
        dropUniqueConstraint(constraintName: "poliza_det_id_uniq_1501609330936", tableName: "transaccion_cheque")
    }


    changeSet(author: "rubencancino (generated)", id: "1556556103250-13") {
        dropUniqueConstraint(constraintName: "poliza_det_id_uniq_1501609330936", tableName: "transaccion_transferencia")
    }
    */

    changeSet(author: "rubencancino (generated)", id: "1556556103250-14") {
        dropUniqueConstraint(constraintName: "usuario_id_uniq_1440255166736", tableName: "perfil")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-15") {
        dropTable(tableName: "audit_log")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-16") {
        dropTable(tableName: "certificado")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-17") {
        dropTable(tableName: "folio_fiscal")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-18") {
        dropTable(tableName: "sat_balanza_log")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-19") {
        dropTable(tableName: "sat_catalogo_log")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-20") {
        dropTable(tableName: "sat_polizas_log")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-21") {
        dropColumn(columnName: "cfdi_id", tableName: "cxcabono")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-22") {
        dropColumn(columnName: "nip", tableName: "user")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-23") {
        addNotNullConstraint(columnDataType: "bigint", columnName: "comision_movimientos_id", tableName: "comision_movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-24") {
        dropDefaultValue(columnDataType: "varchar(300)", columnName: "concepto", tableName: "poliza_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-25") {
        addNotNullConstraint(columnDataType: "bigint", columnName: "cuenta_de_gastos_facturas_id", tableName: "cuenta_de_gastos_cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-26") {
        dropNotNullConstraint(columnDataType: "int", columnName: "dias_inversion_isr", tableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-27") {
        dropNotNullConstraint(columnDataType: "varchar(200)", columnName: "direccion_calle", tableName: "aduana")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-28") {
        dropNotNullConstraint(columnDataType: "varchar(255)", columnName: "direccion_codigo_postal", tableName: "aduana")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-29") {
        dropNotNullConstraint(columnDataType: "varchar(255)", columnName: "direccion_estado", tableName: "aduana")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-30") {
        dropNotNullConstraint(columnDataType: "varchar(100)", columnName: "direccion_pais", tableName: "aduana")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-31") {
        dropNotNullConstraint(columnDataType: "int", columnName: "folio", tableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-32") {
        dropNotNullConstraint(columnDataType: "int", columnName: "folio_final", tableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-33") {
        dropNotNullConstraint(columnDataType: "int", columnName: "folio_inicial", tableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-34") {
        dropNotNullConstraint(columnDataType: "boolean", columnName: "nacional", tableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-35") {
        addNotNullConstraint(columnDataType: "bigint", columnName: "perfil_id", tableName: "perfil_preferencias")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-36") {
        dropNotNullConstraint(columnDataType: "int", columnName: "plazo", tableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-37") {
        addNotNullConstraint(columnDataType: "bigint", columnName: "proveedor_id", tableName: "proveedor_agentes")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-38") {
        dropDefaultValue(columnDataType: "decimal(19,2)", columnName: "tc", tableName: "embarque_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-39") {
        dropDefaultValue(columnDataType: "decimal(19,5)", columnName: "tip_camb", tableName: "comprobante_extranjero")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-40") {
        dropDefaultValue(columnDataType: "decimal(19,2)", columnName: "tipo_de_cambio", tableName: "pago_proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-41") {
        addNotNullConstraint(columnDataType: "bigint", columnName: "traspaso_movimientos_id", tableName: "traspaso_movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556556103250-42") {
        dropPrimaryKey(tableName: "user_role")

        addPrimaryKey(columnNames: "user_id, role_id", constraintName: "user_rolePK", tableName: "user_role")
    }
    /*
    changeSet(author: "rubencancino (generated)", id: "1556556103250-43") {
        dropUniqueConstraint(constraintName: "UC_PAGO_PROVEEDORREQUISICION_ID_COL", tableName: "pago_proveedor")

        addUniqueConstraint(columnNames: "requisicion_id", constraintName: "UC_PAGO_PROVEEDORREQUISICION_ID_COL", tableName: "pago_proveedor")
    }
    */
}
