// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../../../datasources';
import {VendorMaster, VendorMasterRelations} from '../../../models';

export class VendorMasterRepository extends DefaultCrudRepository<
  VendorMaster,
  typeof VendorMaster.prototype.vendormasterid,
  VendorMasterRelations
  > {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(VendorMaster, dataSource);
  }
}
