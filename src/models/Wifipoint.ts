"use strict";

import { Schema, Types } from "mongoose";
import * as mongoose from "mongoose";

console.log("Loading model WifipointSchema");
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
    TELEFON: { type: String, default: ""}
});

wifipointSchema.pre("save", (next) => {
    next();
});

mongoose.model('Wifipoint', wifipointSchema);