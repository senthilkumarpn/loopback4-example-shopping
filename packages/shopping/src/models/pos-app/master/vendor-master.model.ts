// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property} from '@loopback/repository';

@model()
export class VendorMaster extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  vendormasterid?: string;

  @property({
    type: 'string',
    required: true,
  })
  vendorname: string;

  @property({
    type: 'string',
    required: true,
  })
  vendorcode: string;

  @property({
    type: 'string',
    required: true,
  })
  contactperson: string;

  @property({
    type: 'number',
    required: true,
  })
  contactpersonmobile: number;

  @property({
    type: 'string',
    required: true,
  })
  housenumber: string;

  @property({
    type: 'string',
    required: true,
  })
  street: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;


  @property({
    type: 'number',
    required: true,
  })
  state: number;

  @property({
    type: 'number',
    required: true,
  })
  country: number;

  @property({
    type: 'number',
    required: true,
  })
  pincode: number;

  @property({
    type: 'number',
    required: true,
  })
  landline: number;

  @property({
    type: 'number',
    required: true,
  })
  mobile: number;

  @property({
    type: 'number',
    required: true,
  })
  alternatemobile: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  gstnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  bankaccountholdername: string;

  @property({
    type: 'string',
    required: true,
  })
  bankaccountnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  bankname: string;

  @property({
    type: 'string',
    required: true,
  })
  bankifsc: string;



  @property({
    type: 'Date',
  })
  createdon?: Date;

  @property({
    type: 'string',
  })
  createdby?: string;

  @property({
    type: 'Date',
  })
  updatedon?: Date;

  @property({
    type: 'string',
  })
  updatedby?: string;


  @property({
    type: 'number',
    required: true,
  })
  status: number;

  constructor(data?: Partial<VendorMaster>) {
    super(data);
  }
}

export interface VendorMasterRelations {
  // describe navigational properties here
}

export type VendorMasterWithRelations = VendorMaster & VendorMasterRelations;
