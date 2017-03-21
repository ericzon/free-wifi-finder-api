"use strict";

import { Schema, Types } from "mongoose";
import * as mongoose from "mongoose";
import logger from '../../libs/logger';
const filter = require('mongoose-filter-denormalize').filter;
const projectionRules = require('./projection').projectionRules;

logger.info("Loading model WifipointSchema");
export const wifipointSchema: Schema = new Schema({
    CODI_CAPA: String,
    CAPA_GENERICA: String,
    NOM_CAPA: String,
    ED50_COORD_X: String,
    ED50_COORD_Y: String,
    ETRS89_COORD_X: String,
    ETRS89_COORD_Y: String,
    LONGITUD: Number,
    LATITUD: Number,
    EQUIPAMENT: String,
    DISTRICTE: Number,
    BARRI: Number,
    NOM_DISTRICTE: String,
    NOM_BARRI: String,
    ADRECA: String,
    TELEFON: { type: String, default: ""},
    position: {
        type: { 
			type: String 
		},
		coordinates: []
    }
});
// console.log("projectionRules -> ",projectionRules);
wifipointSchema.plugin(filter, projectionRules);

wifipointSchema.pre("save", (next) => {
    next();
});

wifipointSchema.index( { position:'2dsphere' } );
mongoose.model('wifipoint', wifipointSchema, 'wifipoint');