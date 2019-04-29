databaseChangeLog = {
    /*
    changeSet(author: "rubencancino (generated)", id: "1556559880289-1") {
        dropUniqueConstraint(constraintName: "IX_user_rolePK", tableName: "user_role")
    }

    changeSet(author: "rubencancino (generated)", id: "1556559880289-2") {
        dropUniqueConstraint(constraintName: "poliza_det_id_uniq_1501609330907", tableName: "comprobante_extranjero")
    }

    changeSet(author: "rubencancino (generated)", id: "1556559880289-3") {
        dropUniqueConstraint(constraintName: "poliza_det_id_uniq_1501609330908", tableName: "comprobante_nacional")
    }


    changeSet(author: "rubencancino (generated)", id: "1556559880289-4") {
        dropUniqueConstraint(constraintName: "poliza_det_id_uniq_1501609330936", tableName: "transaccion_cheque")
    }


    changeSet(author: "rubencancino (generated)", id: "1556559880289-5") {
        dropUniqueConstraint(constraintName: "poliza_det_id_uniq_1501609330936", tableName: "transaccion_transferencia")
    }
    */


    changeSet(author: "rubencancino (generated)", id: "1556559880289-6") {
        // dropUniqueConstraint(constraintName: "UC_PAGO_PROVEEDORREQUISICION_ID_COL", tableName: "pago_proveedor")

        addUniqueConstraint(columnNames: "requisicion_id", constraintName: "UC_PAGO_PROVEEDORREQUISICION_ID_COL", tableName: "pago_proveedor")
    }
}
