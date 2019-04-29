databaseChangeLog = {

    changeSet(author: "rubencancino (generated)", id: "1556553391007-1") {
        createTable(tableName: "abono") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "abonoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "proveedor_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(200)")

            column(name: "impuestos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "class", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "documento", type: "VARCHAR(20)")

            column(name: "concepto", type: "VARCHAR(20)")

            column(name: "pago_proveedor_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-2") {
        createTable(tableName: "aduana") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "aduanaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }

            column(name: "direccion_colonia", type: "VARCHAR(255)")

            column(name: "direccion_numero_exterior", type: "VARCHAR(50)")

            column(name: "direccion_codigo_postal", type: "VARCHAR(255)")

            column(name: "direccion_numero_interior", type: "VARCHAR(50)")

            column(name: "direccion_municipio", type: "VARCHAR(255)")

            column(name: "direccion_estado", type: "VARCHAR(255)")

            column(name: "direccion_pais", type: "VARCHAR(100)")

            column(name: "direccion_calle", type: "VARCHAR(200)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-3") {
        createTable(tableName: "alert") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "alertPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-4") {
        createTable(tableName: "anticipo") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "anticipoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "sobrante_id", type: "BIGINT")

            column(name: "impuestos_aduanales", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "requisicion_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "gastos_de_importacion", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "complemento_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-5") {
        createTable(tableName: "aplicacion") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "aplicacionPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "factura_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(200)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "abono_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "aplicaciones_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-6") {
        createTable(tableName: "asimilado") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "asimiladoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "clabe", type: "VARCHAR(18)")

            column(name: "forma_de_pago", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "curp", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "numero_de_cuenta", type: "VARCHAR(16)")

            column(name: "banco_sat_id", type: "BIGINT")

            column(name: "rfc", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-7") {
        createTable(tableName: "banco") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "bancoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "nacional", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "banco_sat_id", type: "BIGINT")

            column(name: "nombre", type: "VARCHAR(150)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-8") {
        createTable(tableName: "banco_sat") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "banco_satPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "razon_social", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "clave", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "nombre_corto", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-9") {
        createTable(tableName: "cancelacion_de_cargo") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cancelacion_de_cargoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "usuario", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(300)") {
                constraints(nullable: "false")
            }

            column(name: "cargo_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-10") {
        createTable(tableName: "cancelacion_de_cfdi") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cancelacion_de_cfdiPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(255)")

            column(name: "comentario", type: "VARCHAR(255)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "aka", type: "BLOB") {
                constraints(nullable: "false")
            }

            column(name: "origen", type: "VARCHAR(255)")

            column(name: "cfdi_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-11") {
        createTable(tableName: "cargo_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cargo_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "cantidad", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "unidad", type: "VARCHAR(100)") {
                constraints(nullable: "false")
            }

            column(name: "venta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "vto", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "saldo", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "pena_por_dia", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "tasa_cetes", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "valor_unitario", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "corte", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "mismo_mes", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "clave_prod_serv", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(300)") {
                constraints(nullable: "false")
            }

            column(name: "dias_pena", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(200)") {
                constraints(nullable: "false")
            }

            column(name: "documento", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "numero_de_identificacion", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }

            column(name: "atraso", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "cfdi_id", type: "BIGINT")

            column(name: "conceptos_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-12") {
        createTable(tableName: "cfdi") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cfdiPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "xml", type: "BLOB") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "uuid", type: "VARCHAR(255)")

            column(name: "cadena_original", type: "CLOB")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "emisor", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "serie", type: "VARCHAR(15)") {
                constraints(nullable: "false")
            }

            column(name: "rfc", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "origen", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "xml_name", type: "VARCHAR(200)")

            column(name: "version_cfdi", type: "VARCHAR(3)") {
                constraints(nullable: "false")
            }

            column(name: "folio", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(12)") {
                constraints(nullable: "false")
            }

            column(name: "timbrado", type: "datetime")

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "receptor", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(255)")

            column(name: "url", type: "VARCHAR(255)")

            column(name: "receptor_rfc", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "tipo_de_cfdi", type: "VARCHAR(1)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "subtotal", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "descuentos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-13") {
        createTable(tableName: "cfdi_folio") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cfdi_folioPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "folio", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "emisor", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "serie", type: "VARCHAR(10)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-14") {
        createTable(tableName: "cfdi_retenciones") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cfdi_retencionesPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "xml", type: "BLOB")

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "mes_final", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "fecha_de_timbrado", type: "VARCHAR(50)")

            column(name: "uuid", type: "VARCHAR(50)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "emisor", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "ejercicio", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "emisor_curp", type: "VARCHAR(255)")

            column(name: "retencion_descripcion", type: "VARCHAR(255)")

            column(name: "receptor_curp", type: "VARCHAR(50)")

            column(name: "xml_name", type: "VARCHAR(200)")

            column(name: "receptor_registro_tributario", type: "VARCHAR(20)")

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "receptor", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(255)")

            column(name: "receptor_nacionalidad", type: "VARCHAR(10)") {
                constraints(nullable: "false")
            }

            column(name: "receptor_rfc", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "total_gravado", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "total_excento", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "tipo_de_retencion_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "mes_inicial", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "emisor_rfc", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-15") {
        createTable(tableName: "cheque") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "chequePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "folio", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "fecha_impresion", type: "datetime")

            column(name: "egreso_id", type: "BIGINT")

            column(name: "cancelacion", type: "datetime")

            column(name: "cuenta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "comentario_cancelacion", type: "VARCHAR(255)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-16") {
        createTable(tableName: "clase") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "clasePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-17") {
        createTable(tableName: "cliente") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "clientePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "forma_de_pago", type: "VARCHAR(255)")

            column(name: "email1", type: "VARCHAR(255)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "sub_cuenta_operativa", type: "VARCHAR(4)")

            column(name: "fisica", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_de_pago", type: "VARCHAR(4)")

            column(name: "rfc", type: "VARCHAR(255)")

            column(name: "nombre", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "direccion_colonia", type: "VARCHAR(255)")

            column(name: "direccion_numero_exterior", type: "VARCHAR(50)")

            column(name: "direccion_codigo_postal", type: "VARCHAR(255)")

            column(name: "direccion_numero_interior", type: "VARCHAR(50)")

            column(name: "direccion_municipio", type: "VARCHAR(255)")

            column(name: "direccion_estado", type: "VARCHAR(255)")

            column(name: "direccion_pais", type: "VARCHAR(100)")

            column(name: "direccion_calle", type: "VARCHAR(200)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-18") {
        createTable(tableName: "comision") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "comisionPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "comision", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "cxp_id", type: "BIGINT")

            column(name: "tc", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "referencia_bancaria", type: "VARCHAR(100)")

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(200)")

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-19") {
        createTable(tableName: "comision_movimiento_de_cuenta") {
            column(name: "comision_movimientos_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "movimiento_de_cuenta_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-20") {
        createTable(tableName: "compra") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "compraPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "entrega", type: "datetime")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "proveedor_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "origen", type: "VARCHAR(255)")

            column(name: "folio", type: "VARCHAR(255)")

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "depuracion", type: "datetime")

            column(name: "subtotal", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuestos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "descuentos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-21") {
        createTable(tableName: "compra_de_moneda") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "compra_de_monedaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tipo_de_cambio_compra", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "forma_de_pago", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_origen_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_destino_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "requisicion_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "tipo_de_cambio", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "pago_proveedor_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "diferencia_cambiaria", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "ingreso_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-22") {
        createTable(tableName: "compra_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "compra_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "descuento", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "solicitado", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "precio", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "producto_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "importe_descuento", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "compra_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "partidas_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-23") {
        createTable(tableName: "comprobante_extranjero") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "comprobante_extranjeroPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "tax_id", type: "VARCHAR(255)")

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "monto_total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "num_fac_ext", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "poliza_det_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "tip_camb", type: "DECIMAL(19, 5)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-24") {
        createTable(tableName: "comprobante_fiscal") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "comprobante_fiscalPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "cxp_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "acuse_codigo_estatus", type: "VARCHAR(100)")

            column(name: "uuid", type: "VARCHAR(40)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "serie", type: "VARCHAR(20)")

            column(name: "acuse", type: "BLOB")

            column(name: "version_cfdi", type: "VARCHAR(10)")

            column(name: "folio", type: "VARCHAR(20)")

            column(name: "fecha", type: "date") {
                constraints(nullable: "false")
            }

            column(name: "acuse_estado", type: "VARCHAR(100)")

            column(name: "receptor_rfc", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "cfdi_file_name", type: "VARCHAR(200)")

            column(name: "emisor_rfc", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "cfdi", type: "BLOB") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-25") {
        createTable(tableName: "comprobante_nacional") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "comprobante_nacionalPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "uuidcfdi", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "monto_total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "poliza_det_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "rfc", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "tip_camb", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-26") {
        createTable(tableName: "concepto_de_gasto") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "concepto_de_gastoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "ietu", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "retension", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "retension_isr", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "comentario_otros", type: "VARCHAR(255)")

            column(name: "rembolso", type: "DECIMAL(19, 2)")

            column(name: "otros", type: "DECIMAL(19, 2)")

            column(name: "retension_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "descuento", type: "DECIMAL(19, 2)")

            column(name: "factura_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(30)")

            column(name: "retension_isr_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha_rembolso", type: "datetime")

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "egreso_id", type: "BIGINT")

            column(name: "descripcion", type: "VARCHAR(500)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "concepto_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-27") {
        createTable(tableName: "cuenta_bancaria") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cuenta_bancariaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "folio_inicial", type: "INT")

            column(name: "tasa_de_inversion", type: "DECIMAL(19, 2)")

            column(name: "tasa_isr", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "sub_cuenta_operativa", type: "VARCHAR(4)")

            column(name: "dias_inversion_isr", type: "INT")

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "numero", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }

            column(name: "folio_final", type: "INT")

            column(name: "plazo", type: "INT")

            column(name: "cuenta_retencion", type: "VARCHAR(255)")

            column(name: "folio", type: "INT")

            column(name: "activo", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }

            column(name: "banco_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(100)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_contable_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-28") {
        createTable(tableName: "cuenta_contable") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cuenta_contablePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_sat_id", type: "BIGINT")

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "padre_id", type: "BIGINT")

            column(name: "clave", type: "VARCHAR(100)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "detalle", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "presentacion_financiera", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "presentacion_fiscal", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "sub_tipo", type: "VARCHAR(255)")

            column(name: "naturaleza", type: "VARCHAR(9)") {
                constraints(nullable: "false")
            }

            column(name: "de_resultado", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(7)") {
                constraints(nullable: "false")
            }

            column(name: "suspendida", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "presentacion_contable", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(300)") {
                constraints(nullable: "false")
            }

            column(name: "presentacion_presupuestal", type: "BOOLEAN") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-29") {
        createTable(tableName: "cuenta_de_gastos") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cuenta_de_gastosPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "embarque_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(250)")

            column(name: "referencia", type: "VARCHAR(255)")

            column(name: "impuestos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "proveedor_id", type: "BIGINT")

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-30") {
        createTable(tableName: "cuenta_de_gastos_cuenta_por_pagar") {
            column(name: "cuenta_de_gastos_facturas_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_por_pagar_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-31") {
        createTable(tableName: "cuenta_de_gastos_generica") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cuenta_de_gastos_genericaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "retension", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "retension_isr", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "rembolso", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "otros", type: "DECIMAL(19, 2)")

            column(name: "proveedor_id", type: "BIGINT")

            column(name: "descuento", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(250)")

            column(name: "impuestos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-32") {
        createTable(tableName: "cuenta_por_pagar") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cuenta_por_pagarPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "retension_isr", type: "DECIMAL(19, 2)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "saldo", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "ret_imp", type: "DECIMAL(19, 2)")

            column(name: "proveedor_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "tasa_de_impuesto", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "totalmn", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "ret_tasa", type: "DECIMAL(19, 2)")

            column(name: "comentario", type: "VARCHAR(200)")

            column(name: "vencimiento", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "impuestos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "descuentos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "documento", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "analisis_costo", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "sub_total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "gasto_por_comprobar", type: "BOOLEAN")

            column(name: "class", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "incrementable", type: "BOOLEAN")

            column(name: "provisionada", type: "INT")

            column(name: "pedimento_id", type: "BIGINT")

            column(name: "rembolso", type: "DECIMAL(19, 2)")

            column(name: "cuenta_generica_id", type: "BIGINT")

            column(name: "otros", type: "DECIMAL(19, 2)")

            column(name: "descuento", type: "DECIMAL(19, 2)")

            column(name: "concepto", type: "VARCHAR(255)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-33") {
        createTable(tableName: "cuenta_sat") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cuenta_satPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "nivel", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(100)")

            column(name: "codigo", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-34") {
        createTable(tableName: "cxcabono") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cxcabonoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "aplicado", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(200)")

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "cliente_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "class", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "venta_relacionada_id", type: "BIGINT")

            column(name: "descuento", type: "DECIMAL(19, 2)")

            column(name: "uso_cfdi", type: "VARCHAR(3)")

            column(name: "tipo", type: "VARCHAR(12)")

            column(name: "forma_de_pago", type: "VARCHAR(13)")

            column(name: "referencia_bancaria", type: "VARCHAR(100)")

            column(name: "ingreso_id", type: "BIGINT")

            column(name: "fecha_bancaria", type: "datetime")

            column(name: "cuenta_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-35") {
        createTable(tableName: "cxcaplicacion") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cxcaplicacionPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "abono_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "factura_id", type: "BIGINT")

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(200)")

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "aplicaciones_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-36") {
        createTable(tableName: "cxcnota_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "cxcnota_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "cantidad", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "nota_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "unidad_sat", type: "VARCHAR(255)")

            column(name: "unidad", type: "VARCHAR(100)") {
                constraints(nullable: "false")
            }

            column(name: "venta_id", type: "BIGINT")

            column(name: "valor_unitario", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "clave_prod_serv", type: "VARCHAR(255)")

            column(name: "comentario", type: "VARCHAR(300)") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(200)") {
                constraints(nullable: "false")
            }

            column(name: "clave_unidad_sat", type: "VARCHAR(255)")

            column(name: "numero_de_identificacion", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "partidas_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-37") {
        createTable(tableName: "distribucion") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "distribucionPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "embarque_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(250)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "contenedores", type: "INT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-38") {
        createTable(tableName: "distribucion_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "distribucion_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "programacion_de_entrega", type: "datetime")

            column(name: "kilos_netos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "cantidad", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "instrucciones", type: "VARCHAR(150)")

            column(name: "distribucion_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "sucursal", type: "VARCHAR(30)") {
                constraints(nullable: "false")
            }

            column(name: "cantidad_por_tarima", type: "DECIMAL(19, 3)") {
                constraints(nullable: "false")
            }

            column(name: "comentarios", type: "VARCHAR(255)")

            column(name: "tarimas", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "contenedor", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "embarque_det_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "fecha_de_entrada", type: "datetime")

            column(name: "partidas_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-39") {
        createTable(tableName: "embarque") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "embarquePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "fecha_embarque", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "bl", type: "VARCHAR(100)") {
                constraints(nullable: "false")
            }

            column(name: "proveedor_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "liberado", type: "datetime")

            column(name: "comentario", type: "VARCHAR(250)")

            column(name: "ingreso_aduana", type: "datetime")

            column(name: "aduana_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "contenedores", type: "INT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-40") {
        createTable(tableName: "embarque_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "embarque_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "pedimento_id", type: "BIGINT")

            column(name: "tc", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "kilos_netos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "gramos", type: "DECIMAL(19, 2)")

            column(name: "cantidad", type: "DECIMAL(19, 3)") {
                constraints(nullable: "false")
            }

            column(name: "precio", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "kilos_estimados", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "gastos_honorarios", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "gastos_por_pedimento", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "compra_det_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "incrementables", type: "DECIMAL(19, 2)")

            column(name: "tarimas", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "costo_unitario_neto", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "embarque_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "factura_id", type: "BIGINT")

            column(name: "costo_neto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "incrementables_usd", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "precio_de_venta", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "producto_id", type: "BIGINT")

            column(name: "contenedor", type: "VARCHAR(30)")

            column(name: "costo_bruto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "partidas_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-41") {
        createTable(tableName: "empresa") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "empresaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "certificado_digital_pfx", type: "BLOB")

            column(name: "regimen", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "certificado_digital", type: "BLOB")

            column(name: "password_pfx", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "rfc", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "version_de_cfdi", type: "VARCHAR(3)") {
                constraints(nullable: "false")
            }

            column(name: "regimen_clave_sat", type: "VARCHAR(255)")

            column(name: "llave_privada", type: "BLOB")

            column(name: "numero_de_certificado", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(200)") {
                constraints(nullable: "false")
            }

            column(name: "registro_patronal", type: "VARCHAR(20)")

            column(name: "direccion_colonia", type: "VARCHAR(255)")

            column(name: "direccion_numero_exterior", type: "VARCHAR(50)")

            column(name: "direccion_codigo_postal", type: "VARCHAR(255)")

            column(name: "direccion_numero_interior", type: "VARCHAR(50)")

            column(name: "direccion_municipio", type: "VARCHAR(255)")

            column(name: "direccion_estado", type: "VARCHAR(255)")

            column(name: "direccion_pais", type: "VARCHAR(100)")

            column(name: "direccion_calle", type: "VARCHAR(200)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-42") {
        createTable(tableName: "folio") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "folioPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "folio", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "serie", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-43") {
        createTable(tableName: "impuesto_retenido") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "impuesto_retenidoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "base_ret", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "monto_ret", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "retencion_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "tipo_pago_ret", type: "VARCHAR(16)") {
                constraints(nullable: "false")
            }

            column(name: "impuestos_retenidos_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-44") {
        createTable(tableName: "linea") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "lineaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-45") {
        createTable(tableName: "marca") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "marcaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-46") {
        createTable(tableName: "mensaje") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "mensajePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-47") {
        createTable(tableName: "movimiento_de_cuenta") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "movimiento_de_cuentaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "grupo", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_deudora_id", type: "BIGINT")

            column(name: "referencia_bancaria", type: "VARCHAR(250)")

            column(name: "origen", type: "VARCHAR(70)") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(250)")

            column(name: "ingreso", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "concepto", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-48") {
        createTable(tableName: "nomina_asimilado") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "nomina_asimiladoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "percepciones", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "forma_de_pago", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "pago", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "asimilado_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "concepto", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "cfdi_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-49") {
        createTable(tableName: "nomina_asimilado_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "nomina_asimilado_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(10)") {
                constraints(nullable: "false")
            }

            column(name: "importe_excento", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "nomina_asimilado_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "clave", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "clave_sat", type: "VARCHAR(5)") {
                constraints(nullable: "false")
            }

            column(name: "importe_gravado", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-50") {
        createTable(tableName: "nota") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "notaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-51") {
        createTable(tableName: "pago_proveedor") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "pago_proveedorPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "banco_destino_id", type: "BIGINT")

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "banco_destino_ext", type: "VARCHAR(255)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "referencia", type: "VARCHAR(255)")

            column(name: "cuenta_destino", type: "VARCHAR(255)")

            column(name: "requisicion_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "tipo_de_cambio", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(200)")

            column(name: "egreso_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-52") {
        createTable(tableName: "pais_de_origen") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "pais_de_origenPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-53") {
        createTable(tableName: "pedimento") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "pedimentoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "agente_aduanal", type: "VARCHAR(255)")

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "pedimento", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }

            column(name: "pais_de_origen_id", type: "BIGINT")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "prevalidacion", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "proveedor_id", type: "BIGINT")

            column(name: "tipo_de_cambio", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "contra_prestacion", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "incrementables", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "incrementable1_id", type: "BIGINT")

            column(name: "arancel", type: "DECIMAL(19, 2)")

            column(name: "dta", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "referenciacg", type: "VARCHAR(50)")

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(250)")

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-54") {
        createTable(tableName: "perfil") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "perfilPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "foto", type: "BLOB")

            column(name: "twitter", type: "VARCHAR(255)")

            column(name: "dash_inicial", type: "VARCHAR(60)")

            column(name: "usuario_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "google", type: "VARCHAR(255)")

            column(name: "celular", type: "VARCHAR(255)")

            column(name: "telefono_casa", type: "VARCHAR(255)")

            column(name: "email", type: "VARCHAR(255)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-55") {
        createTable(tableName: "perfil_preferencias") {
            column(name: "perfil_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "preferencias_string", type: "VARCHAR(255)")

            column(name: "preferencias_idx", type: "VARCHAR(255)")

            column(name: "preferencias_elt", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-56") {
        createTable(tableName: "poliza") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "polizaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "cierre", type: "datetime")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "manual", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "ejercicio", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "haber", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "debe", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "sub_tipo", type: "VARCHAR(30)") {
                constraints(nullable: "false")
            }

            column(name: "folio", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(12)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "date") {
                constraints(nullable: "false")
            }

            column(name: "mes", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(250)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-57") {
        createTable(tableName: "poliza_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "poliza_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "entidad", type: "VARCHAR(255)")

            column(name: "asiento", type: "VARCHAR(255)")

            column(name: "poliza_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "referencia", type: "VARCHAR(255)")

            column(name: "haber", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "debe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "origen", type: "VARCHAR(255)")

            column(name: "descripcion", type: "VARCHAR(255)")

            column(name: "concepto", type: "VARCHAR(300)")

            column(name: "cuenta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "partidas_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-58") {
        createTable(tableName: "procesador_de_poliza") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "procesador_de_polizaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "sub_tipo", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }

            column(name: "orden", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(7)") {
                constraints(nullable: "false")
            }

            column(name: "service", type: "VARCHAR(100)")

            column(name: "descripcion", type: "VARCHAR(255)")

            column(name: "label", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-59") {
        createTable(tableName: "producto") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "productoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "calibre", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "ancho", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "gramos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "caras", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "clave", type: "VARCHAR(10)") {
                constraints(nullable: "false")
            }

            column(name: "unidad_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "acabado", type: "VARCHAR(255)")

            column(name: "kilos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "largo", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "producto_sat_id", type: "BIGINT")

            column(name: "marca_id", type: "BIGINT")

            column(name: "clase_id", type: "BIGINT")

            column(name: "precio_credito", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "m2", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(250)") {
                constraints(nullable: "false")
            }

            column(name: "precio_contado", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "color", type: "VARCHAR(255)")

            column(name: "linea_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-60") {
        createTable(tableName: "producto_sat") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "producto_satPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "clave_prod_serv", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-61") {
        createTable(tableName: "proveedor") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "proveedorPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "banco_destino_id", type: "BIGINT")

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "pais_de_origen", type: "VARCHAR(255)")

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_bancaria", type: "VARCHAR(30)")

            column(name: "sub_cuenta_operativa", type: "VARCHAR(4)")

            column(name: "nacionalidad", type: "VARCHAR(255)")

            column(name: "www", type: "VARCHAR(255)")

            column(name: "tipo_de_costeo", type: "VARCHAR(8)")

            column(name: "rfc", type: "VARCHAR(13)")

            column(name: "linea_de_credito", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "plazo", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "vencimento_bl", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "nacional", type: "BOOLEAN")

            column(name: "tipo", type: "VARCHAR(40)")

            column(name: "agencia_aduanal", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "factor_de_utilidad", type: "DECIMAL(19, 4)")

            column(name: "correo_electronico", type: "VARCHAR(255)")

            column(name: "nombre", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "direccion_colonia", type: "VARCHAR(255)")

            column(name: "direccion_numero_exterior", type: "VARCHAR(50)")

            column(name: "direccion_codigo_postal", type: "VARCHAR(255)")

            column(name: "direccion_numero_interior", type: "VARCHAR(50)")

            column(name: "direccion_municipio", type: "VARCHAR(255)")

            column(name: "direccion_estado", type: "VARCHAR(255)")

            column(name: "direccion_pais", type: "VARCHAR(100)")

            column(name: "direccion_calle", type: "VARCHAR(200)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-62") {
        createTable(tableName: "proveedor_agentes") {
            column(name: "proveedor_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "agentes_string", type: "VARCHAR(255)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-63") {
        createTable(tableName: "proveedor_producto") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "proveedor_productoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "gramos", type: "DECIMAL(19, 2)")

            column(name: "codigo", type: "VARCHAR(250)")

            column(name: "costo_unitario", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "producto_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(250)")

            column(name: "proveedor_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-64") {
        createTable(tableName: "requisicion") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "requisicionPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "ietu", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "forma_de_pago", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "fecha_del_pago", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "a_favor", type: "VARCHAR(255)")

            column(name: "descuento_financiero", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "proveedor_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "retencionisr", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(200)") {
                constraints(nullable: "false")
            }

            column(name: "retencion_flete", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuestos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "concepto", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "retencion_honorarios", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-65") {
        createTable(tableName: "requisicion_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "requisicion_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "ietu", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "fecha_documento", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "impuestos_aduanales", type: "DECIMAL(19, 2)")

            column(name: "requisicion_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "gastos_de_importacion", type: "DECIMAL(19, 2)")

            column(name: "retencionisr", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "embarque_id", type: "BIGINT")

            column(name: "total_documento", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "factura_id", type: "BIGINT")

            column(name: "retencion_flete", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuestos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "documento", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "retencion_honorarios", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "partidas_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-66") {
        createTable(tableName: "role") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "rolePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "authority", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-67") {
        createTable(tableName: "saldo_de_cuenta") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "saldo_de_cuentaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "egresos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "saldo_finalmn", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "saldo_inicial", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "saldo_final", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "cierre", type: "datetime")

            column(name: "mes", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "ingresos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "year", type: "INT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-68") {
        createTable(tableName: "saldo_por_cuenta_contable") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "saldo_por_cuenta_contablePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "saldo_inicial", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "saldo_final", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "cierre", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "mes", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "haber", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "year", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "debe", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-69") {
        createTable(tableName: "tarea") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "tareaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-70") {
        createTable(tableName: "tarifa_isr") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "tarifa_isrPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "cuota_fija", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "ejercicio", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "porcentaje", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "limite_inferior", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "tipo", type: "VARCHAR(7)") {
                constraints(nullable: "false")
            }

            column(name: "limite_superior", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-71") {
        createTable(tableName: "tipo_de_cambio") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "tipo_de_cambioPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "moneda_fuente", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "date") {
                constraints(nullable: "false")
            }

            column(name: "fuente", type: "VARCHAR(200)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "moneda_origen", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "factor", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-72") {
        createTable(tableName: "tipo_de_impuesto") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "tipo_de_impuestoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "clave", type: "VARCHAR(2)") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-73") {
        createTable(tableName: "tipo_de_retencion") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "tipo_de_retencionPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "clave", type: "VARCHAR(2)") {
                constraints(nullable: "false")
            }

            column(name: "descripcion", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-74") {
        createTable(tableName: "transaccion_cheque") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "transaccion_chequePK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "banco_emisor_nacional_id", type: "BIGINT")

            column(name: "cuenta_origen", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "rfc", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "numero", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "tipo_de_cambio", type: "DECIMAL(19, 5)") {
                constraints(nullable: "false")
            }

            column(name: "monto", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "banco_emisor_extranjero", type: "VARCHAR(150)")

            column(name: "poliza_det_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "beneficiario", type: "VARCHAR(300)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-75") {
        createTable(tableName: "transaccion_transferencia") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "transaccion_transferenciaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "banco_destino_extranjero", type: "VARCHAR(150)")

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_origen", type: "VARCHAR(50)")

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "rfc", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_destino", type: "VARCHAR(50)")

            column(name: "tipo_de_cambio", type: "DECIMAL(19, 5)") {
                constraints(nullable: "false")
            }

            column(name: "monto", type: "DECIMAL(19, 6)") {
                constraints(nullable: "false")
            }

            column(name: "banco_destino_nacional_id", type: "BIGINT")

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "banco_origen_extranjero", type: "VARCHAR(255)")

            column(name: "poliza_det_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "beneficiario", type: "VARCHAR(300)") {
                constraints(nullable: "false")
            }

            column(name: "banco_origen_nacional_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-76") {
        createTable(tableName: "traspaso") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "traspasoPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "comision", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_origen_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_destino_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "class", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "rendimiento_calculado", type: "DECIMAL(19, 2)")

            column(name: "tasa_isr", type: "DECIMAL(19, 2)")

            column(name: "rendimiento_fecha", type: "datetime")

            column(name: "plazo", type: "INT")

            column(name: "tasa", type: "DECIMAL(19, 2)")

            column(name: "rendimiento_real", type: "DECIMAL(19, 2)")

            column(name: "vencimiento", type: "datetime")

            column(name: "importe_isr", type: "DECIMAL(19, 2)")

            column(name: "rendimiento_impuesto", type: "DECIMAL(19, 2)")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-77") {
        createTable(tableName: "traspaso_movimiento_de_cuenta") {
            column(name: "traspaso_movimientos_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "movimiento_de_cuenta_id", type: "BIGINT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-78") {
        createTable(tableName: "unidad") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "unidadPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "clave", type: "VARCHAR(3)") {
                constraints(nullable: "false")
            }

            column(name: "unidad_sat", type: "VARCHAR(255)")

            column(name: "clave_unidad_sat", type: "VARCHAR(255)")

            column(name: "factor", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(50)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-79") {
        createTable(tableName: "user") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "userPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "password_expired", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "sucursal", type: "VARCHAR(20)")

            column(name: "account_expired", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "apellido_paterno", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "puesto", type: "VARCHAR(30)")

            column(name: "numero_de_empleado", type: "INT")

            column(name: "nombres", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "username", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "account_locked", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "password", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "enabled", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "email", type: "VARCHAR(255)")

            column(name: "apellido_materno", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-80") {
        createTable(tableName: "user_role") {
            column(name: "user_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "role_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-81") {
        createTable(tableName: "usuario") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "usuarioPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "password_expired", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "sucursal", type: "VARCHAR(20)")

            column(name: "account_expired", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "apellido_paterno", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "puesto", type: "VARCHAR(30)")

            column(name: "numero_de_empleado", type: "INT")

            column(name: "nombres", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "username", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "account_locked", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "password", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "nombre", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "enabled", type: "BOOLEAN") {
                constraints(nullable: "false")
            }

            column(name: "email", type: "VARCHAR(255)")

            column(name: "apellido_materno", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-82") {
        createTable(tableName: "usuario_role") {
            column(name: "usuario_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "role_id", type: "BIGINT") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-83") {
        createTable(tableName: "venta") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "ventaPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "tc", type: "DECIMAL(19, 4)") {
                constraints(nullable: "false")
            }

            column(name: "total", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "forma_de_pago", type: "VARCHAR(20)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "kilos", type: "DECIMAL(19, 3)") {
                constraints(nullable: "false")
            }

            column(name: "saldo", type: "DECIMAL(19, 2)")

            column(name: "moneda", type: "VARCHAR(255)") {
                constraints(nullable: "false")
            }

            column(name: "plazo", type: "INT") {
                constraints(nullable: "false")
            }

            column(name: "clase", type: "VARCHAR(40)")

            column(name: "uso_cfdi", type: "VARCHAR(3)")

            column(name: "tipo", type: "VARCHAR(13)") {
                constraints(nullable: "false")
            }

            column(name: "fecha", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "comentario", type: "VARCHAR(300)") {
                constraints(nullable: "false")
            }

            column(name: "vencimiento", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "subtotal", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuestos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "descuentos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "cuenta_de_pago", type: "VARCHAR(4)") {
                constraints(nullable: "false")
            }

            column(name: "cliente_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-84") {
        createTable(tableName: "venta_det") {
            column(autoIncrement: "true", name: "id", type: "BIGINT") {
                constraints(primaryKey: "true", primaryKeyName: "venta_detPK")
            }

            column(name: "version", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "date_created", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "cantidad", type: "DECIMAL(19, 3)") {
                constraints(nullable: "false")
            }

            column(name: "precio", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "last_updated", type: "datetime") {
                constraints(nullable: "false")
            }

            column(name: "kilos", type: "DECIMAL(19, 3)") {
                constraints(nullable: "false")
            }

            column(name: "venta_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "costo", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "embarque_id", type: "BIGINT")

            column(name: "comentario", type: "VARCHAR(300)")

            column(name: "producto_id", type: "BIGINT") {
                constraints(nullable: "false")
            }

            column(name: "contenedor", type: "VARCHAR(255)")

            column(name: "impuesto", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "aduana", type: "VARCHAR(50)")

            column(name: "subtotal", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "descuentos", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "impuesto_tasa", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "importe", type: "DECIMAL(19, 2)") {
                constraints(nullable: "false")
            }

            column(name: "partidas_idx", type: "INT")
        }
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-85") {
        addPrimaryKey(columnNames: "user_id, role_id", constraintName: "user_rolePK", tableName: "user_role")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-86") {
        addPrimaryKey(columnNames: "usuario_id, role_id", constraintName: "usuario_rolePK", tableName: "usuario_role")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-87") {
        addUniqueConstraint(columnNames: "nombre", constraintName: "UC_ADUANANOMBRE_COL", tableName: "aduana")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-88") {
        addUniqueConstraint(columnNames: "clave", constraintName: "UC_BANCO_SATCLAVE_COL", tableName: "banco_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-89") {
        addUniqueConstraint(columnNames: "nombre", constraintName: "UC_CLASENOMBRE_COL", tableName: "clase")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-90") {
        addUniqueConstraint(columnNames: "nombre", constraintName: "UC_CLIENTENOMBRE_COL", tableName: "cliente")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-91") {
        addUniqueConstraint(columnNames: "uuid", constraintName: "UC_COMPROBANTE_FISCALUUID_COL", tableName: "comprobante_fiscal")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-92") {
        addUniqueConstraint(columnNames: "codigo", constraintName: "UC_CUENTA_SATCODIGO_COL", tableName: "cuenta_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-93") {
        addUniqueConstraint(columnNames: "bl", constraintName: "UC_EMBARQUEBL_COL", tableName: "embarque")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-94") {
        addUniqueConstraint(columnNames: "nombre", constraintName: "UC_EMPRESANOMBRE_COL", tableName: "empresa")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-95") {
        addUniqueConstraint(columnNames: "nombre", constraintName: "UC_LINEANOMBRE_COL", tableName: "linea")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-96") {
        addUniqueConstraint(columnNames: "nombre", constraintName: "UC_MARCANOMBRE_COL", tableName: "marca")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-97") {
        addUniqueConstraint(columnNames: "requisicion_id", constraintName: "UC_PAGO_PROVEEDORREQUISICION_ID_COL", tableName: "pago_proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-98") {
        addUniqueConstraint(columnNames: "nombre", constraintName: "UC_PAIS_DE_ORIGENNOMBRE_COL", tableName: "pais_de_origen")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-99") {
        addUniqueConstraint(columnNames: "pedimento", constraintName: "UC_PEDIMENTOPEDIMENTO_COL", tableName: "pedimento")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-100") {
        addUniqueConstraint(columnNames: "sub_tipo", constraintName: "UC_PROCESADOR_DE_POLIZASUB_TIPO_COL", tableName: "procesador_de_poliza")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-101") {
        addUniqueConstraint(columnNames: "clave", constraintName: "UC_PRODUCTOCLAVE_COL", tableName: "producto")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-102") {
        addUniqueConstraint(columnNames: "clave_prod_serv", constraintName: "UC_PRODUCTO_SATCLAVE_PROD_SERV_COL", tableName: "producto_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-103") {
        addUniqueConstraint(columnNames: "authority", constraintName: "UC_ROLEAUTHORITY_COL", tableName: "role")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-104") {
        addUniqueConstraint(columnNames: "clave", constraintName: "UC_TIPO_DE_IMPUESTOCLAVE_COL", tableName: "tipo_de_impuesto")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-105") {
        addUniqueConstraint(columnNames: "clave", constraintName: "UC_TIPO_DE_RETENCIONCLAVE_COL", tableName: "tipo_de_retencion")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-106") {
        addUniqueConstraint(columnNames: "clave", constraintName: "UC_UNIDADCLAVE_COL", tableName: "unidad")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-107") {
        addUniqueConstraint(columnNames: "nombre", constraintName: "UC_UNIDADNOMBRE_COL", tableName: "unidad")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-108") {
        addUniqueConstraint(columnNames: "username", constraintName: "UC_USERUSERNAME_COL", tableName: "user")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-109") {
        addUniqueConstraint(columnNames: "username", constraintName: "UC_USUARIOUSERNAME_COL", tableName: "usuario")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-110") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_origen_id", baseTableName: "compra_de_moneda", constraintName: "FK1cef0n9wdw8bat9x9f68twoyk", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-111") {
        addForeignKeyConstraint(baseColumnNames: "venta_id", baseTableName: "cxcnota_det", constraintName: "FK1hspdw494fun0pgcne97esu99", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "venta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-112") {
        addForeignKeyConstraint(baseColumnNames: "factura_id", baseTableName: "cxcaplicacion", constraintName: "FK1rjxa4s9vyo1p0bmh0gmojogb", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "venta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-113") {
        addForeignKeyConstraint(baseColumnNames: "poliza_det_id", baseTableName: "transaccion_transferencia", constraintName: "FK27q1ppi932sbchbc3u0uau4af", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "poliza_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-114") {
        addForeignKeyConstraint(baseColumnNames: "factura_id", baseTableName: "aplicacion", constraintName: "FK2a7629klkp01qnsbly4ujtqhv", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-115") {
        addForeignKeyConstraint(baseColumnNames: "pago_proveedor_id", baseTableName: "abono", constraintName: "FK2jy6jo8cogr7dtetcfup5pqft", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "pago_proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-116") {
        addForeignKeyConstraint(baseColumnNames: "poliza_det_id", baseTableName: "comprobante_extranjero", constraintName: "FK2s7je2rcbwc9l9llxtcgslwue", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "poliza_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-117") {
        addForeignKeyConstraint(baseColumnNames: "poliza_det_id", baseTableName: "transaccion_cheque", constraintName: "FK4669q5taxogfn2lamdeg38at7", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "poliza_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-118") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_id", baseTableName: "saldo_de_cuenta", constraintName: "FK474omqg32c1w4rmev1g3nw5nr", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-119") {
        addForeignKeyConstraint(baseColumnNames: "embarque_id", baseTableName: "embarque_det", constraintName: "FK47ydmfl6xhn206ssqodi0nm2x", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "embarque")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-120") {
        addForeignKeyConstraint(baseColumnNames: "pago_proveedor_id", baseTableName: "compra_de_moneda", constraintName: "FK4h3arikrnel17scifb3phkd1e", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "pago_proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-121") {
        addForeignKeyConstraint(baseColumnNames: "abono_id", baseTableName: "aplicacion", constraintName: "FK4jojbyufe9hc9un4xaeyqifk9", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "abono")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-122") {
        addForeignKeyConstraint(baseColumnNames: "requisicion_id", baseTableName: "pago_proveedor", constraintName: "FK4yw991y7eioadkqacakto2n1x", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "requisicion")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-123") {
        addForeignKeyConstraint(baseColumnNames: "egreso_id", baseTableName: "pago_proveedor", constraintName: "FK54nw8ug6ou02yf1jo0ph246y5", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-124") {
        addForeignKeyConstraint(baseColumnNames: "factura_id", baseTableName: "concepto_de_gasto", constraintName: "FK550dk3cnjsom9c6ulwy2a9x0l", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-125") {
        addForeignKeyConstraint(baseColumnNames: "ingreso_id", baseTableName: "cxcabono", constraintName: "FK5d7bl3vu78ts8v50x20dk1hea", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-126") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "compra", constraintName: "FK5rv6m306dgdn4cn14eyhpexwu", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-127") {
        addForeignKeyConstraint(baseColumnNames: "unidad_id", baseTableName: "producto", constraintName: "FK61kvndtovjcqlv5l3eneanlyf", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "unidad")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-128") {
        addForeignKeyConstraint(baseColumnNames: "pedimento_id", baseTableName: "cuenta_por_pagar", constraintName: "FK68aqw2o5b7pn9d10co4vnm7y5", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "pedimento")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-129") {
        addForeignKeyConstraint(baseColumnNames: "egreso_id", baseTableName: "concepto_de_gasto", constraintName: "FK68h8wuqgy8miuxl5xjxgn0cie", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-130") {
        addForeignKeyConstraint(baseColumnNames: "banco_sat_id", baseTableName: "asimilado", constraintName: "FK754purlx3arxp9og0d8ai226r", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "banco_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-131") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "proveedor_producto", constraintName: "FK78jycb5jwcjrwokq8fcbjnpw8", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-132") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "embarque", constraintName: "FK7g03vlnuhone4hy0q0p1npssm", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-133") {
        addForeignKeyConstraint(baseColumnNames: "movimiento_de_cuenta_id", baseTableName: "comision_movimiento_de_cuenta", constraintName: "FK7sd5u880u4cgajgg703ex42tu", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-134") {
        addForeignKeyConstraint(baseColumnNames: "user_id", baseTableName: "user_role", constraintName: "FK859n2jvi8ivhui0rl0esws6o", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "user")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-135") {
        addForeignKeyConstraint(baseColumnNames: "marca_id", baseTableName: "producto", constraintName: "FK868tnrt85f21kgcvt9bftgr8r", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "marca")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-136") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_id", baseTableName: "pago_proveedor", constraintName: "FK8bifp9ow9xoea1qkvcpbmaege", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-137") {
        addForeignKeyConstraint(baseColumnNames: "concepto_id", baseTableName: "concepto_de_gasto", constraintName: "FK8g9h781yk99y60tq0b238y3l6", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_contable")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-138") {
        addForeignKeyConstraint(baseColumnNames: "cliente_id", baseTableName: "cxcabono", constraintName: "FK8xwg3mqieooq652g8e7ll8jvc", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cliente")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-139") {
        addForeignKeyConstraint(baseColumnNames: "banco_id", baseTableName: "cuenta_bancaria", constraintName: "FK939vxysiw9bntx0ncv1rj2sqx", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "banco")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-140") {
        addForeignKeyConstraint(baseColumnNames: "producto_id", baseTableName: "compra_det", constraintName: "FK9cm59b41ck65ayvh2dhsgb84q", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "producto")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-141") {
        addForeignKeyConstraint(baseColumnNames: "incrementable1_id", baseTableName: "pedimento", constraintName: "FK9h0rikiidvbonu9scf9klqd2f", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-142") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "requisicion", constraintName: "FK9qpywh78jy05ipal85py107vn", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-143") {
        addForeignKeyConstraint(baseColumnNames: "role_id", baseTableName: "user_role", constraintName: "FKa68196081fvovjhkek5m97n3y", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "role")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-144") {
        addForeignKeyConstraint(baseColumnNames: "cfdi_id", baseTableName: "nomina_asimilado", constraintName: "FKa7if65rxakvat186kg8j0gejs", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cfdi")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-145") {
        addForeignKeyConstraint(baseColumnNames: "cliente_id", baseTableName: "venta", constraintName: "FKa7yaj59nfh3gft0h38o5bv472", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cliente")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-146") {
        addForeignKeyConstraint(baseColumnNames: "comision_movimientos_id", baseTableName: "comision_movimiento_de_cuenta", constraintName: "FKadxn3lw5h16241vg7p3wqm31v", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "comision")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-147") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_generica_id", baseTableName: "cuenta_por_pagar", constraintName: "FKaud45lo5icdceqocp3grct6mn", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_de_gastos_generica")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-148") {
        addForeignKeyConstraint(baseColumnNames: "asimilado_id", baseTableName: "nomina_asimilado", constraintName: "FKaygmq1i0iwpx0efho136qhvc3", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "asimilado")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-149") {
        addForeignKeyConstraint(baseColumnNames: "egreso_id", baseTableName: "cheque", constraintName: "FKbb7lwb9tjg5yaget7oddh11xs", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-150") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_id", baseTableName: "saldo_por_cuenta_contable", constraintName: "FKbms5gk8ppuf8425id2ghh4gbe", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_contable")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-151") {
        addForeignKeyConstraint(baseColumnNames: "producto_sat_id", baseTableName: "producto", constraintName: "FKbpdarix75qn9i5yq4qqtyls9p", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "producto_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-152") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "abono", constraintName: "FKbs45jc7or9w17j8tvfeluq57x", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-153") {
        addForeignKeyConstraint(baseColumnNames: "embarque_id", baseTableName: "distribucion", constraintName: "FKbs5hu9rrvjau0lgsrl4iltu17", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "embarque")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-154") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_contable_id", baseTableName: "cuenta_bancaria", constraintName: "FKbwsdxr0exxm67svm6efawv5n5", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_contable")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-155") {
        addForeignKeyConstraint(baseColumnNames: "embarque_id", baseTableName: "cuenta_de_gastos", constraintName: "FKc2pw8cjs5iw4o1glanwcnj995", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "embarque")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-156") {
        addForeignKeyConstraint(baseColumnNames: "compra_det_id", baseTableName: "embarque_det", constraintName: "FKc48qtj9hunlslq5eglbs10gkh", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "compra_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-157") {
        addForeignKeyConstraint(baseColumnNames: "embarque_det_id", baseTableName: "distribucion_det", constraintName: "FKc4gnk7pesf2ay3gjksk8coyqk", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "embarque_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-158") {
        addForeignKeyConstraint(baseColumnNames: "cxp_id", baseTableName: "comprobante_fiscal", constraintName: "FKca2iu0h8a7jl89a3h6e1t626w", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-159") {
        addForeignKeyConstraint(baseColumnNames: "complemento_id", baseTableName: "anticipo", constraintName: "FKcgsm35c4jgi6vd52vu3cfmtmv", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "requisicion")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-160") {
        addForeignKeyConstraint(baseColumnNames: "compra_id", baseTableName: "compra_det", constraintName: "FKco2wob2pgkrshskjbtb2g6oyx", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "compra")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-161") {
        addForeignKeyConstraint(baseColumnNames: "producto_id", baseTableName: "proveedor_producto", constraintName: "FKd2m12d4vydmdop7y1gqd5ndmj", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "producto")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-162") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_deudora_id", baseTableName: "movimiento_de_cuenta", constraintName: "FKdmapcwkvcahuqklknijlvi8mf", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_contable")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-163") {
        addForeignKeyConstraint(baseColumnNames: "pedimento_id", baseTableName: "embarque_det", constraintName: "FKe1wa0boavsmdt1fdaox22imme", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "pedimento")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-164") {
        addForeignKeyConstraint(baseColumnNames: "role_id", baseTableName: "usuario_role", constraintName: "FKe7gfguqsiox6p89xggm8g2twf", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "role")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-165") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "proveedor_agentes", constraintName: "FKeiuyy1m4gfwvv5lq5jye2ei0h", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-166") {
        addForeignKeyConstraint(baseColumnNames: "requisicion_id", baseTableName: "compra_de_moneda", constraintName: "FKesd7w04g23k74x911xuk4lkti", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "requisicion")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-167") {
        addForeignKeyConstraint(baseColumnNames: "retencion_id", baseTableName: "impuesto_retenido", constraintName: "FKesx051k89sjpcweg1hx1ipc4v", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cfdi_retenciones")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-168") {
        addForeignKeyConstraint(baseColumnNames: "banco_origen_nacional_id", baseTableName: "transaccion_transferencia", constraintName: "FKf3ybqft6ar6nyvbxecmuwobur", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "banco_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-169") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "cuenta_de_gastos_generica", constraintName: "FKfcyxqyneoco8qnablohuwhydn", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-170") {
        addForeignKeyConstraint(baseColumnNames: "cfdi_id", baseTableName: "cancelacion_de_cfdi", constraintName: "FKfewqsbr5l1qrt4vxytevbglkx", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cfdi")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-171") {
        addForeignKeyConstraint(baseColumnNames: "nota_id", baseTableName: "cxcnota_det", constraintName: "FKff9rxmt7d545g8xvetg6hcnvr", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cxcabono")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-172") {
        addForeignKeyConstraint(baseColumnNames: "requisicion_id", baseTableName: "requisicion_det", constraintName: "FKfhx1xollkll8yhwb7ohco9kvb", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "requisicion")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-173") {
        addForeignKeyConstraint(baseColumnNames: "cfdi_id", baseTableName: "cargo_det", constraintName: "FKfx7le9it063ytotb5jduw1se5", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cfdi")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-174") {
        addForeignKeyConstraint(baseColumnNames: "embarque_id", baseTableName: "venta_det", constraintName: "FKgl3bri6ka75ckuyq5ulnsybj7", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "embarque_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-175") {
        addForeignKeyConstraint(baseColumnNames: "factura_id", baseTableName: "requisicion_det", constraintName: "FKgvyx9shcsgs68gqwrvl7oeqrd", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-176") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_sat_id", baseTableName: "cuenta_contable", constraintName: "FKhajkqymt751rtbwo3cpuni0fo", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-177") {
        addForeignKeyConstraint(baseColumnNames: "banco_emisor_nacional_id", baseTableName: "transaccion_cheque", constraintName: "FKhbo8iiia1fpbjj2h7ngudv67v", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "banco_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-178") {
        addForeignKeyConstraint(baseColumnNames: "pais_de_origen_id", baseTableName: "pedimento", constraintName: "FKib0r30kefkymrb2bbi357uaa3", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "pais_de_origen")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-179") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "cuenta_por_pagar", constraintName: "FKibv1pfiedayd3s3hb07mv1mr6", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-180") {
        addForeignKeyConstraint(baseColumnNames: "venta_id", baseTableName: "venta_det", constraintName: "FKil9etbuyr5177c8qil48lrno7", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "venta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-181") {
        addForeignKeyConstraint(baseColumnNames: "embarque_id", baseTableName: "requisicion_det", constraintName: "FKisp0r0v8brvp5imw62326cpf2", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "embarque")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-182") {
        addForeignKeyConstraint(baseColumnNames: "requisicion_id", baseTableName: "anticipo", constraintName: "FKj3bpmsrwtx7yldkcwkqqslroq", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "requisicion")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-183") {
        addForeignKeyConstraint(baseColumnNames: "sobrante_id", baseTableName: "anticipo", constraintName: "FKjor44tnl5en3vt92pt3m4ds", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-184") {
        addForeignKeyConstraint(baseColumnNames: "clase_id", baseTableName: "producto", constraintName: "FKk1w0arquk4r96cmn87vh7k5vx", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "clase")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-185") {
        addForeignKeyConstraint(baseColumnNames: "banco_destino_id", baseTableName: "pago_proveedor", constraintName: "FKk6by8iw6liqwk4f2p1wboh143", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "banco_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-186") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_destino_id", baseTableName: "traspaso", constraintName: "FKkoqxya3s9qcjb8q826vf0s1iq", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-187") {
        addForeignKeyConstraint(baseColumnNames: "venta_id", baseTableName: "cargo_det", constraintName: "FKkr0fosw5o3w3xatm1qahc9ktn", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "venta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-188") {
        addForeignKeyConstraint(baseColumnNames: "banco_destino_id", baseTableName: "proveedor", constraintName: "FKkvob051mtwtj6jxx0i1kkukcm", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "banco_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-189") {
        addForeignKeyConstraint(baseColumnNames: "banco_sat_id", baseTableName: "banco", constraintName: "FKl3vl0cfj047dr7f6hf7wwi5i9", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "banco_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-190") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_id", baseTableName: "cxcabono", constraintName: "FKl6h3kuhu2rf3ts62tcav9094k", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-191") {
        addForeignKeyConstraint(baseColumnNames: "nomina_asimilado_id", baseTableName: "nomina_asimilado_det", constraintName: "FKlyiwcro7xbayruogh6qgis9jt", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "nomina_asimilado")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-192") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_de_gastos_facturas_id", baseTableName: "cuenta_de_gastos_cuenta_por_pagar", constraintName: "FKm3rpc0ig86ts3v6y1q2ctrmbr", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_de_gastos")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-193") {
        addForeignKeyConstraint(baseColumnNames: "poliza_id", baseTableName: "poliza_det", constraintName: "FKmecx7jpbhf1b3cvhifir82a8v", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "poliza")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-194") {
        addForeignKeyConstraint(baseColumnNames: "producto_id", baseTableName: "venta_det", constraintName: "FKn3nhixdyntjq8jmcclldps7u3", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "producto")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-195") {
        addForeignKeyConstraint(baseColumnNames: "usuario_id", baseTableName: "perfil", constraintName: "FKno01a8iut56nipcu6qdnxgeg5", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "usuario")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-196") {
        addForeignKeyConstraint(baseColumnNames: "tipo_de_retencion_id", baseTableName: "cfdi_retenciones", constraintName: "FKnvehr9fqltgalm8l9er8398r4", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "tipo_de_retencion")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-197") {
        addForeignKeyConstraint(baseColumnNames: "distribucion_id", baseTableName: "distribucion_det", constraintName: "FKny37irgsd58jbxkk5t2tn3lx1", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "distribucion")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-198") {
        addForeignKeyConstraint(baseColumnNames: "banco_destino_nacional_id", baseTableName: "transaccion_transferencia", constraintName: "FKocni6342788d7mt6dlbwsbjdb", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "banco_sat")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-199") {
        addForeignKeyConstraint(baseColumnNames: "impuesto_id", baseTableName: "impuesto_retenido", constraintName: "FKoe5x5r51ch7r38l9t53vwffb6", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "tipo_de_impuesto")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-200") {
        addForeignKeyConstraint(baseColumnNames: "traspaso_movimientos_id", baseTableName: "traspaso_movimiento_de_cuenta", constraintName: "FKoh4e37xcmosdbhbhb1rl8wb76", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "traspaso")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-201") {
        addForeignKeyConstraint(baseColumnNames: "linea_id", baseTableName: "producto", constraintName: "FKp9mg960e99epe6nnfn34ijqh3", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "linea")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-202") {
        addForeignKeyConstraint(baseColumnNames: "usuario_id", baseTableName: "usuario_role", constraintName: "FKpc2qjts6sqq4hja9f6i3hf0ep", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "usuario")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-203") {
        addForeignKeyConstraint(baseColumnNames: "cxp_id", baseTableName: "comision", constraintName: "FKpjcqv167uc6nl29r4rsn9psgw", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-204") {
        addForeignKeyConstraint(baseColumnNames: "factura_id", baseTableName: "embarque_det", constraintName: "FKpmxfj9sgig6dlny3pj995y3fg", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-205") {
        addForeignKeyConstraint(baseColumnNames: "aduana_id", baseTableName: "embarque", constraintName: "FKpns63672swcwdg3x231107l23", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "aduana")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-206") {
        addForeignKeyConstraint(baseColumnNames: "abono_id", baseTableName: "cxcaplicacion", constraintName: "FKprgo25k1vpb2u0o6qc223368a", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cxcabono")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-207") {
        addForeignKeyConstraint(baseColumnNames: "padre_id", baseTableName: "cuenta_contable", constraintName: "FKpvy2cg2butb5gybkdqgfuvfum", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_contable")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-208") {
        addForeignKeyConstraint(baseColumnNames: "movimiento_de_cuenta_id", baseTableName: "traspaso_movimiento_de_cuenta", constraintName: "FKqbvb07tlh283pmieu5fct501m", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-209") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_por_pagar_id", baseTableName: "cuenta_de_gastos_cuenta_por_pagar", constraintName: "FKqh1upag8f2kqi57534x7y0a8j", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_por_pagar")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-210") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_id", baseTableName: "poliza_det", constraintName: "FKr3935k1v3yo8vix6xrnqtdi6i", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_contable")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-211") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_id", baseTableName: "cheque", constraintName: "FKrko2yryw5x7cey76civyaan1y", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-212") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "pedimento", constraintName: "FKryhov28hd6wrv8kc1pttgbj0y", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-213") {
        addForeignKeyConstraint(baseColumnNames: "cargo_id", baseTableName: "cancelacion_de_cargo", constraintName: "FKs8pj39axnag4t1vr1fkeg0m4x", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "venta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-214") {
        addForeignKeyConstraint(baseColumnNames: "proveedor_id", baseTableName: "cuenta_de_gastos", constraintName: "FKsbskp7tvo4at5c5qxl06n2i78", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "proveedor")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-215") {
        addForeignKeyConstraint(baseColumnNames: "ingreso_id", baseTableName: "compra_de_moneda", constraintName: "FKskbkli0hbdtm433ounqvrt67b", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "movimiento_de_cuenta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-216") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_id", baseTableName: "movimiento_de_cuenta", constraintName: "FKsphsbstqlc8hsxiy3yalub41m", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-217") {
        addForeignKeyConstraint(baseColumnNames: "poliza_det_id", baseTableName: "comprobante_nacional", constraintName: "FKsu50cb78g98udfywdytjuv4t4", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "poliza_det")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-218") {
        addForeignKeyConstraint(baseColumnNames: "producto_id", baseTableName: "embarque_det", constraintName: "FKt3licvioivesg21ed7k72kvi8", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "producto")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-219") {
        addForeignKeyConstraint(baseColumnNames: "venta_relacionada_id", baseTableName: "cxcabono", constraintName: "FKt4abppep1hmrm6y5gdnphwfnn", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "venta")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-220") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_destino_id", baseTableName: "compra_de_moneda", constraintName: "FKtawcs715evmbipkm2ifmou48p", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-221") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_id", baseTableName: "comision", constraintName: "FKtj4xe54nm0p7ee2igxfdusx85", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }

    changeSet(author: "rubencancino (generated)", id: "1556553391007-222") {
        addForeignKeyConstraint(baseColumnNames: "cuenta_origen_id", baseTableName: "traspaso", constraintName: "FKtk164ys8fu9aedv277pnk9892", deferrable: "false", initiallyDeferred: "false", referencedColumnNames: "id", referencedTableName: "cuenta_bancaria")
    }
}
