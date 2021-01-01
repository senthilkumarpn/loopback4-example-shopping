// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property} from '@loopback/repository';

@model()
export class ItemMaster extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  itemmasterid?: string;

  @property({
    type: 'string',
    required: true,
  })
  itemcode: string;

  @property({
    type: 'string',
    required: true,
  })
  itemname: string;

  @property({
    type: 'number',
    required: true,
  })
  grade: number;

  @property({
    type: 'number',
    required: true,
  })
  uom: number;


  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  safetystock: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

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

  constructor(data?: Partial<ItemMaster>) {
    super(data);
  }
}

export interface ItemMasterRelations {
  // describe navigational properties here
}

export type ItemMasterWithRelations = ItemMaster & ItemMasterRelations;
